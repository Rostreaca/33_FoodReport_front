import styled from 'styled-components';

export const SignUpContainer = styled.div`
    min-height: 100vh;
    display: flex;
    position: relative;
    background-color: #ffffff;
`;

export const BackgroundImage = styled.div`
    flex: 1;
    background-image: url('/main.jpg');
    background-size: cover;
    background-position: center;
    filter: blur(2px);
    
    @media (max-width: 768px) {
        display: none;
    }
`;

export const SignUpWrapper = styled.div`
    flex: 1;
    max-width: 600px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow-y: auto;
    background: #ffffff;
`;

export const TopMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
`;

export const MenuItem = styled.button`
    background: none;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 14px;
    color: ${props => props.$active ? '#FF6B35' : '#6b7280'};
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
        color: #FF6B35;
    }
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

export const InputRow = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex: 1;
`;

export const InputIcon = styled.span`
    position: absolute;
    left: 1rem;
    font-size: 18px;
    pointer-events: none;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.875rem 1rem 0.875rem ${props => props.type === 'tel' || props.name === 'nickname' ? '3rem' : '1rem'};
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

export const EyeIcon = styled.span`
    position: absolute;
    right: 1rem;
    cursor: pointer;
    font-size: 18px;
    user-select: none;
`;

export const CheckButton = styled.button`
    padding: 0.875rem 1.5rem;
    background: #f3f4f6;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    color: #374151;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s;

    &:hover {
        background: #e5e7eb;
    }
`;

export const ErrorText = styled.span`
    font-size: 12px;
    color: #ef4444;
`;

export const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    background: #f9fafb;
    border-radius: 8px;
`;

export const ProfileText = styled.p`
    font-size: 12px;
    color: #6b7280;
    margin: 0;
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
    padding: 0.75rem 1rem;
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

export const SignUpButton = styled.button`
    width: 100%;
    padding: 1rem;
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

    &:active {
        transform: scale(0.98);
    }
`;

export const LoginLink = styled.div`
    text-align: center;
    font-size: 14px;
    color: #6b7280;

    a {
        color: #FF6B35;
        text-decoration: none;
        font-weight: 500;

        &:hover {
            text-decoration: underline;
        }
    }
`;
