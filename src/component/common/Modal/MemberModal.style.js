import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 32px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #666;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  padding-right: ${props => props.$hasToggle ? '48px' : '16px'};
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 15px;
  color: #333;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #ff6b35;
  }

  &::placeholder {
    color: #999;
  }
`;

export const TogglePasswordButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: #999;
  font-size: 20px;

  &:hover {
    color: #666;
  }
`;

export const HelpText = styled.p`
  font-size: 13px;
  color: #4caf50;
  margin-top: 8px;
  margin-bottom: 0;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #ff6b35;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;

  &:hover {
    background-color: #e55a2b;
  }

  &:active {
    transform: scale(0.98);
  }
`;