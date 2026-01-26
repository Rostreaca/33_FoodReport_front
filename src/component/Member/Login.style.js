import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    padding: 2rem;
    position: relative;
`;

export const TopMenu = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    gap: 0.5rem;
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 0.5rem;
    z-index: 10;
`;

export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 6px;
    font-size: 14px;
    color: #374151;
    transition: all 0.2s;

    &:hover {
        background: #ffffff;
        color: #FF6B35;
    }
`;

export const MenuIcon = styled.span`
    font-size: 16px;
`;

export const LoginWrapper = styled.div`
    width: 100%;
    max-width: 480px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: #111827;
    text-align: center;
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

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const InputIcon = styled.span`
    position: absolute;
    left: 1rem;
    font-size: 18px;
    pointer-events: none;
`;

export const Input = styled.input`
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

export const EyeIcon = styled.span`
    position: absolute;
    right: 1rem;
    cursor: pointer;
    font-size: 18px;
    user-select: none;
`;

export const OptionsRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CheckboxWrapper = styled.label`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
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

export const LinkText = styled(Link)`
    font-size: 14px;
    color: #6b7280;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
        color: #FF6B35;
    }
`;

export const LoginButton = styled.button`
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

export const Divider = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
`;

export const DividerLine = styled.div`
    flex: 1;
    height: 1px;
    background: #e5e7eb;
`;

export const DividerText = styled.span`
    font-size: 14px;
    color: #9ca3af;
`;

export const SocialLoginSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const SocialButton = styled.button`
    width: 100%;
    padding: 0.875rem 1rem;
    border: ${props => props.$google ? '1px solid #e5e7eb' : 'none'};
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    transition: all 0.2s;

    ${props => props.$kakao && `
        background: #FEE500;
        color: #000000;
        
        &:hover {
            background: #FDD835;
        }
    `}

    ${props => props.$google && `
        background: #ffffff;
        color: #374151;
        
        &:hover {
            background: #f9fafb;
            border-color: #d1d5db;
        }
    `}
`;

export const SocialIcon = styled.span`
    font-size: 18px;
    font-weight: 600;
`;

export const SignUpLink = styled.div`
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
