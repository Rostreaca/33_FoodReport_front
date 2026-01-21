import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    background-color: white;
    border-bottom: 1px solid #e5e7eb;
    padding: 0.75rem 1.25rem;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

export const HeaderWrapper = styled.div`
  max-width: 1420px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;


// Left Section
export const LeftSection = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;
    flex: 1;
    min-width: 0;
`;

export const LogoLink = styled(Link)`
    text-decoration: none;
    display: inline-flex;
    align-items: center;
`;

export const LogoText = styled.div`
    font-family: 'Adlam', sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #FF6B35;
    line-height: 1.2;
    white-space: nowrap;
`;

export const SearchWrapper = styled.div`
    position: relative;
    flex: 1;
    max-width: 560px;
    min-width: 240px;

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

// Right Section
export const RightSection = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
`;


export const DropdownButton = styled.button`
    font-family: 'Pretendard', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    color: #111827;
    background: none;
    border: none;
    padding: 0.5rem 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    white-space: nowrap;
    transition: color 0.2s ease;
    
    &:hover {
        color: #FF6B35;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const DropdownIcon = styled.span`
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;

  ${({ $open }) => $open && `
    transform: rotate(180deg);
  `}
`;
export const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 160px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  overflow: hidden;
  z-index: 200;
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  font-size: 14px;
  color: #111827;
  cursor: pointer;

  img {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }

  &:hover {
    background: #f9fafb;
    color: #FF6B35;
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 2.8rem;
    height: 2.8rem;
    transition: filter 0.2s ease;
  }

  &:hover img {
    filter: brightness(0) saturate(100%) 
            invert(52%) sepia(67%) 
            saturate(2876%) hue-rotate(346deg) 
            brightness(101%) contrast(101%);
  }
`;

export const UserSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-left: 0.75rem;
  border-left: 1px solid #e5e7eb;
  cursor: pointer;
`;


export const UserAvatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #f3f4f6;
    color: #6b7280;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

export const Username = styled.span`
    font-family: 'Pretendard', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    color: #333;
    display: flex;
    align-items: center;
    gap: 0.25rem;
`;
