import { useEffect, useState } from "react";
import { Hash } from "lucide-react";
import {
  HeaderSection,
  Breadcrumb,
  WelcomeMessage,
  Container,
  SearchActionSection,
  SearchWrapper,
  ActionButtons,
  AddButton,
  DeleteButton,
  MainContentArea,
  HashtagList,
  HashtagTag,
  EmptyStateMessage,
  PageWrapper,
  TagWrapper,
  HashtagContent,
  ContentText,
  UpdateButton,
} from "./AdminHashtag.style";
import HashtagModal from "./HashtagModal";
import { authInstance } from "../../../api/reqService";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../../common/Paging/Pagination";
import Toast from "../../../common/Toast/Toast";

const AdminHashtag = () => {
  const [hashtags, setHashtags] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false); // 업데이트 용 모달
  const [selectedHashtags, setSelectedHashtags] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageInfo, setPageInfo] = useState({});
  const [activeTagNo, setActiveTagNo] = useState(null);
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "error",
  });

  const handleTagClick = (tagNo) => {
    // 해시태그 클릭시 나오는 함수
    setActiveTagNo((prev) => (prev === tagNo ? null : tagNo));
    setSelectedHashtags((prev) => (prev.includes(tagNo) ? [] : [tagNo]));
  };

  const showToast = (message, type = "error") => {
    // 알럿 대신 토스트
    setToast({ show: true, message, type });
  };
  const handleUpdateClick = (selectedHashtags) => {
    // 변경 버튼 눌렀을때 나오는 함수
    if (selectedHashtags.length === 0) {
      showToast("수정할 해시태그를 선택해주세요.");
      return;
    }
    setUpdateModalOpen(true);
  };

  const getSelectedHashtagData = () => {
    if (selectedHashtags.length === 0) {
      return null;
    }
    return hashtags.find((tag) => tag.tagNo === selectedHashtags[0]);
  };

  const handleHashtagSubmit = (hashtag) => {
    // 추가 버튼
    authInstance
      .post(`/api/admin/tags`, {
        tagTitle: hashtag.name,
        tagContent: hashtag.content,
      })
      .then((res) => {
        const message = res.data.message;

        if (res.status === 201) {
          showToast(message, "success");
          hashList(currentPage);
          setModalOpen(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleHashtagUpdate = (hashtag) => {
    if (selectedHashtags.length === 0) {
      showToast("수정할 해시태그를 선택해주세요.", "error");
      return;
    }

    const tagNo = selectedHashtags[0];

    authInstance
      .put(`/api/admin/tags/${tagNo}`, {
        tagTitle: hashtag.name,
        tagContent: hashtag.content,
      })
      .then((res) => {
        if (res.status === 200) {
          showToast(res.data.message, "success");
        }
        hashList(currentPage);
        setSelectedHashtags([]);
      });
  };

  const handleDelete = (selectedHashtags) => {
    // 삭제 버튼
    if (selectedHashtags.length === 0) {
      showToast("삭제할 해시태그를 선택해주세요.", "error");
      return;
    }

    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }

    const tagNo = selectedHashtags[0];
    authInstance
      .delete(`/api/admin/tags/${tagNo}`)
      .then((res) => {
        if (res.status === 204) {
          showToast("삭제에 성공하셨습니다!", "success");
          hashList(currentPage);
          setSelectedHashtags([]);
        }
      })
      .catch((err) => {
        if (err.status === 400) {
          showToast("삭제할 요청이 없거나 오류가 발생하였습니다.", "error");
        }
      });
  };

  // 해시 리스트를 보여주는 함수
  const hashList = async (page) => {
    await authInstance.get(`/api/admin/tags?page=${page}`).then((res) => {
      const total = res.data.data.pageInfo;
      const hash = res.data.data.adminTag;
      setPageInfo(total);
      setHashtags([...hash]);
    });
  };

  const handlePageChange = (page) => {
    setSearchParams({ page });
  };

  useEffect(() => {
    hashList(currentPage);
  }, [currentPage]);

  return (
    <Container>
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          duration={2000}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
      {/* 헤더 영역*/}
      <HeaderSection>
        <Breadcrumb>
          <Hash size={20} />
          <span>해시태그 관리</span>
        </Breadcrumb>
        <WelcomeMessage>해시태그 관리</WelcomeMessage>
      </HeaderSection>
      {/* 검색 및 액션 영역 */}
      <SearchActionSection>
        <SearchWrapper></SearchWrapper>
        <ActionButtons>
          <AddButton onClick={() => setModalOpen(true)}>추가</AddButton>
          <UpdateButton onClick={() => handleUpdateClick(selectedHashtags)}>
            변경
          </UpdateButton>
          <DeleteButton onClick={() => handleDelete(selectedHashtags)}>
            삭제
          </DeleteButton>
        </ActionButtons>
      </SearchActionSection>
      {/* 메인 콘텐트 영역 */}
      <MainContentArea>
        <HashtagList>
          {hashtags.length > 0 ? (
            hashtags.map((hashtag) => (
              <TagWrapper key={hashtag.tagNo}>
                <HashtagTag
                  $isSelected={selectedHashtags.includes(hashtag.tagNo)}
                  $status={hashtag.status}
                  onClick={() => handleTagClick(hashtag.tagNo)}
                >
                  #{hashtag.tagTitle}
                </HashtagTag>

                {/* activeTagNo와 현재 태그 번호가 일치할 때만 노출 */}
                {activeTagNo === hashtag.tagNo && (
                  <HashtagContent>
                    <ContentText>
                      {hashtag.tagContent || "등록된 상세 내용이 없습니다."}
                    </ContentText>
                  </HashtagContent>
                )}
              </TagWrapper>
            ))
          ) : (
            <EmptyStateMessage>게시물이 존재하지 않습니다</EmptyStateMessage>
          )}
        </HashtagList>
      </MainContentArea>

      {/* 페이징 처리하는 영역 */}
      <PageWrapper>
        <span>
          페이지 {pageInfo.boardLimit}개 중 총 {pageInfo.listCount}개
        </span>
        <Pagination pageInfo={pageInfo} onPageChange={handlePageChange} />
      </PageWrapper>

      {/* 해시 태그 추가 모달 */}
      <HashtagModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleHashtagSubmit}
      />

      {/* 해시태그 수정 모달 */}
      <HashtagModal
        isOpen={updateModalOpen}
        onClose={() => setUpdateModalOpen(false)}
        onSubmit={handleHashtagUpdate}
        initialData={getSelectedHashtagData()}
        isEditMode={true}
      />
    </Container>
  );
};

export default AdminHashtag;
