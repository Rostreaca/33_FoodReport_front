import styled from "styled-components";

export const NoticeRowContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 120px 130px 80px 100px 60px;
    align-items: center;
    padding: 16px 0;
    border-bottom: 1px solid #e5e7eb;
    gap: 16px;
    
    &:hover {
        background-color: #f9fafb;
    }
    
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 16px;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        margin-bottom: 12px;
        background: white;
        
        &:last-child {
            margin-bottom: 0;
        }
    }
`;

export const TitleCell = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #1a1a1a;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    .mobile-label {
        display: none;
    }
    
    @media (max-width: 768px) {
        font-size: 13px;
        width: 100%;
        padding: 8px 0;
        display: flex;
        gap: 8px;
        white-space: normal;
        
        .mobile-label {
            display: inline;
            font-weight: 600;
            color: #6b7280;
            min-width: 80px;
            flex-shrink: 0;
        }
        
        .mobile-value {
            flex: 1;
            word-break: break-word;
        }
    }
`;

export const AuthorCell = styled.div`
    font-size: 14px;
    color: #374151;
    text-align: center;
    
    .mobile-label {
        display: none;
    }
    
    @media (max-width: 768px) {
        font-size: 13px;
        width: 100%;
        padding: 8px 0;
        border-top: 1px solid #f3f4f6;
        margin-top: 4px;
        display: flex;
        gap: 8px;
        text-align: left;
        
        .mobile-label {
            display: inline;
            font-weight: 600;
            color: #6b7280;
            min-width: 80px;
        }
        
        .mobile-value {
            flex: 1;
        }
    }
`;

export const DateCell = styled.div`
    font-size: 14px;
    color: #6b7280;
    text-align: center;
    
    .mobile-label {
        display: none;
    }
    
    @media (max-width: 768px) {
        font-size: 12px;
        width: 100%;
        padding: 8px 0;
        border-top: 1px solid #f3f4f6;
        margin-top: 4px;
        display: flex;
        gap: 8px;
        
        .mobile-label {
            display: inline;
            font-weight: 600;
            color: #6b7280;
            min-width: 80px;
        }
        
        .mobile-value {
            flex: 1;
        }
    }
`;

export const ViewCountCell = styled.div`
    font-size: 14px;
    color: #374151;
    text-align: center;
    
    .mobile-label {
        display: none;
    }
    
    @media (max-width: 768px) {
        font-size: 13px;
        width: 100%;
        padding: 8px 0;
        border-top: 1px solid #f3f4f6;
        margin-top: 4px;
        display: flex;
        gap: 8px;
        
        .mobile-label {
            display: inline;
            font-weight: 600;
            color: #6b7280;
            min-width: 80px;
        }
        
        .mobile-value {
            flex: 1;
        }
    }
`;

export const StatusCell = styled.div`
    display: flex;
    justify-content: center;
    
    .mobile-label {
        display: none;
    }
    
    @media (max-width: 768px) {
        width: 100%;
        padding: 8px 0;
        border-top: 1px solid #f3f4f6;
        margin-top: 4px;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;
        
        .mobile-label {
            display: inline;
            font-weight: 600;
            color: #6b7280;
            min-width: 80px;
        }
    }
`;

export const StatusBadge = styled.span`
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    background-color: ${props => props.$isActive ? '#d1fae5' : '#fee2e2'};
    color: ${props => props.$isActive ? '#065f46' : '#991b1b'};
`;

export const OptionsCell = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    
    @media (max-width: 768px) {
        width: 100%;
        padding: 8px 0;
        border-top: 1px solid #f3f4f6;
        margin-top: 4px;
        justify-content: flex-end;
    }
`;

export const OptionsButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6b7280;
    transition: color 0.2s;
    
    &:hover {
        color: #FF6B35;
    }
    
    @media (max-width: 768px) {
        padding: 6px;
    }
`;

export const OptionsMenu = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 8px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
    min-width: 150px;
    overflow: hidden;
    
    @media (max-width: 768px) {
        right: -8px;
        min-width: 140px;
    }
`;

export const OptionsMenuItem = styled.div`
    padding: 12px 16px;
    font-size: 14px;
    color: #374151;
    cursor: pointer;
    transition: background-color 0.2s;
    
    &:hover {
        background-color: #f3f4f6;
    }
    
    &:first-child {
        color: #059669;
    }
    
    &:last-child {
        color: #dc2626;
    }
`;