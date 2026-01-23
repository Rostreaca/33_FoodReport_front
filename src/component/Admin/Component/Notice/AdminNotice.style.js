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
  overflow-x: auto;

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 8px;
  }
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px 130px 80px 100px 60px;
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
  align-items: center;

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    input[type="checkbox"] {
      width: 16px;
      height: 16px;
    }
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