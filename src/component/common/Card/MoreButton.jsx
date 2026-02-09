import styled from "styled-components";


const MoreButton = ({ text = "더 읽기", onClick }) => {
    return (
        <ButtonWrapper onClick={onClick}>
            <ButtonText>{text}</ButtonText>
            <img src="/public/next-Icon.png" alt="Next Icon" width="20" height="20" />
        </ButtonWrapper>
    );
};

export default MoreButton;

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: 1px solid #dfdfdf;
  border-radius: 6px;
  cursor: pointer;
  padding: 6px 10px;

`;

const ButtonText = styled.span`
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #464a4d;
`;