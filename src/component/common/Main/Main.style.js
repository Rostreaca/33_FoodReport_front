import styled, { keyframes } from "styled-components";

// ================= 애니메이션 =================
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

// ================= 공통 컨테이너 =================
export const Container = styled.div`
  width: 100%;
`;

// ================= Hero Section =================
export const HeroSection = styled.section`
  width: 100%;
  height: 760px;
  background-image: url("/main.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.5)
    );
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
  max-width: 800px;
  padding: 2rem;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const HeroSubtitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

export const HeroDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 3rem;
`;

export const ScrollButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const ScrollIcon = styled.img`
  width: 60px;
  height: 60px;
  animation: ${bounce} 2s infinite;
`;

// ================= Content Section =================
export const ContentSection = styled.section`
  max-width: 1420px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

// ================= Article Card =================
export const ArticleWrapper = styled.div`
  background: #fff;
  border: 1px solid #e8eef2;
  border-radius: 8px;
  height: 440px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ArticleImage = styled.div`
  width: 100%;
  height: 244px;
  background-image: ${({ $imgUrl }) =>
    $imgUrl ? `url(${$imgUrl})` : "none"};
  background-color: #f3f4f6;
  background-size: cover;
  background-position: center;
`;

export const ContentContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Description = styled.div`
  font-size: 12px;
  color: #464a4d;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`;

export const AuthorName = styled.div`
  font-size: 16px;
  font-weight: 700;
  flex: 1;
`;

// ================= Message Section (새로 추가) =================
export const MessageContainer = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const MainMessage = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SubMessage = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const IntroText = styled.p`
  font-size: 1.125rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
  margin-bottom: 6rem;
`;

export const FeatureItem = styled.div`
  padding: 2.5rem;
  border-radius: 16px;
  background: #f8f9fa;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    background: #fff;
  }
`;

export const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

export const FeatureDesc = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.8;
`;

// ================= Bottom Section (새로 추가) =================
export const BottomSection = styled.div`
  margin-top: 6rem;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #ff9830 0%, #ff8800 100%);
  border-radius: 20px;
`;

export const BottomTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const ReasonList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

export const ReasonItem = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  text-align: left;
  transition: background 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const ReasonNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  opacity: 0.8;
  flex-shrink: 0;
`;

export const ReasonContent = styled.div`
  flex: 1;
`;

export const ReasonTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
`;

export const ReasonDesc = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
`;