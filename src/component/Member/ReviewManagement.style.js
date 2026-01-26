import styled from 'styled-components';

export const ReviewManagementContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const Breadcrumb = styled.div`
    font-size: 14px;
    color: #6b7280;
    margin-bottom: 1rem;
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: #111827;
    margin: 0;
`;

export const SearchBar = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

export const SearchIcon = styled.span`
    position: absolute;
    left: 1rem;
    font-size: 18px;
    font-weight: 600;
    color: #FF6B35;
    pointer-events: none;
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 0.875rem 1rem 0.875rem 2.5rem;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
    transition: all 0.2s;

    &:focus {
        border-color: #FF6B35;
        box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
    }

    &::placeholder {
        color: #9ca3af;
    }
`;

export const ReviewGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
    }
`;

export const ReviewCard = styled.div`
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        border-color: #d1d5db;
    }
`;

export const ReviewImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

export const ReviewContent = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const ReviewTitle = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: #111827;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const ReviewStats = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const StatItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 14px;
    color: #6b7280;
`;

export const HeartIcon = styled.span`
    font-size: 16px;
`;

export const ViewIcon = styled.span`
    font-size: 16px;
`;
