import { useState } from "react";
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
    EmptyStateMessage
} from "./AdminReview.style";
import SearchBar from "../Common/SearchBar/SearchBar";
import ReviewRow from "./ReviewRow";

const AdminReview = () => {
    // 임시 데이터 - 나중에 API에서 가져올 예정
    const [reviews] = useState([
        // 예시 데이터가 있으면 여기에 추가
    ]);

    return (
        <Container>
            {/* 헤더 영역*/ }
            <HeaderSection>
                <Breadcrumb>
                    <MessageSquare size={20} />
                    <span>리뷰 관리</span>
                </Breadcrumb>
                <WelcomeMessage>리뷰 관리</WelcomeMessage>
            </HeaderSection>
            { /* 검색 영역 */}
            <SearchBar placeholder="리뷰 내용을 검색하세요."/>
            { /* 메인 콘텐트 영역 */}
            <MainContentArea>
                <TableHeader>
                    <TableHeaderCell style={{ width: '50px' }}>
                        <input type="checkbox" />
                    </TableHeaderCell>
                    <TableHeaderCell>리뷰 정보</TableHeaderCell>
                    <TableHeaderCell>작성자</TableHeaderCell>
                    <TableHeaderCell>리뷰</TableHeaderCell>
                    <TableHeaderCell>좋아요 수</TableHeaderCell>
                    <TableHeaderCell>날짜</TableHeaderCell>
                    <TableHeaderCell>상태</TableHeaderCell>
                    <TableHeaderCell>옵션</TableHeaderCell>
                </TableHeader>
                <ReviewList>
                    {reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <ReviewRow key={index} review={review} />
                        ))
                    ) : (
                        <EmptyStateMessage>
                            게시물이 존재하지 않습니다
                        </EmptyStateMessage>
                    )}
                </ReviewList>
            </MainContentArea>
            { /* 페이징 처리하는 영역 */}
        </Container>
    )
}

export default AdminReview;
