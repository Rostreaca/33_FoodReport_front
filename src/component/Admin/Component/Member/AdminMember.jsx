import { useState } from "react";
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
    EmptyStateMessage
} from "./AdminMember.style";
import SearchBar from "../Common/SearchBar/SearchBar";
import MemberRow from "./MemberRow";

const AdminMember = () => {
    // 임시 데이터 - 나중에 API에서 가져올 예정
    const [members] = useState([
        // 예시 데이터가 있으면 여기에 추가
    ]);

    return (
        <Container>
            {/* 헤더 영역*/ }
            <HeaderSection>
                <Breadcrumb>
                    <Users size={20} />
                    <span>회원 관리</span>
                </Breadcrumb>
                <WelcomeMessage>회원 관리</WelcomeMessage>
            </HeaderSection>
            { /* 검색 영역 */}
            <SearchBar placeholder="회원 이름을 검색하세요."/>
            { /* 메인 콘텐트 영역 */}
            <MainContentArea>
                <TableHeader>
                    <TableHeaderCell style={{ width: '50px' }}>
                        <input type="checkbox" />
                    </TableHeaderCell>
                    <TableHeaderCell>회원 이름</TableHeaderCell>
                    <TableHeaderCell>회원정보</TableHeaderCell>
                    <TableHeaderCell>리뷰 작성 수</TableHeaderCell>
                    <TableHeaderCell>날짜</TableHeaderCell>
                    <TableHeaderCell>상태</TableHeaderCell>
                    <TableHeaderCell>옵션</TableHeaderCell>
                </TableHeader>
                <MemberList>
                    {members.length > 0 ? (
                        members.map((member, index) => (
                            <MemberRow key={index} member={member} />
                        ))
                    ) : (
                        <EmptyStateMessage>
                            게시물이 존재하지 않습니다
                        </EmptyStateMessage>
                    )}
                </MemberList>
            </MainContentArea>
            { /* 페이징 처리하는 영역 */}
        </Container>
    )
}

export default AdminMember;