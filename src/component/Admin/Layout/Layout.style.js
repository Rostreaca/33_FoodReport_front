import styled from "styled-components";

export const Layouts = styled.div`
    /* 높이를 화면 전체로 설정해야 그라데이션이 보입니다 */
    min-height: 100vh; 
    width: 100%;

    /* 더 선명하고 화사한 주황빛 그라데이션으로 수정 */
    background: linear-gradient(
        180deg, 
        rgba(156, 156, 156, 0.15) 0%,   /* 연한 오렌지색 (15% 농도) */
        rgb(253, 253, 253) 350px,  /* 350px까지 부드럽게 전환 */
        rgba(248, 248, 249, 1) 100%
    );
`;

export const AdminLayout = styled.div`
    display: flex;
    /* 내부 레이아웃도 높이를 꽉 채우도록 설정 */
    min-height: 100vh;
`;

export const MainContent = styled.main`
    flex: 1;
    padding: 24px;
    /* 배경을 투명하게 해야 바깥 Layouts의 그라데이션이 비쳐 보입니다 */
    background-color: transparent; 
    overflow-y: auto;
`;