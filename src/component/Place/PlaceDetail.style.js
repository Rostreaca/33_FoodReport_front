import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  font-family: 'Pretendard', sans-serif;
`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #666;
  margin-bottom: 20px;

  .link-item {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: #ff6b35; /* 호버 시 주황색으로 변화 */
    }
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid #eee;
  padding: 30px;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #eee;
  }
  
  .details {
    display: flex;
    flex-direction: column;
    span { font-size: 14px; font-weight: 600; }
    small { font-size: 12px; color: #999; }
  }
`;

export const ContentText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 400px; /* 이미지의 최대 너비 제한 */
  margin-bottom: 30px;
  border-radius: 12px;
  overflow: hidden; /* 테두리 곡선 밖으로 나가는 이미지 잘라내기 */
  border: 1px solid #eee;
`;

export const PlaceImage = styled.img`
  width: 100%;
  height: 250px; /* 고정 높이 혹은 auto */
  object-fit: cover; /* 비율을 유지하면서 영역을 꽉 채움 */
  display: block;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02); /* 살짝 커지는 효과 */
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #f1f1f1;
  padding-top: 20px;
`;

export const ActionBtn = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  /* 주황색 버튼 (수정/삭제) */
  background: ${props => props.orange ? '#fff1ed' : 'white'};
  color: ${props => props.orange ? '#ff6b35' : '#333'};
  border: ${props => props.orange ? 'none' : '1px solid #dee2e6'};

  &:hover {
    background: ${props => props.orange ? '#ff6b35' : '#f8f9fa'};
    color: ${props => props.orange ? 'white' : '#000'};
    border-color: ${props => props.orange ? '#ff6b35' : '#adb5bd'};
  }
`;

export const Stats = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  color: #666;
  font-size: 14px;
  align-items: center;
  svg { width: 16px; height: 16px; }
`;

export const CommentSection = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid #eee;
  padding: 20px;
`;

export const CommentInputRow = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0 30px 0;
  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
    &:focus { border-color: #ff6b35; }
  }
`;

export const OrangeBtn = styled.button`
  background: #ff6b35;
  color: white;
  border: none;
  padding: 0 20px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #e85a24; } /* 더 진한 주황색으로 변화 */
`;

export const CommentItem = styled.div`
  position: relative;
  padding: 15px 0;
  border-bottom: 1px solid #f1f1f1;
`;

export const CommentBody = styled.div`
  font-size: 14px;
  color: #333;
  margin: 5px 0 15px 0;
  line-height: 1.5;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 30px;
  background: white;
  border: 1px solid #eee;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-radius: 8px;
  z-index: 10;
  width: 120px;
  overflow: hidden;
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  font-size: 13px;
  color: #444;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { 
    background: #fff1ed; 
    color: #ff6b35;
  }
  svg { width: 14px; height: 14px; }
`;

export const HeartButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${props => props.active ? '#ff4d4f' : '#666'};

  svg {
    width: 16px;
    height: 16px;
    fill: ${props => props.active ? '#ff4d4f' : 'transparent'}; 
    transition: transform 0.2s ease;
  }

  &:hover {
    color: #ff4d4f;
    svg {
      transform: scale(1.2); 
      fill: ${props => props.active ? '#ff4d4f' : '#ffccc7'}; 
    }
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 8px;
  margin-top: 15px; 
  margin-bottom: 20px;
`;

export const Tag = styled.span`
  background-color: #f1f5f9; 
  color: #475569; 
  padding: 6px 14px;
  border-radius: 20px; 
  font-size: 13px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  cursor: default;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e2e8f0; 
  }

  &::before {
    content: "#";
    margin-right: 2px;
    color: #94a3b8;
  }
`;