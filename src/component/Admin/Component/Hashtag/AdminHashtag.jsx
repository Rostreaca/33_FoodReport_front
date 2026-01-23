import { useState } from "react";
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
} from "./AdminHashtag.style";
import SearchBar from "../Common/SearchBar/SearchBar";
import HashtagModal from "./HashtagModal";

const AdminHashtag = () => {
  const [hashtags] = useState([
    // 임시 데이터 - 나중에 API에서 가져올 예정
    //{ id: 1, name: "염도_최적화", isSelected: true },
    //{ id: 2, name: "자극치_풀로드", isSelected: false },
    //{ id: 3, name: "제로_스트레스", isSelected: false },
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  const [selectedHashtags, setSelectedHashtags] = useState([]);

  const handleTagClick = (hashtagId) => {
    setSelectedHashtags((prev) => {
      if (prev.includes(hashtagId)) {
        return prev.filter((id) => id !== hashtagId);
      } else {
        return [...prev, hashtagId];
      }
    });
  };

  const handleHashtagSubmit = (hashtag) => {
    console.log("추가 버튼 클릭");
  };

  const handleDelete = () => {
    // 삭제 로직
    console.log("삭제 버튼 클릭", selectedHashtags);
  };

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
          <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
        </ActionButtons>
      </SearchActionSection>
      {/* 메인 콘텐트 영역 */}
      <MainContentArea>
        <HashtagList>
          {hashtags.length > 0 ? (
            hashtags.map((hashtag) => (
              <HashtagTag
                key={hashtag.id}
                $isSelected={
                  selectedHashtags.includes(hashtag.id) || hashtag.isSelected
                }
                onClick={() => handleTagClick(hashtag.id)}
              >
                #{hashtag.name}
              </HashtagTag>
            ))
          ) : (
            <EmptyStateMessage>게시물이 존재하지 않습니다</EmptyStateMessage>
          )}
        </HashtagList>
      </MainContentArea>

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
