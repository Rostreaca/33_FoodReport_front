import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import {
  HeaderSection,
  Breadcrumb,
  WelcomeMessage,
  Container,
  MainContentArea,
  TableHeader,
  TableHeaderCell,
  NoticeList,
  EmptyStateMessage,
  PageWrapper,
  SearchActionSection,
  AddButton,
} from "./AdminNotice.style";
import SearchBar from "../Common/SearchBar/SearchBar";
import NoticeRow from "./NoticeRow";
import Pagination from "../../../common/Paging/Pagination";
import { useNavigate, useSearchParams } from "react-router-dom";
import { authInstance } from "../../../api/reqService";

const AdminNotice = () => {
  const [pageInfo, setPageInfo] = useState({});
  const [notices, setNotices] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page") || "1";
  const [searchInput, setSearchInput] = useState("");
  const [searchText, setSearchText] = useState("");
  const navi = useNavigate();

  const noticeFindAll = (page) => {
    authInstance
      .get(`/api/admin/notices?page=${page}`)
      .then((res) => {
        console.log(res);
        setPageInfo(res.data.data.pageInfo);
        setNotices(res.data.data.adminNotice);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const noticeFindByKeyword = (page, noticeTitle) => {
    authInstance
    .get(`/api/admin/notices/keyword?page=${page}&noticeTitle=${noticeTitle}`)
    .then((res) => {
        setPageInfo(res.data.data.pageInfo);
        setNotices(res.data.data.adminNotice);
    })
    .catch((err) => {
        console.log(err);
    })
  }

  const handleNoticeForm = () => {
    navi("/admin/notices/form");
  }

  const handleInputChange = (e) => {
    setSearchInput(e);
  };

  const handlePageChange = (page) => {
    setSearchParams({ page, noticeTitle: searchText });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchText(searchInput);
      setSearchParams({ page: 1 });
    }
  };

  useEffect(() => {
    if(searchText.trim()) {
        noticeFindByKeyword(currentPage, searchText);
    } else {
        noticeFindAll(currentPage);
    }
  }, [currentPage, searchText]);

  const refreshNotice = () => {
    if(searchText.trim()) {
      noticeFindByKeyword(currentPage, searchText);
    } else {
      noticeFindAll(currentPage);
    }
  };

  return (
    <Container>
      {/* 헤더 영역 */}
      <HeaderSection>
        <Breadcrumb>
          <Bell size={20} />
          <span>공지 사항 관리</span>
        </Breadcrumb>
        <WelcomeMessage>공지 사항 관리</WelcomeMessage>
      </HeaderSection>

      {/* 검색 영역 */}
      <SearchActionSection>
        <SearchBar
          placeholder="공지 사항 제목을 검색하세요."
          value={searchInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <AddButton onClick={handleNoticeForm}>등록</AddButton>
      </SearchActionSection>

      {/* 메인 콘텐트 영역 */}
      <MainContentArea>
        <TableHeader>
          <TableHeaderCell>제목</TableHeaderCell>
          <TableHeaderCell>작성자</TableHeaderCell>
          <TableHeaderCell>작성일</TableHeaderCell>
          <TableHeaderCell>상태</TableHeaderCell>
          <TableHeaderCell>옵션</TableHeaderCell>
        </TableHeader>
        <NoticeList>
          {notices.length > 0 ? (
            notices.map((notice, index) => (
              <NoticeRow key={index} notice={notice} onStatusChange={refreshNotice}/>
            ))
          ) : (
            <EmptyStateMessage>게시물이 존재하지 않습니다</EmptyStateMessage>
          )}
        </NoticeList>
      </MainContentArea>

      {/* 페이징 처리하는 영역 */}
      {notices.length === 0 ? (
        <PageWrapper></PageWrapper>
      ) : (
        <PageWrapper>
          <span>
            페이지 총 {pageInfo.boardLimit}개 중 {pageInfo.listCount}개
          </span>
          <Pagination pageInfo={pageInfo} onPageChange={handlePageChange} />
        </PageWrapper>
      )}
    </Container>
  );
};

export default AdminNotice;
