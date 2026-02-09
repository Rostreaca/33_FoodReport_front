import styled from "styled-components";

export const PlaceRowContainer = styled.div`
  display: grid;
  grid-template-columns: 70px 140px 1fr 1fr 90px 130px 110px 90px;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #e5e7eb;
  gap: 20px;

  &:hover {
    background-color: #f9fafb;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const CenterCell = `
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const PlaceInfoCell = styled.div`
  font-size: 14px;
  color: #374151;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PlaceNameCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  overflow: hidden;
`;

export const PlaceIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fcb00b 0%, #f7573b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 16px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const PlaceDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const PlaceName = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #1a1a1a;
`;

export const PlaceCategory = styled.div`
  font-size: 12px;
  color: #6b7280;
`;

export const OwnerCell = styled.div`
  font-size: 14px;
  color: #1a1a1a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: 14px;
`;

export const AddressCell = styled.div`
  font-size: 14px;
  color: #374151;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
`;

export const ReviewCountCell = styled.div`
  ${CenterCell}
  font-size: 14px;
  color: #374151;
`;

export const DateCell = styled.div`
  ${CenterCell}
  font-size: 13px;
  color: #9ca3af;
`;

export const StatusCell = styled.div`
  ${CenterCell}
`;

export const StatusBadge = styled.span`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${(props) => (props.$isStatus ? "#d1fae5" : "#fee2e2")};
  color: ${(props) => (props.$isStatus ? "#065f46" : "#991b1b")};
`;

export const OptionsCell = styled.div`
  ${CenterCell}
  position: relative;
`;

export const OptionsButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  transition: color 0.2s;

  &:hover {
    color: #ff6b35;
  }

  @media (max-width: 768px) {
    padding: 6px;
  }
`;

export const OptionsMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 150px;
  overflow: hidden;

  @media (max-width: 768px) {
    right: -8px;
    min-width: 140px;
  }
`;

export const OptionsMenuItem = styled.div`
  padding: 12px 16px;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }

  &:first-child {
    color: #3b82f6; /* 파란색 - 이동 */
  }

  &:nth-child(2) {
    color: #059669; /* 초록색 - 활성화 */
  }

  &:last-child {
    color: #dc2626; /* 빨간색 - 비활성화 */
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fcb00b 0%, #f7573b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 16px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const PlaceContentCell = styled.div`
  font-size: 14px;
  color: #6b7280;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
