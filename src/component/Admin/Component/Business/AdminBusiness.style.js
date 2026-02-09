import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    
    @media (max-width: 768px) {
        gap: 12px;
    }
`;

export const HeaderSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    @media (max-width: 768px) {
        gap: 6px;
    }
`;

export const Breadcrumb = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    color: #666;
    font-size: 14px;
    font-weight: 500;
    
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const WelcomeMessage = styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0;
    
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

export const MainContentArea = styled.div`
    background: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    min-height: 400px;
    
    @media (max-width: 768px) {
        padding: 16px;
        border-radius: 8px;
        min-height: 300px;
    }
`;

export const TableWrapper = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Tr = styled.tr`
  &:hover {
    background: #fafbfc;
  }
`;

export const Th = styled.th`
  padding: 12px 16px;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  color: #6b7280;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  white-space: nowrap;
  width: ${(props) => props.width || "auto"};
`;

export const Td = styled.td`
  padding: 12px 16px;
  font-size: 14px;
  color: #111827;
  border-bottom: 1px solid #f3f4f6;
  vertical-align: middle;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const ThumbnailWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Thumbnail = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const ThumbnailIcon = styled.div`
  font-size: 24px;
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const RestaurantName = styled.div`
  font-weight: 600;
  color: #111827;
  font-size: 14px;
`;

export const BusinessNo = styled.div`
  font-size: 12px;
  color: #9ca3af;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fcb00b 0%, #f7573b 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 13px;
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Nickname = styled.div`
  font-weight: 500;
  color: #111827;
  font-size: 13px;
`;

export const Email = styled.div`
  font-size: 12px;
  color: #9ca3af;
`;

export const Address = styled.div`
  color: #6b7280;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 300px;
`;

export const LikeCount = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
  color: #111827;
`;

export const Heart = styled.span`
  font-size: 16px;
`;

export const DateText = styled.div`
  color: #6b7280;
  font-size: 13px;
  white-space: nowrap;
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  background-color: ${(props) => (props.$isStatus ? "#d1fae5" : "#fee2e2")};
  color: ${(props) => (props.$isStatus ? "#065f46" : "#991b1b")};
`;

export const MenuButtonWrapper = styled.div`
  position: relative;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 4px 8px;
  color: #9ca3af;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background: #f3f4f6;
    color: #6b7280;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 4px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 10;
  min-width: 140px;
  overflow: hidden;
`;

export const MenuItem = styled.button`
  width: 100%;
  padding: 10px 16px;
  background: none;
  border: none;
  text-align: left;
  font-size: 13px;
  cursor: pointer;
  color: #374151;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #f9fafb;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #f3f4f6;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  font-size: 14px;
  color: #6b7280;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 10px 0;
  }
`;