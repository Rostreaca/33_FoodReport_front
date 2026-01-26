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
    PageWrapper
} from "./AdminNotice.style";
import SearchBar from "../Common/SearchBar/SearchBar";
import NoticeRow from "./NoticeRow";
import Pagination from "../../../common/Paging/Pagination";
import { useSearchParams } from "react-router-dom";


const AdminNotice = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [pageInfo, setPageInfo] = useState({});
    const [notices, setNotices] = useState([]);

    const Notices = async (page) => {
       
        setPageInfo(res.data.data.pages);
        setNotices(res.data.data.adminReviews);
    };

    useEffect(() => {
        const page = searchParams.get('page') || '1';
        Notices(page);
    }, [searchParams]);

    const handlePageChange = (page) => {
        setSearchParams({ page });
    }
    
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
            <SearchBar placeholder="공지 사항 제목을 검색하세요."/>

            {/* 메인 콘텐트 영역 */}
            <MainContentArea>
                <TableHeader>
                    <TableHeaderCell>제목</TableHeaderCell>
                    <TableHeaderCell>작성자</TableHeaderCell>
                    <TableHeaderCell>작성일</TableHeaderCell>
                    <TableHeaderCell>조회수</TableHeaderCell>
                    <TableHeaderCell>상태</TableHeaderCell>
                    <TableHeaderCell>옵션</TableHeaderCell>
                </TableHeader>
                <NoticeList>
                    {notices.length > 0 ? (
                        notices.map((notice, index) => (
                            <NoticeRow key={index} notice={notice} />
                        ))
                    ) : (
                        <EmptyStateMessage>
                            게시물이 존재하지 않습니다
                        </EmptyStateMessage>
                    )}
                </NoticeList>
            </MainContentArea>

            {/* 페이징 처리하는 영역 */}
            <PageWrapper>
                <span>페이지 {pageInfo.listCount}개 중 총 {pageInfo.boardLimit}개</span>
            <Pagination
                pageInfo={pageInfo}
                onPageChange={handlePageChange}
            />
                </PageWrapper>
        </Container>
    )
}

export default AdminNotice;