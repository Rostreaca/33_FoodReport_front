import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  overflow: visible; /* 추가 */

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
  overflow-y: visible;

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 8px;
  }
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 150px 150px 100px 80px;
  align-items: center;
  padding: 16px 0;
  border-bottom: 2px solid #e5e7eb;
  gap: 16px;
  font-weight: 600;
  font-size: 14px;
  color: #374151;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TableHeaderCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;

  &:first-child {
    justify-content: flex-start;
    padding-left: 10px;
  }
`;

export const NoticeList = styled.div`
  min-height: 200px;

  @media (max-width: 768px) {
    min-height: 150px;
  }
`;

export const EmptyStateMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  font-size: 16px;
  color: #6b7280;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 16px;
    font-size: 14px;
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

export const SearchActionSection = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
    align-items: flex-end;
  }
`;

export const AddButton = styled.button`
  padding: 10px 24px;
  background-color: #ff6b35;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e55a2b;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;
