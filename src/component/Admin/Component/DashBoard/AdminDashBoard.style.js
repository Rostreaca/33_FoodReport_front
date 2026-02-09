import styled from 'styled-components';

export const HeaderSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 8px;
    
    @media (max-width: 768px) {
        gap: 6px;
        margin-bottom: 6px;
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

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    
    @media (max-width: 768px) {
        gap: 16px;
    }
`;

export const TopSection = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 12px;
    }
`;

export const StatCard = styled.div`
    background: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    
    @media (max-width: 768px) {
        padding: 16px;
        border-radius: 8px;
    }
`;

export const StatTitle = styled.div`
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
    
    @media (max-width: 768px) {
        font-size: 12px;
        margin-bottom: 6px;
    }
`;

export const StatValue = styled.div`
    font-size: 28px;
    font-weight: 700;
    color: #1a1a1a;
    
    @media (max-width: 768px) {
        font-size: 22px;
    }
`;

export const MiddleSection = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 12px;
    }
`;

export const ChartCard = styled.div`
    background: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    
    @media (max-width: 768px) {
        padding: 16px;
        height: 200px;
        border-radius: 8px;
        font-size: 14px;
    }
`;

export const BottomSection = styled.div``;

export const TableCard = styled.div`
    background: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    
    h3 {
        margin: 0 0 16px 0;
        font-size: 16px;
        font-weight: 600;
    }
    
    @media (max-width: 768px) {
        padding: 16px;
        border-radius: 8px;
        
        h3 {
            font-size: 14px;
            margin-bottom: 12px;
        }
    }
`;

export const TablePlaceholder = styled.div`
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    border: 1px dashed #ddd;
    border-radius: 8px;
    
    @media (max-width: 768px) {
        height: 250px;
        font-size: 14px;
    }
`;