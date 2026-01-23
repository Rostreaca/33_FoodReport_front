import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  width: 90%;
  max-width: 440px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const ModalTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0;
  letter-spacing: -1px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #6b7280;
  padding: 4px;
  display: flex;
  align-items: center;
  transition: color 0.2s;
  &:hover { color: #1a1a1a; }
`;

export const ModalDescription = styled.p`
  font-size: 14px;
  color: #9ca3af;
  margin: 0 0 24px 0;
`;

export const InputSection = styled.div`
  margin-bottom: 20px;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: #374151;
  margin-bottom: 8px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputIcon = styled.div`
  position: absolute;
  left: 12px;
  color: #6b7280;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 14px 14px 40px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 15px;
  &::placeholder { color: #9ca3af; }
  &:focus {
    outline: none;
    border-color: #F26B16;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #F26B16;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.2s;
  &:hover { background-color: #d95a0f; }
`;