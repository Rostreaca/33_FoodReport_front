import styled from "styled-components";

const RestaurantImage = ({ src, children }) => {
  return (
    <ImageContainer $src={src}>
      {/* children을 통해 이 안에 CategoryBadge 등을 넣을 수 있습니다 */}
      {children}
    </ImageContainer>
  );
};

export default RestaurantImage;

const ImageContainer = styled.div`
  width: 100%;
  height: 244px;
  background-image: ${props => props.$src ? `url(${props.$src})` : 'none'};
  background-color: #f3f4f6; /* 이미지가 없을 때 기본 배경색 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative; /* 배지 배치를 위한 기준점 */
  overflow: hidden;
`;