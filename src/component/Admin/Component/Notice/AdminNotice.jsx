import { useState } from "react";
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
    EmptyStateMessage
} from "./AdminNotice.style";
import SearchBar from "../Common/SearchBar/SearchBar";
import NoticeRow from "./NoticeRow";

const AdminNotice = () => {
    // 임시 데이터 - 나중에 API에서 가져올 예정
    const [notices] = useState([
        // 예시 데이터가 있으면 여기에 추가
    ]);

    return (
        <Container>
            {/* 헤더 영역*/ }
            <HeaderSection>
                <Breadcrumb>
                    <Bell size={20} />
                    <span>공지 사항 관리</span>
                </Breadcrumb>
                <WelcomeMessage>공지 사항 관리</WelcomeMessage>
            </HeaderSection>
            { /* 검색 영역 */}
            <SearchBar placeholder="공지 사항 제목을 검색하세요."/>
            { /* 메인 콘텐트 영역 */}
            <MainContentArea>
                <TableHeader>
                    <TableHeaderCell style={{ width: '50px' }}>
                        <input type="checkbox" />
                    </TableHeaderCell>
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
            { /* 페이징 처리하는 영역 */}
        </Container>
    )
}

export default AdminNotice;
