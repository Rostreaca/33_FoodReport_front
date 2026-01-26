import styled from 'styled-components';

export const MemberWithdrawalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 600px;
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

export const WarningBox = styled.div`
    padding: 1.5rem;
    background: #fef2f2;
    border: 1px solid #fecaca;
    border-radius: 12px;
`;

export const WarningTitle = styled.h3`
    font-size: 1.125rem;
    font-weight: 600;
    color: #dc2626;
    margin: 0 0 1rem 0;
`;

export const WarningList = styled.ul`
    margin: 0;
    padding-left: 1.5rem;
    color: #991b1b;
    font-size: 14px;
    line-height: 1.8;

    li {
        margin-bottom: 0.5rem;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Label = styled.label`
    font-size: 14px;
    font-weight: 500;
    color: #374151;
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 0.875rem 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 14px;
    font-family: inherit;
    outline: none;
    resize: vertical;
    transition: all 0.2s;

    &:focus {
        border-color: #FF6B35;
        box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
    }

    &::placeholder {
        color: #9ca3af;
    }
`;

export const ConfirmInput = styled.input`
    padding: 0.875rem 1rem;
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

export const ConfirmText = styled.p`
    font-size: 12px;
    color: #6b7280;
    margin: 0.25rem 0 0 0;
`;

export const CheckboxWrapper = styled.label`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    cursor: pointer;
    padding: 1rem;
    background: #f9fafb;
    border-radius: 8px;
`;

export const Checkbox = styled.input`
    width: 18px;
    height: 18px;
    accent-color: #FF6B35;
    cursor: pointer;
    margin-top: 2px;
    flex-shrink: 0;
`;

export const CheckboxLabel = styled.span`
    font-size: 14px;
    color: #374151;
    line-height: 1.5;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
`;

export const WithdrawButton = styled.button`
    flex: 1;
    padding: 0.875rem 1.5rem;
    background: #dc2626;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background: #b91c1c;
    }

    &:active {
        transform: scale(0.98);
    }
`;

export const CancelButton = styled.button`
    flex: 1;
    padding: 0.875rem 1.5rem;
    background: #ffffff;
    color: #374151;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background: #f9fafb;
        border-color: #d1d5db;
    }
`;
