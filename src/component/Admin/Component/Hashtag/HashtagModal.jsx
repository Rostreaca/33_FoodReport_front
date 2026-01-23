import { useState } from "react";
import { X, MessageCircleMore, Hash } from "lucide-react";
import * as S from "./HashtagModal.style";

const HashtagModal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  if (!isOpen) return null;

  const handleFormSubmit = () => {
    if (!name || !content) return alert("내용을 입력해주세요.");
    onSubmit({ name, content });
    setName("");
    setContent("");
    onClose();
  };
  
  return (
    <S.ModalOverlay onClick={(e) => e.target === e.currentTarget && onClose()}>
      <S.ModalContainer>
        <S.ModalHeader>
          <S.ModalTitle>해시 태그 추가</S.ModalTitle>
          <S.CloseButton onClick={onClose}>
            <X size={24} />
          </S.CloseButton>
        </S.ModalHeader>

        <S.ModalDescription>해시태그를 추가하시겠습니까?</S.ModalDescription>

        <S.InputSection>
          <S.InputLabel>해시태그 이름</S.InputLabel>
          <S.InputWrapper>
            <S.InputIcon><Hash size={18} /></S.InputIcon>
            <S.Input
              placeholder="해시태그 이름을 입력해주세요."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </S.InputWrapper>
        </S.InputSection>

        <S.InputSection>
          <S.InputLabel>해시태그 내용</S.InputLabel>
          <S.InputWrapper>
            <S.InputIcon><MessageCircleMore size={18} /></S.InputIcon>
            <S.Input
              placeholder="해시태그 내용을 입력해주세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </S.InputWrapper>
        </S.InputSection>

        <S.SubmitButton onClick={handleFormSubmit}>
          해시태그 추가하기
        </S.SubmitButton>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default HashtagModal;