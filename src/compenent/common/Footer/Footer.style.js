import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    width: 100%;
    background-color: white;
    padding: 2rem 1rem;
`;

export const FooterWrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
`;

export const LogoLink = styled(Link)`
    font-family: 'Adlam', sans-serif;
    font-size: 20px;
    line-height: 1.25rem;
    color: #FF6B35;
    text-decoration: none;
    
    &:hover {
        opacity: 0.8;
    }
`;

export const NavWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
`;

export const NavLink = styled(Link)`
    font-family: 'Pretendard', sans-serif;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.25rem;
    color: #333333;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
        color: #FF6B35;
    }
`;

export const CopyrightWrapper = styled.div`
    text-align: center;
`;

export const CopyrightText = styled.p`
    font-family: 'Pretendard', sans-serif;
    font-size: 0.75rem;
    line-height: 1.5rem;
    color: #333333;
    margin: 0;
`;