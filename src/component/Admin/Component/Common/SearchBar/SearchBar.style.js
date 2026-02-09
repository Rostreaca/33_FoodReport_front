import styled from "styled-components";

export const SearchWrapper = styled.div`
    position: relative;
    flex: 1;
    max-width: 560px;
    min-width: 900px;

  @media (max-width: 768px) {
    max-width: 360px;
    min-width: 180px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;

  img {
    width: 25px;
    height: 25px;
  }
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 0.625rem 1rem 0.625rem 2.75rem;
    border: 1px solid #e6e8ee;
    border-radius: 10px;
    background: #ffffff;
    font-family: 'Pretendard', sans-serif;
    font-size: 0.875rem;
    color: #333;
    outline: none;
    transition: all 0.2s ease;
    
    &::placeholder {
        color: #9ca3af;
    }
    
    &:focus {
        border-color: #FF6B35;
        background: #fff;
        box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.12);
    }
`;