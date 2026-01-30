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

const NoticeRow = ({ notice }) => {
  const auth = useContext(AuthContext);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleOptions = (e) => {
    e.stopPropagation(); // 행 클릭 이벤트 방지
    setIsOptionsOpen(!isOptionsOpen);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    // 수정 로직
    setIsOptionsOpen(false);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    // 삭제 로직
    setIsOptionsOpen(false);
  };

  return (
    <>
      <NoticeRowContainer onClick={toggleExpand} style={{ cursor: "pointer" }}>
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
            {notice.status ? "공개" : "비공개"}
          </StatusBadge>
        </StatusCell>
        <OptionsCell onClick={(e) => e.stopPropagation()}>
          <OptionsButton onClick={toggleOptions}>
            <MoreVertical size={18} />
          </OptionsButton>
          {isOptionsOpen && (
            <OptionsMenu>
              <OptionsMenuItem onClick={handleEdit}>수정하기</OptionsMenuItem>
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
