import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

export const Icon = styled.img`
  width: 360px;
  height: auto;
  margin-bottom: 24px;
`;

export const ErrorCode = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: #333;
  margin: 0;
`;

export const ErrorMessage = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #444;
  margin: 16px 0 12px 0;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #888;
  line-height: 1.6;
  margin-bottom: 32px;
`;

export const HomeButton = styled.button`
  background-color: #ff6b00; /* 오렌지색 포인트 */
  color: white;
  border: none;
  border-radius: 8px;
  padding: 14px 48px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #e66000;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;