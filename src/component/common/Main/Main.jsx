import * as S from "./Main.style.js";

const MainPage = () => {
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
                        사장님의 진심과 유저의 생생한 후기가 만나는 곳<br />
                        당신의 입맛, 0.1% 오차 없이 찾아드립니다
                    </S.HeroDescription>
                    <S.ScrollButton onClick={scrollToContent}>
                        <S.ScrollIcon src="/under-button.png" alt="scroll" />
                    </S.ScrollButton>
                </S.HeroContent>
            </S.HeroSection>

            <S.ContentSection>
                <S.MessageContainer>
                    <S.MainMessage>
                        당신의 입맛, 데이터로 찾습니다
                    </S.MainMessage>
                    <S.SubMessage>
                        사장님의 진심 × 유저의 생생후기 × 정밀 해시태그
                    </S.SubMessage>
                    
                    <S.IntroText>
                        맛집 검색, 이제 더 이상 시간 낭비하지 마세요.<br />
                        삼삼전자만의 정밀 해시태그 로직으로 당신의 취향에 딱 맞는 맛집을 찾아드립니다.
                    </S.IntroText>

                    <S.FeatureList>
                        <S.FeatureItem>
                            <S.FeatureIcon>🏪</S.FeatureIcon>
                            <S.FeatureTitle>사장님의 진솔한 업장 가이드</S.FeatureTitle>
                            <S.FeatureDesc>
                                직접 운영하시는 사장님만이 알 수 있는 우리 가게의 특별한 이야기를 들어보세요. 
                                메뉴 추천부터 영업 시간, 주차 정보까지 사장님이 직접 전하는 
                                진솔한 정보로 방문 전 완벽하게 준비하세요.
                            </S.FeatureDesc>
                        </S.FeatureItem>
                        <S.FeatureItem>
                            <S.FeatureIcon>✍️</S.FeatureIcon>
                            <S.FeatureTitle>유저의 생생한 리뷰</S.FeatureTitle>
                            <S.FeatureDesc>
                                실제로 방문한 고객들의 솔직한 후기를 확인하세요. 
                                음식의 맛, 양, 분위기, 서비스까지 상세한 해시태그와 함께 
                                생생하게 전달되는 리얼 후기로 당신의 선택을 도와드립니다.
                            </S.FeatureDesc>
                        </S.FeatureItem>
                        <S.FeatureItem>
                            <S.FeatureIcon>🎯</S.FeatureIcon>
                            <S.FeatureTitle>정밀 해시태그 필터링</S.FeatureTitle>
                            <S.FeatureDesc>
                                #가성비_오버클럭 #삼중_감동 #단짠_알고리즘 #겉바속촉_정석 등 
                                당신이 원하는 조건을 해시태그로 선택하면 
                                삼삼전자의 데이터 기반 알고리즘이 0.1% 오차 없이 
                                딱 맞는 맛집을 찾아드립니다.
                            </S.FeatureDesc>
                        </S.FeatureItem>
                    </S.FeatureList>

                    <S.BottomSection>
                        <S.BottomTitle>왜 Food Report인가요?</S.BottomTitle>
                        <S.ReasonList>
                            <S.ReasonItem>
                                <S.ReasonNumber>01</S.ReasonNumber>
                                <S.ReasonContent>
                                    <S.ReasonTitle>신뢰할 수 있는 정보</S.ReasonTitle>
                                    <S.ReasonDesc>사장님 직접 등록 + 실제 방문 후기로 구성된 검증된 정보</S.ReasonDesc>
                                </S.ReasonContent>
                            </S.ReasonItem>
                            <S.ReasonItem>
                                <S.ReasonNumber>02</S.ReasonNumber>
                                <S.ReasonContent>
                                    <S.ReasonTitle>정확한 맞춤 추천</S.ReasonTitle>
                                    <S.ReasonDesc>정밀 해시태그 시스템으로 내 취향에 100% 부합하는 맛집 발견</S.ReasonDesc>
                                </S.ReasonContent>
                            </S.ReasonItem>
                            <S.ReasonItem>
                                <S.ReasonNumber>03</S.ReasonNumber>
                                <S.ReasonContent>
                                    <S.ReasonTitle>시간 절약</S.ReasonTitle>
                                    <S.ReasonDesc>수많은 블로그와 리뷰를 뒤적일 필요 없이 한 번에 최적의 선택</S.ReasonDesc>
                                </S.ReasonContent>
                            </S.ReasonItem>
                        </S.ReasonList>
                    </S.BottomSection>
                </S.MessageContainer>
            </S.ContentSection>
        </S.Container>
    );
};

export default MainPage;