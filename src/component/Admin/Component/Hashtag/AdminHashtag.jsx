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
  ContentText
} from "./AdminHashtag.style";
import SearchBar from "../Common/SearchBar/SearchBar";
import HashtagModal from "./HashtagModal";
import { authInstance } from "../../../api/reqService";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../../common/Paging/Pagination";

const AdminHashtag = () => {
  const [hashtags, setHashtags] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedHashtags, setSelectedHashtags] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageInfo, setPageInfo] = useState({});
  const [activeTagNo, setActiveTagNo] = useState(null);

  const currentPage = parseInt(searchParams.get("page")) || 1;

  const handleTagClick = (tagNo) => {
    console.log(tagNo);
    setActiveTagNo((prev) => (prev === tagNo ? null : tagNo));
    setSelectedHashtags((prev) => (prev.includes(tagNo) ? [] : [tagNo]));
  };

  const handleHashtagSubmit = (hashtag) => {
    console.log("추가 버튼 클릭");
    console.log(hashtag);

    authInstance.post(`/api/admin/tags` , {
      "tagTitle" : hashtag.name,
      "tagContent" : hashtag.content
    }).then((res) => {
      console.log(res);
      const message = res.data.message;

      if(res.status === 201) {
        alert(message);
      }
    }).catch((err) => {
      console.log(err);
    })

  };

  const handleDelete = (selectedHashtags) => {
    // 삭제 로직
if (selectedHashtags.length === 0) return;

  if (!window.confirm("정말 삭제하시겠습니까?")) {
    return;
  }

    const tagNo = selectedHashtags[0];
    authInstance.delete(`/api/admin/tags/${tagNo}`)
    .then((res) => {
      console.log(res);
      if(res.status === 204) {
        alert("삭제에 성공하셨습니다!");
        hashList(currentPage); 
        setSelectedHashtags([]);
      }
    })
    .catch((err) => {
      console.log(err);
      if(err.status === 400) {
        alert("삭제할 요청이 없거나 오류가 발생하였습니다.");
      }
    })
  };

  // 해시 리스트를 보여주는 함수
  const hashList = async (page) => {
    await authInstance.get(`/api/admin/tags?page=${page}`).then((res) => {
      const total = res.data.data.pageInfo;
      const hash = res.data.data.adminTag;
      console.log(hash);
      console.log(total);
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
        <SearchWrapper>
          <SearchBar placeholder="검색어를 입력해주세요." />
        </SearchWrapper>
        <ActionButtons>
          <AddButton onClick={() => setModalOpen(true)}>추가</AddButton>
          <DeleteButton onClick={() => handleDelete(selectedHashtags)}>삭제</DeleteButton>
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
          페이지 {pageInfo.listCount}개 중 총 {pageInfo.boardLimit}개
        </span>
        <Pagination pageInfo={pageInfo} onPageChange={handlePageChange} />
      </PageWrapper>

      {/* 해시 태그 추가 모달 */}
      <HashtagModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleHashtagSubmit}
      />
    </Container>
  );
};

export default AdminHashtag;
