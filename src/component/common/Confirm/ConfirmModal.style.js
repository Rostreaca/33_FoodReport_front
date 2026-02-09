import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(2px);
`;

export const ModalContainer = styled.div`
  background: white;
  width: 400px;
  padding: 32px;
  border-radius: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h3`
  font-size: 19px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  letter-spacing: -0.5px;
  line-height: 1.4;
`;

export const Description = styled.p`
  font-size: 15px;
  color: #6b7280;
  margin: 0;
  line-height: 1.6;
  white-space: pre-line;
  padding-left: 34px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: white;
  color: #4b5563;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f9fafb;
  }
`;

export const ConfirmButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  background: #f97316;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #ea580c;
  }
`;