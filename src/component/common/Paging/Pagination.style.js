import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 32px;
    padding: 20px 0;

    @media (max-width: 768px) {
        gap: 4px;
        margin-top: 24px;
    }
`;

export const PageButton = styled.button`
    padding: 10px 20px;
    border: 1px solid #e5e7eb;
    background: white;
    color: #6b7280;
    cursor: pointer;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s;

    &:hover:not(:disabled) {
        background: #f9fafb;
        border-color: #d1d5db;
        color: #374151;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
        background: #f9fafb;
    }

    @media (max-width: 768px) {
        padding: 8px 12px;
        font-size: 13px;
    }
`;

export const PageNumber = styled.button`
    padding: 10px 14px;
    min-width: 40px;
    border: 1px solid ${(props) => (props.$isActive ? "#FF6B35" : "#e5e7eb")};
    background: ${(props) => (props.$isActive ? "#FF6B35" : "white")};
    color: ${(props) => (props.$isActive ? "white" : "#374151")};
    cursor: pointer;
    border-radius: 8px;
    font-size: 14px;
    font-weight: ${(props) => (props.$isActive ? "600" : "500")};
    transition: all 0.2s;

    &:hover {
        background: ${(props) => (props.$isActive ? "#e55a28" : "#f9fafb")};
        border-color: ${(props) => (props.$isActive ? "#e55a28" : "#d1d5db")};
    }

    @media (max-width: 768px) {
        padding: 8px 10px;
        min-width: 36px;
        font-size: 13px;
    }
`;

export const Dots = styled.span`
    padding: 10px 6px;
    color: #9ca3af;
    user-select: none;
    font-weight: 500;

    @media (max-width: 768px) {
        padding: 8px 4px;
        font-size: 13px;
    }
`;