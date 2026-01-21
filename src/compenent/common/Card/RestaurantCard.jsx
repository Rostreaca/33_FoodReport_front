import styled from "styled-components";
import RestaurantImage from "./RestaurantImage";
import UserAvatar from "./UserAvatar";
import MoreButton from "./MoreButton";

const RestaurantCard = ({ restaurant }) => {

  return (
    <CardWrapper>
      <RestaurantImage src={restaurant.image}>
      </RestaurantImage>
      <ContentSection>
        <Title>{restaurant.name}</Title>
        <Description>{restaurant.category}</Description>
        <Footer>
          <UserInfo>
            <UserAvatar src={restaurant.authorImage} />
            <AuthorName>{restaurant.author}</AuthorName>
          </UserInfo>
          <MoreButton />
        </Footer>
      </ContentSection>
    </CardWrapper>
  );
};

// 스타일 정의 (이전과 동일)
const CardWrapper = styled.div`
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #e8eef2;
  display: flex;
  flex-direction: column;
  height: 440px;
  overflow: hidden;
  transition: transform 0.3s ease;
  &:hover { transform: translateY(-5px); }
`;
const ContentSection = styled.div` padding: 16px; display: flex; flex-direction: column; flex: 1; `;
const Title = styled.h3` margin: 0 0 8px 0; font-size: 20px; font-weight: 700; color: #17191a; `;
const Description = styled.p` margin: 0; font-size: 14px; color: #464a4d; `;
const Footer = styled.div` margin-top: auto; display: flex; align-items: center; justify-content: space-between; `;
const UserInfo = styled.div` display: flex; align-items: center; gap: 8px; `;
const AuthorName = styled.span` font-size: 14px; font-weight: 600; color: #464a4d; `;

export default RestaurantCard;