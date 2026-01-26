import styled from 'styled-components';

export const LikesListContainer = styled.div`
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
    pointer-events: none;
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 0.875rem 1rem 0.875rem 3rem;
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

export const LikesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const LikeItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    transition: all 0.2s;

    &:hover {
        background: #f9fafb;
        border-color: #d1d5db;
    }
`;

export const ItemLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;
`;

export const AvatarWrapper = styled.div`
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    > div {
        width: 40px !important;
        height: 40px !important;
    }
`;

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const RestaurantName = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #111827;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const VerifiedBadge = styled.span`
    color: #FF6B35;
    font-size: 12px;
`;

export const Category = styled.span`
    font-weight: 400;
    color: #6b7280;
`;

export const MetaInfo = styled.div`
    font-size: 14px;
    color: #6b7280;
`;

export const ItemRight = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;

export const InteractionCount = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 14px;
    color: #6b7280;
`;

export const HeartIcon = styled.span`
    font-size: 16px;
`;

export const CommentIcon = styled.span`
    font-size: 16px;
`;
