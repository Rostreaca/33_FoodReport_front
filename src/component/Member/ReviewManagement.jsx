import { useState } from 'react';
import Pagination from '../common/Paging/Pagination';
import * as S from './ReviewManagement.style';

const ReviewManagement = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    // 임시 데이터
    const reviewsData = [
        {
            id: 1,
            image: '/main.jpg',
            title: '회사 근처 만두집...',
            likes: 100,
            views: 153
        },
        {
            id: 2,
            image: '/main.jpg',
            title: '가성비 좋은 삼겹살 추천!',
            likes: 99,
            views: 200
        },
        {
            id: 3,
            image: '/main.jpg',
            title: '이 곳은 김치찌개의 정석',
            likes: 89,
            views: 133
        },
        {
            id: 4,
            image: '/main.jpg',
            title: '입에서 살살 녹는 돈카츠',
            likes: 71,
            views: 129
        }
    ];

    const pageInfo = {
        currentPage: currentPage,
        startPage: 1,
        endPage: 3,
        maxPage: 7
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // TODO: API 호출
    };

    return (
        <S.ReviewManagementContainer>
            <S.Breadcrumb>
                홈 & 마이페이지 & 리뷰 관리
            </S.Breadcrumb>

            <S.Title>리뷰 관리</S.Title>

            <S.SearchBar>
                <S.SearchIcon>Q</S.SearchIcon>
                <S.SearchInput
                    type="text"
                    placeholder="검색어를 입력해주세요"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </S.SearchBar>

            <S.ReviewGrid>
                {reviewsData.map((review) => (
                    <S.ReviewCard key={review.id}>
                        <S.ReviewImage src={review.image} alt={review.title} />
                        <S.ReviewContent>
                            <S.ReviewTitle>{review.title}</S.ReviewTitle>
                            <S.ReviewStats>
                                <S.StatItem>
                                    <S.HeartIcon>❤️</S.HeartIcon>
                                    {review.likes}
                                </S.StatItem>
                                <S.StatItem>
                                    <S.ViewIcon>👁️</S.ViewIcon>
                                    {review.views}
                                </S.StatItem>
                            </S.ReviewStats>
                        </S.ReviewContent>
                    </S.ReviewCard>
                ))}
            </S.ReviewGrid>

            <Pagination pageInfo={pageInfo} onPageChange={handlePageChange} />
        </S.ReviewManagementContainer>
    );
};

export default ReviewManagement;
