import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: 'Pretendard', -apple-system, sans-serif;
  color: #333;
`;

export const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666;
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 32px;
`;

export const Table = styled.div`
  width: 100%;
  border-top: 1px solid #e5e7eb;
`;

export const TableHeader = styled.div`
  display: flex;
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
`;

export const TableRow = styled.div`
  border-bottom: 1px solid #f3f4f6;
`;

export const RowContent = styled.div`
  display: flex;
  padding: 16px;
  font-size: 14px;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #fafafa;
  }
`;

export const ColNumber = styled.div`
  width: 60px;
  text-align: center;
  color: #666;
`;

export const ColTitle = styled.div`
  flex: 1;
  padding: 0 20px;
  font-weight: ${(props) => (props.$isBold ? '700' : '400')};
`;

export const ColDate = styled.div`
  width: 100px;
  text-align: center;
  color: #888;
`;

export const ExpandedContent = styled.div`
  background-color: #fff;
  padding: 32px 80px;
  font-size: 14px;
  line-height: 1.8;
  color: #444;
  border-bottom: 1px solid #f3f4f6;
  white-space: pre-line; /* 줄바꿈 적용 */
`;