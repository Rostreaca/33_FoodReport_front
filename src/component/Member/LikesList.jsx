import { useState } from 'react';
import Pagination from '../common/Paging/Pagination';
import UserAvatar from '../common/Card/UserAvatar';
import * as S from './LikesList.style';

const LikesList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    // 임시 데이터
    const likesData = [
        {
            id: 1,
            restaurantName: '무쇠옥 종각본점',
            category: '한국식 BBQ',
            author: 'hongu90',
            timeAgo: '11일 전',
            likes: 9,
            comments: 0,
            authorImage: '/user.png'
        },
        {
            id: 2,
            restaurantName: 'BROS 종로관철점',
            category: '이탈리아 요리',
            author: 'foodie123',
            timeAgo: '5일 전',
            likes: 15,
            comments: 3,
            authorImage: '/user.png',
            verified: true
        },
        {
            id: 3,
            restaurantName: '탐라담 종각점',
            category: '고기',
            author: 'meatlover',
            timeAgo: '3일 전',
            likes: 22,
            comments: 5,
            authorImage: '/user.png',
            verified: true
        },
        {
            id: 4,
            restaurantName: '신라인도레스토랑',
            category: '인도 요리',
            author: 'spicefan',
            timeAgo: '1일 전',
            likes: 8,
            comments: 2,
            authorImage: '/user.png',
            verified: true
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
        <S.LikesListContainer>
            <S.Breadcrumb>
                홈 & 마이페이지 & 리뷰 관리
            </S.Breadcrumb>

            <S.Title>좋아요 목록</S.Title>

            <S.SearchBar>
                <S.SearchIcon>🔍</S.SearchIcon>
                <S.SearchInput
                    type="text"
                    placeholder="검색어를 입력해주세요"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </S.SearchBar>

            <S.LikesList>
                {likesData.map((item) => (
                    <S.LikeItem key={item.id}>
                        <S.ItemLeft>
                            <S.AvatarWrapper>
                                <UserAvatar src={item.authorImage} />
                            </S.AvatarWrapper>
                            <S.ItemInfo>
                                <S.RestaurantName>
                                    {item.restaurantName}
                                    {item.verified && <S.VerifiedBadge>●</S.VerifiedBadge>}
                                    <S.Category> - {item.category}</S.Category>
                                </S.RestaurantName>
                                <S.MetaInfo>
                                    {item.author} {item.timeAgo}
                                </S.MetaInfo>
                            </S.ItemInfo>
                        </S.ItemLeft>
                        <S.ItemRight>
                            <S.InteractionCount>
                                <S.HeartIcon>♡</S.HeartIcon>
                                {item.likes}
                            </S.InteractionCount>
                            <S.InteractionCount>
                                <S.CommentIcon>💬</S.CommentIcon>
                                {item.comments}
                            </S.InteractionCount>
                        </S.ItemRight>
                    </S.LikeItem>
                ))}
            </S.LikesList>

            <Pagination pageInfo={pageInfo} onPageChange={handlePageChange} />
        </S.LikesListContainer>
    );
};

export default LikesList;
