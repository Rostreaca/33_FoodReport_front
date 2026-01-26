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

export const SearchActionSection = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 8px;
        align-items: stretch;
    }
`;

export const SearchWrapper = styled.div`
    flex: 1;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ActionButtons = styled.div`
    display: flex;
    gap: 8px;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const AddButton = styled.button`
    padding: 10px 24px;
    background-color: #FF6B35;
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
        flex: 1;
        padding: 12px 20px;
    }
`;

export const DeleteButton = styled.button`
    padding: 10px 24px;
    background-color: white;
    color: #374151;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover {
        background-color: #f9fafb;
        border-color: #9ca3af;
    }
    
    @media (max-width: 768px) {
        flex: 1;
        padding: 12px 20px;
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

export const HashtagList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: flex-start;
    
    @media (max-width: 768px) {
        gap: 10px;
    }
`;

export const HashtagTag = styled.div`
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    user-select: none;
    

    background-color: ${props => {
        console.log('Status:', props.$status, 'isSelected:', props.$isSelected); // 디버깅용
        if (props.$isSelected) return '#FF6B35'; 
        if (props.$status === 'N') return '#FEE2E2'; 
        return '#f3f4f6'; 
    }};


    color: ${props => {
        if (props.$isSelected) return 'white';
        if (props.$status === 'N') return '#EF4444'; 
        return '#374151';
    }};


    border: ${props => 
        props.$status === 'N' && !props.$isSelected 
        ? '1px solid #FECACA' 
        : '1px solid transparent'
    };
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

        background-color: ${props => {
            if (props.$isSelected) return '#e55a2b';
            if (props.$status === 'N') return '#FCA5A5'; 
            return '#e5e7eb';
        }};
    }
    
    &:active {
        transform: translateY(0);
    }
    
    @media (max-width: 768px) {
        padding: 8px 16px;
        font-size: 13px;
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
    width: 100%;
    
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

export const TagWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin: 5px; 
`;

export const HashtagContent = styled.div`
  position: absolute;
  top: calc(100% + 10px); 
  left: 0;
  z-index: 100;
  min-width: 200px;
  padding: 12px;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 15px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #ffffff;
  }
`;

export const ContentText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #334155;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-all;
`;