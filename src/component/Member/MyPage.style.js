import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MyPageContainer = styled.div`
    display: flex;
    min-height: calc(100vh - 200px);
    max-width: 1420px;
    margin: 0 auto;
    padding: 2rem;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
    }
`;

export const Sidebar = styled.aside`
    width: 240px;
    min-width: 240px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 1.5rem;
    height: fit-content;
    position: sticky;
    top: 2rem;

    @media (max-width: 768px) {
        width: 100%;
        position: static;
    }
`;

export const SidebarTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 700;
    color: #111827;
    margin: 0 0 1.5rem 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e5e7eb;
`;

export const MenuList = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const MenuItem = styled(Link)`
    display: block;
    padding: 0.875rem 1rem;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.$active ? '#FF6B35' : '#374151'};
    background: ${props => props.$active ? '#fff5f2' : 'transparent'};
    text-decoration: none;
    transition: all 0.2s;

    &:hover {
        background: ${props => props.$active ? '#fff5f2' : '#f9fafb'};
        color: #FF6B35;
    }
`;

export const MainContent = styled.main`
    flex: 1;
    background: #ffffff;
    padding: 2rem;
    position: relative;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

export const TopRightMenu = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    gap: 1rem;
    z-index: 10;

    @media (max-width: 768px) {
        position: static;
        margin-bottom: 1rem;
    }
`;

export const TopMenuItem = styled.button`
    background: none;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 14px;
    color: #6b7280;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
        color: #FF6B35;
    }
`;
