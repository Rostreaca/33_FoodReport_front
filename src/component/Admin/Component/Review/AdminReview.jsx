import { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import {
  HeaderSection,
  Breadcrumb,
  WelcomeMessage,
  Container,
  MainContentArea,
  TableHeader,
  TableHeaderCell,
  ReviewList,
  EmptyStateMessage,
  PageWrapper,
} from "./AdminReview.style";
import SearchBar from "../Common/SearchBar/SearchBar";
import ReviewRow from "./ReviewRow";
import Pagination from "../../../common/Paging/Pagination";
import { useSearchParams } from "react-router-dom";
import { authInstance } from "../../../api/reqService";

const AdminReview = () => {
  const [reviews, setReviews] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const [searchText, setSearchText] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const reviewFindAll = async (page) => {
    // 전체 조회
    authInstance.get(`/api/admin/reviews?page=${page}`).then((res) => {
      const reviews = res.data.data.adminReviews;
      setReviews([...reviews]);
      setPageInfo(res.data.data.pages);
    });
  };

  const reviewFindByKeyword = async (page, reviewTitle) => {
    // 부분(키워드) 조회
    authInstance
      .get(`/api/admin/reviews/keyword?page=${page}&reviewTitle=${reviewTitle}`)
      .then((res) => {
        const reviews = res.data.data.adminReviews;
        setReviews([...reviews]);
        setPageInfo(res.data.data.pages);
      });
  };

  const handlePageChange = (page) => {
    setSearchParams({ page, reviewTitle: searchText });
  };

  const handleInputChange = (value) => {
    setSearchInput(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchText(searchInput);
      setSearchParams({ page: 1 });
    }
  };

  useEffect(() => {
    if (searchText.trim()) {
      // 공백을 제거하고 검색어가 있으면 부분조회
      reviewFindByKeyword(currentPage, searchText);
    } else {
      // 전체 조회 useEffect
      reviewFindAll(currentPage);
    }
  }, [currentPage, searchText]);

  const refreshReviews = () => { // 자식 콜백함수 새로고침용
    if (searchText.trim()) {
      // 공백을 제거하고 검색어가 있으면 부분조회
      reviewFindByKeyword(currentPage, searchText);
    } else {
      // 전체 조회 useEffect
      reviewFindAll(currentPage);
    }
  };

  return (
    <Container>
      {/* 헤더 영역*/}
      <HeaderSection>
        <Breadcrumb>
          <MessageSquare size={20} />
          <span>리뷰 관리</span>
        </Breadcrumb>
        <WelcomeMessage>리뷰 관리</WelcomeMessage>
      </HeaderSection>
      {/* 검색 영역 */}
      <SearchBar
        placeholder="리뷰 내용을 검색하세요."
        value={searchInput}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      {/* 메인 콘텐트 영역 */}
      <MainContentArea>
        <TableHeader>
          <TableHeaderCell>프로필</TableHeaderCell>
          <TableHeaderCell $align="flex-start">작성자</TableHeaderCell>
          <TableHeaderCell $align="flex-start">리뷰 제목</TableHeaderCell>
          <TableHeaderCell $align="flex-start">리뷰 내용</TableHeaderCell>
          <TableHeaderCell>좋아요</TableHeaderCell>
          <TableHeaderCell>날짜</TableHeaderCell>
          <TableHeaderCell>상태</TableHeaderCell>
          <TableHeaderCell>옵션</TableHeaderCell>
        </TableHeader>
        <ReviewList>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <ReviewRow
                key={index}
                review={review}
                onStatusChange={refreshReviews}
              />
            ))
          ) : (
            <EmptyStateMessage>게시물이 존재하지 않습니다</EmptyStateMessage>
          )}
        </ReviewList>
      </MainContentArea>
      {/* 페이징 처리하는 영역 */}
      <PageWrapper>
        <span>
          페이지 {pageInfo.listCount}개 중 총 {pageInfo.boardLimit}개
        </span>
        <Pagination pageInfo={pageInfo} onPageChange={handlePageChange} />
      </PageWrapper>
    </Container>
  );
};

export default AdminReview;
