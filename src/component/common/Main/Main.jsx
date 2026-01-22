import * as S from "./Main.style.js";
import RestaurantCard from "../Card/RestaurantCard.jsx";

const MainPage = () => {
    const recentRestaurants = [
        {
            id: 1,
            name: '홍천막국수',
            category: '막국수 • 춘천시 남이섬로',
            author: '스파르타',
            image: null // assets에서 import한 이미지 변수를 넣으세요
        },
        {
            id: 2,
            name: '백두부',
            category: '두부요리 • 북악동로',
            author: '비타 관리자 계정',
            image: null
        },
        {
            id: 3,
            name: '일식대왕',
            category: '일식 • 용인시 처인구 포곡읍',
            author: '백엔드개발자',
            image: null
        },
    ];

    const scrollToContent = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };

    return (
        <S.Container>
            <S.HeroSection>
                <S.HeroContent>
                    <S.HeroTitle>맛집이 필요한 모든 순간</S.HeroTitle>
                    <S.HeroSubtitle>Food Report</S.HeroSubtitle>
                    <S.HeroDescription>
                        제주에 살고, 고향 도시 모임에 참여 나와<br />
                        관심사를 위한 소모임 정보 구할 수 있습니다.
                    </S.HeroDescription>
                    <S.ScrollButton onClick={scrollToContent}>
                        <S.ScrollIcon src="/under-button.png" alt="scroll" />
                    </S.ScrollButton>
                </S.HeroContent>
            </S.HeroSection>

            <S.ContentSection>
                <S.CardGrid>
                    {recentRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                    ))}
                </S.CardGrid>
            </S.ContentSection>
        </S.Container>
    );
};

export default MainPage;