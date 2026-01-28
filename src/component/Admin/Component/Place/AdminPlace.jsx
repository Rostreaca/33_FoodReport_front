import { useEffect, useState } from "react";
import { Store } from "lucide-react";
import {
  HeaderSection,
  Breadcrumb,
  WelcomeMessage,
  Container,
  MainContentArea,
  TableHeader,
  TableHeaderCell,
  PlaceList,
  EmptyStateMessage,
  PageWrapper,
} from "./AdminPlace.style";
import SearchBar from "../Common/SearchBar/SearchBar";
import PlaceRow from "./PlaceRow";
import Pagination from "../../../common/Paging/Pagination";
import { authInstance } from "../../../api/reqService";
import { useSearchParams } from "react-router-dom";

const AdminPlace = () => {
  const [places, setPlaces] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const [searchText, setSearchText] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const placeFindAll = (page) => {
    authInstance.get(`/api/admin/places?page=${page}`).then((res) => {
      const place = res.data.data.adminPlace;

      setPageInfo(res.data.data.pageInfo);
      setPlaces([...place]);
    });
  };

  const placeFindByKeyword = (page, placeTitle) => {
    authInstance
      .get(`/api/admin/places/keyword?page=${page}&placeTitle=${placeTitle}`)
      .then((res) => {
        const places = res.data.data.adminPlace;
        setPlaces([...places]);
        setPageInfo(res.data.data.pageInfo);
      });
  };
  const handlePageChange = (page) => {
    setSearchParams({ page, placeTitle: searchText });
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
      placeFindByKeyword(currentPage, searchText);
    } else {
      placeFindAll(currentPage);
    }
  }, [currentPage, searchText]);

const refreshPlaces = () => {
    if(searchText.trim()) {
        placeFindByKeyword(currentPage, searchText);
    } else {
        placeFindAll(currentPage);
    }
};

  return (
    <Container>
      {/* 헤더 영역*/}
      <HeaderSection>
        <Breadcrumb>
          <Store size={20} />
          <span>맛집(단장) 관리</span>
        </Breadcrumb>
        <WelcomeMessage>맛집 관리</WelcomeMessage>
      </HeaderSection>
      {/* 검색 영역 */}
      <SearchBar
        placeholder="맛집명을 검색하세요."
        value={searchInput}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      {/* 메인 콘텐트 영역 */}
      <MainContentArea>
        <TableHeader>
          <TableHeaderCell>프로필</TableHeaderCell>
          <TableHeaderCell>단장</TableHeaderCell>
          <TableHeaderCell>제목</TableHeaderCell>
          <TableHeaderCell>내용</TableHeaderCell>
          <TableHeaderCell>조회 수</TableHeaderCell>
          <TableHeaderCell>등록일</TableHeaderCell>
          <TableHeaderCell>상태</TableHeaderCell>
          <TableHeaderCell>옵션</TableHeaderCell>
        </TableHeader>
        <PlaceList>
          {places.length > 0 ? (
            places.map((place, index) => <PlaceRow key={index} place={place} onStatusChange={refreshPlaces}/>)
          ) : (
            <EmptyStateMessage>게시물이 존재하지 않습니다</EmptyStateMessage>
          )}
        </PlaceList>
      </MainContentArea>
      {/* 페이징 처리하는 영역 */}
      <PageWrapper>
        <span>
          맛집 {pageInfo.boardLimit}개 중 총 {pageInfo.listCount}개
        </span>
        <Pagination pageInfo={pageInfo} onPageChange={handlePageChange} />
      </PageWrapper>
    </Container>
  );
};

export default AdminPlace;
