import { useState, useContext } from 'react';
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import * as S from './MemberModal.style';

// 사장님 등록하기 모달
export const RegisterOwnerModal = ({ isOpen, onClose }) => {
  const [businessNumber, setBusinessNumber] = useState('');
  const [storeName, setStoreName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('사장님 등록:', { businessNumber, storeName, address });
    alert('사장님 등록 신청이 완료되었습니다!');
    onClose();
    setBusinessNumber('');
    setStoreName('');
    setAddress('');
  };

  if (!isOpen) return null;

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <S.ModalTitle>사장님 등록하기</S.ModalTitle>
          <S.CloseButton onClick={onClose}>×</S.CloseButton>
        </S.ModalHeader>
        <form onSubmit={handleSubmit}>
          <S.FormGroup>
            <S.FormLabel>사업자 번호</S.FormLabel>
            <S.FormInput
              type="text"
              name="businessNumber"
              placeholder="사업자 번호를 입력해주세요. (- 제외)"
              value={businessNumber}
              onChange={(e) => setBusinessNumber(e.target.value)}
              maxLength="10"
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.FormLabel>가게 이름</S.FormLabel>
            <S.FormInput
              type="text"
              name="storeName"
              placeholder="상호를 입력해주세요."
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.FormLabel>사업장 소재지</S.FormLabel>
            <S.FormInput
              type="text"
              name="address"
              placeholder="주소를 입력해주세요."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <S.HelpText>관리자 승인 후 등록됩니다.</S.HelpText>
          </S.FormGroup>
          <S.SubmitButton type="submit">등록</S.SubmitButton>
        </form>
      </S.Modal>
    </S.ModalOverlay>
  );
};