import React from "react";
import { AlertCircle } from "lucide-react";
import {
  Overlay,
  ModalContainer,
  Content,
  TitleWrapper,
  Title,
  Description,
  ButtonGroup,
  CancelButton,
  ConfirmButton,
} from "./ConfirmModal.style";

const ConfirmModal = ({ 
  isOpen, 
  title = "게시글을 삭제하시겠습니까?", 
  message = "이 작업은 되돌릴 수 없습니다. 삭제를 진행하시겠습니까?",
  onConfirm, 
  onCancel,
  confirmText = "삭제하기",
  cancelText = "취소"
}) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onCancel}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Content>
          {/* 아이콘과 타이틀을 가로로 배치 */}
          <TitleWrapper>
            <AlertCircle size={24} color="#f97316" strokeWidth={2.5} />
            <Title>{title}</Title>
          </TitleWrapper>
          <Description>{message}</Description>
        </Content>
        <ButtonGroup>
          <CancelButton onClick={onCancel}>{cancelText}</CancelButton>
          <ConfirmButton onClick={onConfirm}>{confirmText}</ConfirmButton>
        </ButtonGroup>
      </ModalContainer>
    </Overlay>
  );
};

export default ConfirmModal;