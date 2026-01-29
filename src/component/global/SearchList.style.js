import styled from "styled-components";

// 공용 아이콘 컨테이너
export const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: #fff;
`;

// --- 카테고리 태그 섹션 ---
export const CategorySection = styled.div`
  margin-bottom: 48px;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
  color: #1a1a1a;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 12px;
`;

export const Tag = styled.button`
  position: relative;
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid ${(props) => (props.$active ? "#f97316" : "#e5e7eb")};
  background: ${(props) => (props.$active ? "#fff7ed" : "#fff")};
  color: ${(props) => (props.$active ? "#f97316" : "#6b7280")};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #f97316;
    color: #f97316;

    &::after {
      content: attr(data-tooltip);
      position: absolute;
      bottom: 130%;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #f97316, #fb923c); 
      color: white;
      padding: 10px 14px;
      border-radius: 12px; 
      font-size: 13px;
      font-weight: 500;
      white-space: nowrap;
      box-shadow: 0 4px 12px rgba(249, 115, 22, 0.2); 
      z-index: 100;
      pointer-events: none;
    }
  }
`;

// --- 리스트 및 카드 섹션 ---
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

export const CardContainer = styled.div`
  display: flex;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  height: 200px;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
`;

export const ImagePlaceholder = styled.div`
  width: 300px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-size: 14px;
  border-right: 1px solid #f3f4f6;
`;

export const CardContent = styled.div`
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 12px;
`;

export const CardSummary = styled.p`
  font-size: 14px;
  color: #6b7280;
  flex: 1;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  .username {
    font-weight: 600;
    font-size: 14px;
    color: #374151;
  }
  
  .time {
    font-size: 12px;
    color: #9ca3af;
  }
`;

export const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e5e7eb;
  object-fit: cover;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 13px;
  color: #9ca3af;

  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export const MoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 160px;
  margin: 30px auto;
  padding: 12px;
  border: none;
  background: #fff7ed;
  color: #f97316;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #ffedd5;
  }
`;

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #f3f4f6;
  margin: 60px 0;
`;