import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Container,
  ContentBox,
  Icon,
  ErrorCode,
  ErrorMessage,
  Description,
  HomeButton
} from './NotFound.style.js';
// 이미지는 프로젝트 경로에 맞게 수정해줘!
import ErrorIconImg from '../../../../public/logo.png'; 



const NotFound = () => {
  const location = useLocation();

  const navigate = useNavigate();

  return (
    <Container>
      <ContentBox>
        <Icon src={ErrorIconImg} alt="Error Icon" />
        <ErrorCode>404 Error</ErrorCode>
        <ErrorMessage>오류가 발생했어요!</ErrorMessage>
        <Description>
          { location.state }<br />
          문제가 지속되면 고객센터에 문의해주세요.
        </Description>
        <HomeButton onClick={() => navigate('/')}>
          홈으로 가기
        </HomeButton>
      </ContentBox>
    </Container>
  );
};

export default NotFound;