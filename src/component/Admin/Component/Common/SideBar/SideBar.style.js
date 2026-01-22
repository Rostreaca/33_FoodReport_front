import styled from "styled-components";

export const Container = styled.div`
  width: 240px;
  height: 650px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  border: 1.5 solid #E8EEF2;
  margin: 20px 0 0 20px;
  border-radius: 20px;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f1f3f5;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #495057;
  margin-right: 12px;
`;

export const MenuText = styled.span`
  flex: 1;
  font-size: 14px;
  font-weight: bold;
  color: #212529;
`;

export const ArrowIcon = styled.div`
  display: flex;
  align-items: center;
  color: #adb5bd;
`;

export const BottomMenu = styled.div`
  margin-top: auto;
`;
