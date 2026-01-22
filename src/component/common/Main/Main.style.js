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
