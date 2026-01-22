import { useState } from "react";
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
    EmptyStateMessage
} from "./AdminPlace.style";
import SearchBar from "../Common/SearchBar/SearchBar";
import PlaceRow from "./PlaceRow";

const AdminPlace = () => {
    // 임시 데이터 - 나중에 API에서 가져올 예정
    const [places] = useState([
        // 예시 데이터가 있으면 여기에 추가
    ]);

    return (
        <Container>
            {/* 헤더 영역*/ }
            <HeaderSection>
                <Breadcrumb>
                    <Store size={20} />
                    <span>맛집(단장) 관리</span>
                </Breadcrumb>
                <WelcomeMessage>맛집 관리</WelcomeMessage>
            </HeaderSection>
            { /* 검색 영역 */}
            <SearchBar placeholder="맛집명을 검색하세요."/>
            { /* 메인 콘텐트 영역 */}
            <MainContentArea>
                <TableHeader>
                    <TableHeaderCell style={{ width: '50px' }}>
                        <input type="checkbox" />
                    </TableHeaderCell>
                    <TableHeaderCell>맛집명</TableHeaderCell>
                    <TableHeaderCell>단장</TableHeaderCell>
                    <TableHeaderCell>주소</TableHeaderCell>
                    <TableHeaderCell>조회 수</TableHeaderCell>
                    <TableHeaderCell>등록일</TableHeaderCell>
                    <TableHeaderCell>상태</TableHeaderCell>
                    <TableHeaderCell>옵션</TableHeaderCell>
                </TableHeader>
                <PlaceList>
                    {places.length > 0 ? (
                        places.map((place, index) => (
                            <PlaceRow key={index} place={place} />
                        ))
                    ) : (
                        <EmptyStateMessage>
                            게시물이 존재하지 않습니다
                        </EmptyStateMessage>
                    )}
                </PlaceList>
            </MainContentArea>
            { /* 페이징 처리하는 영역 */}
        </Container>
    )
}

export default AdminPlace;
