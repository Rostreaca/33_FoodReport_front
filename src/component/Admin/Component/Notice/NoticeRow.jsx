import { useContext, useState } from "react";
import { MoreVertical, ChevronDown, ChevronUp } from "lucide-react";
import {
  NoticeRowContainer,
  TitleCell,
  AuthorCell,
  DateCell,
  StatusCell,
  StatusBadge,
  OptionsCell,
  OptionsButton,
  OptionsMenu,
  OptionsMenuItem,
  ContentSection,
  ContentWrapper,
  ContentLabel,
  ContentText,
  ContentImage,
} from "./NoticeRow.style.js";
import { AuthContext } from "../../../context/AuthContext";
import { authInstance } from "../../../api/reqService.js";
import Toast from "../../../common/Toast/Toast.jsx";
import { useNavigate } from "react-router-dom";

const NoticeRow = ({ notice, onStatusChange }) => {
  const auth = useContext(AuthContext);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "error",
  });
  const navi = useNavigate();

  const showToast = (message, type = "error") => {
    // 알럿 대신 토스트
    setToast({ show: true, message, type });
  };

  const toggleOptions = (e) => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleUpdate = (e) => {
    const noticeNo = notice.noticeNo;
    navi(`/admin/notices/form/${noticeNo}`, { state: { notice } });
    setIsOptionsOpen(false);
  };

  const handleDelete = (e) => {
    const noticeNo = notice.noticeNo;
    authInstance
      .delete(`/api/admin/notices/${noticeNo}`)
      .then((res) => {
        if (res.status === 204) {
          showToast("삭제 성공하였습니다!", "success");
        }
      })
      .catch((err) => {
        console.log(err);
        showToast("삭제에 실패하였습니다!", "error");
      });

    setIsOptionsOpen(false);
  };

  return (
    <>
      <NoticeRowContainer onClick={toggleExpand} style={{ cursor: "pointer" }}>
        {toast.show && (
          <Toast
            message={toast.message}
            type={toast.type}
            duration={3000}
            onClose={() => setToast({ ...toast, show: false })}
          />
        )}
        <TitleCell>
          <span className="mobile-label">제목:</span>
          <span className="mobile-value">
            {notice.noticeTitle}
            {isExpanded ? (
              <ChevronUp
                size={16}
                style={{ marginLeft: "8px", display: "inline" }}
              />
            ) : (
              <ChevronDown
                size={16}
                style={{ marginLeft: "8px", display: "inline" }}
              />
            )}
          </span>
        </TitleCell>
        <AuthorCell>
          <span className="mobile-label">작성자:</span>
          <span className="mobile-value">{auth.auth.nickname}</span>
        </AuthorCell>
        <DateCell>
          <span className="mobile-label">작성일:</span>
          <span className="mobile-value">
            {notice.createDate
              ? new Date(notice.createDate).toLocaleDateString("ko-KR")
              : "-"}
          </span>
        </DateCell>
        <StatusCell>
          <span className="mobile-label">상태:</span>
          <StatusBadge $isActive={notice.status}>
            {notice.status === "Y" ? "공개" : "비공개"}
          </StatusBadge>
        </StatusCell>
        <OptionsCell onClick={(e) => e.stopPropagation()}>
          <OptionsButton onClick={toggleOptions}>
            <MoreVertical size={18} />
          </OptionsButton>
          {isOptionsOpen && (
            <OptionsMenu>
              <OptionsMenuItem onClick={handleUpdate}>수정하기</OptionsMenuItem>
              <OptionsMenuItem onClick={handleDelete}>삭제하기</OptionsMenuItem>
            </OptionsMenu>
          )}
        </OptionsCell>
      </NoticeRowContainer>

      {isExpanded && (
        <ContentSection>
          <ContentWrapper>
            <ContentLabel>내용</ContentLabel>
            {notice.noticeImageUrl && (
              <ContentImage>
                <img src={notice.noticeImageUrl} alt="공지사항 이미지" />
              </ContentImage>
            )}
            <ContentText>
              {notice.noticeContent || "내용이 없습니다."}
            </ContentText>
          </ContentWrapper>
        </ContentSection>
      )}
    </>
  );
};

export default NoticeRow;
