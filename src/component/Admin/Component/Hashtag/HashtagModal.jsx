import { useState, useEffect } from "react";
import { X, MessageCircleMore, Hash } from "lucide-react";
import * as S from "./HashtagModal.style";

const HashtagModal = ({ isOpen, onClose, onSubmit, initialData = null, isEditMode = false }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  // ✅ initialData가 있으면 필드 채우기
  useEffect(() => {
    if (isOpen) {
      if (initialData && isEditMode) {
        setName(initialData.tagTitle || "");
        setContent(initialData.tagContent || "");
      } else {
        setName("");
        setContent("");
      }
    }
  }, [initialData, isEditMode, isOpen]);

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
          {/* ✅ 모드에 따라 제목 변경 */}
          <S.ModalTitle>
            {isEditMode ? "해시태그 수정" : "해시태그 추가"}
          </S.ModalTitle>
          <S.CloseButton onClick={onClose}>
            <X size={24} />
          </S.CloseButton>
        </S.ModalHeader>

        {/* ✅ 모드에 따라 설명 변경 */}
        <S.ModalDescription>
          {isEditMode ? "해시태그를 수정하시겠습니까?" : "해시태그를 추가하시겠습니까?"}
        </S.ModalDescription>

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

        {/* ✅ 모드에 따라 버튼 텍스트 변경 */}
        <S.SubmitButton onClick={handleFormSubmit}>
          {isEditMode ? "해시태그 수정하기" : "해시태그 추가하기"}
        </S.SubmitButton>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default HashtagModal;