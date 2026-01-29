import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import {
  HeaderSection,
  Breadcrumb,
  WelcomeMessage,
  Container,
  MainContentArea,
  TableHeader,
  TableHeaderCell,
  MemberList,
  EmptyStateMessage,
  PageWrapper,
} from "./AdminMember.style";
import SearchBar from "../Common/SearchBar/SearchBar";
import MemberRow from "./MemberRow";
import Pagination from "../../../common/Paging/Pagination";
import { authInstance } from "../../../api/reqService";
import { useSearchParams, useNavigate } from "react-router-dom";

const AdminMember = () => {
  const [members, setMembers] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const [searchText, setSearchText] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const navi = useNavigate();

  const memberList = (page = 1) => {
    // 전체 멤버 조회
    authInstance
      .get(`/api/admin/members?page=${page}`)
      .then((res) => {
        const members = res.data.data.member;
        setMembers([...members]);
        setPageInfo(res.data.data.pageInfo);
      })
      .catch((err) => {
        navi("/errorPage", {
          state: {
            code: err.status,
            message: err.response.data.message,
          },
        });
      });
  };

  const memberBindByKeyword = (page, nickname) => {
    // 부분 멤버 조회
    authInstance
      .get(`/api/admin/members/keyword?page=${page}&nickname=${nickname}`)
      .then((res) => {
        const members = res.data.data.member;
        setMembers([...members]);
        setPageInfo(res.data.data.pageInfo);
      })
      .catch((err) => {
        navi("/errorPage", {
          state: {
            code: err.status,
            message: err.response.data.message,
          },
        });
      });
  };

  const handlePageChange = (page) => {
    setSearchParams({ page, nickname: searchText });
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
      memberBindByKeyword(currentPage, searchText);
    } else {
      // 전체 조회
      memberList(currentPage);
    }
  }, [currentPage, searchText]);

  const refreshMember = () => {
    if(searchText.trim()) {
        memberBindByKeyword(currentPage, searchText);
    } else {
        memberList(currentPage);
    }
  };
  
  return (
    <Container>
      {/* 헤더 영역 */}
      <HeaderSection>
        <Breadcrumb>
          <Users size={20} />
          <span>회원 관리</span>
        </Breadcrumb>
        <WelcomeMessage>회원 관리</WelcomeMessage>
      </HeaderSection>

      {/* 검색 영역 */}
      <SearchBar
        placeholder="회원 이름을 검색하세요."
        value={searchInput}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />

      {/* 메인 콘텐트 영역 */}
      <MainContentArea>
        <TableHeader>
          <TableHeaderCell></TableHeaderCell>
          <TableHeaderCell>회원 정보</TableHeaderCell>
          <TableHeaderCell>회원정보</TableHeaderCell>
          <TableHeaderCell>리뷰 수</TableHeaderCell>
          <TableHeaderCell>가입일</TableHeaderCell>
          <TableHeaderCell>상태</TableHeaderCell>
          <TableHeaderCell>역할</TableHeaderCell>
          <TableHeaderCell>옵션</TableHeaderCell>
        </TableHeader>
        <MemberList>
          {members.length > 0 ? (
            members.map((member) => (
              <MemberRow key={member.memberNo} member={member} onStatusChange={refreshMember}/>
            ))
          ) : (
            <EmptyStateMessage>회원이 존재하지 않습니다</EmptyStateMessage>
          )}
        </MemberList>
      </MainContentArea>

      {/* 페이징 처리하는 영역 */}
      {members.length === 0 ? (
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

export default AdminMember;
