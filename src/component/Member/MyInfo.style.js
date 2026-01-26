import styled from 'styled-components';

export const MyInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    background: #f9fafb;
    border-radius: 12px;
`;

export const ProfileImageWrapper = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #e5e7eb;
`;

export const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ProfileText = styled.p`
    font-size: 12px;
    color: #6b7280;
    text-align: center;
    margin: 0;
    max-width: 400px;
`;

export const FileInputWrapper = styled.div`
    margin-top: 0.5rem;
`;

export const FileInput = styled.input`
    display: none;
`;

export const FileLabel = styled.label`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 14px;
    color: #374151;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background: #f9fafb;
        border-color: #d1d5db;
    }
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

export const Input = styled.input`
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

    &:disabled {
        background: #f3f4f6;
        color: #6b7280;
        cursor: not-allowed;
    }
`;

export const TextAreaWrapper = styled.div`
    position: relative;
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
`;

export const CharCount = styled.span`
    position: absolute;
    bottom: 0.75rem;
    right: 1rem;
    font-size: 12px;
    color: #9ca3af;
`;

export const CheckboxWrapper = styled.label`
    display: flex;
    align-items: center;
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
`;

export const CheckboxLabel = styled.span`
    font-size: 14px;
    color: #374151;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
`;

export const ConfirmButton = styled.button`
    flex: 1;
    padding: 0.875rem 1.5rem;
    background: #FF6B35;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background: #e55a28;
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

export const Section = styled.div`
    padding: 1.5rem;
    background: #f9fafb;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const SectionTitle = styled.h3`
    font-size: 1.125rem;
    font-weight: 600;
    color: #111827;
    margin: 0;
`;

export const SectionDescription = styled.p`
    font-size: 14px;
    color: #6b7280;
    margin: 0;
`;

export const SectionButton = styled.button`
    align-self: flex-start;
    padding: 0.75rem 1.5rem;
    background: #FF6B35;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background: #e55a28;
    }
`;
