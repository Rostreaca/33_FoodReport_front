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
        {
            "memberNo": 11,
            "email": "us****@kh.com",
            "nickname": "유저08",
            "phone": "010-****-9999",
            "introduce": null,
            "createDate": "2026-01-27T03:06:51.000+00:00",
            "updateDate": null,
            "deleteDate": null,
            "status": "Y",
            "role": "ROLE_USER",
            "reviewCount": 0
        }
    ]);

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
            <SearchBar placeholder="회원 이름을 검색하세요." />
            
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
                            <MemberRow key={member.memberNo} member={member} />
                        ))
                    ) : (
                        <EmptyStateMessage>
                            회원이 존재하지 않습니다
                        </EmptyStateMessage>
                    )}
                </MemberList>
            </MainContentArea>
            
            {/* 페이징 처리하는 영역 */}
        </Container>
    );
};

export default AdminMember;