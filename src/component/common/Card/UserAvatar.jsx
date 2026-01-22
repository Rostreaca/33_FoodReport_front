import styled from "styled-components";

const UserAvatar = ({ src, className }) => {
  return (
    <AvatarWrapper className={className}>
      {/* src가 없으면 기본 회색 배경으로 표시 */}
      {src ? <AvatarImage src={src} alt="user" /> : <DefaultBg />}
    </AvatarWrapper>
  );
};

export default UserAvatar;

const AvatarWrapper = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e8eef2;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DefaultBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ccc;
`;