import { LayoutDashboard } from 'lucide-react';

import {
    DashboardContainer,
    HeaderSection,
    Breadcrumb,
    WelcomeMessage,
    TopSection,
    StatCard,
    StatTitle,
    StatValue,
    MiddleSection,
    ChartCard,
    BottomSection,
    TableCard,
    TablePlaceholder
} from './AdminDashBoard.style';

const AdminDashBoard = () => {
    return (
        <DashboardContainer>
            {/* 상단: 통계 카드 */}
            <HeaderSection>
                <Breadcrumb>
                    <LayoutDashboard size={20} />
                    <span>대시보드</span>
                </Breadcrumb>
                <WelcomeMessage>안녕하세요, 하늘님</WelcomeMessage>
            </HeaderSection>

            <TopSection>
                <StatCard>
                    <StatTitle>수익</StatTitle>
                    <StatValue>2,192,320원</StatValue>
                </StatCard>
                <StatCard>
                    <StatTitle>주문</StatTitle>
                    <StatValue>3,282 건</StatValue>
                </StatCard>
                <StatCard>
                    <StatTitle>평균 고객 가치</StatTitle>
                    <StatValue>119,370원</StatValue>
                </StatCard>
            </TopSection>

            {/* 중단: 차트 영역 (빈 카드) */}
            <MiddleSection>
                <ChartCard>차트 영역 1</ChartCard>
                <ChartCard>차트 영역 2</ChartCard>
                <ChartCard>차트 영역 3</ChartCard>
            </MiddleSection>

            {/* 하단: 테이블 */}
            <BottomSection>
                <TableCard>
                    <h3>최근 거래 내역</h3>
                    <TablePlaceholder>테이블 영역</TablePlaceholder>
                </TableCard>
            </BottomSection>
        </DashboardContainer>
    );
};

export default AdminDashBoard;