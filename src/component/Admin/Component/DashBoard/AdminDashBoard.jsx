import { LayoutDashboard } from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";

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
  TablePlaceholder,
} from "./AdminDashBoard.style";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { authInstance } from "../../../api/reqService";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const AdminDashBoard = () => {
  const auth = useContext(AuthContext);
  const [todayTotalReply, setTodayTotalReply] = useState(0);
  const [todayReviewCount, setTodayReviewCount] = useState(0);
  const [todayMemberCount, setTodayMemberCount] = useState(0);
  const [weeklyNewMember, setWeeklyNewMember] = useState([]);
  const [popularRegion, setPopularRegion] = useState([]);
  const [popularTags, setPopularTags] = useState([]);

  useEffect(() => {
    authInstance
      .get("/api/admin/dashboards")
      .then((res) => {
        console.log(res.data.data);
        const weeklyNewMember = res.data.data.weeklyNewMember;
        const popularRegion = res.data.data.popularRegion;
        const popularTags = res.data.data.popularTags;

        setTodayMemberCount(res.data.data.todayMemberCount);
        setTodayReviewCount(res.data.data.todayReviewCount);
        setTodayTotalReply(res.data.data.todayTotalReply);
        setWeeklyNewMember([...weeklyNewMember]);
        setPopularRegion([...popularRegion]);
        setPopularTags([...popularTags]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 주간 신규 회원 차트 데이터
  const weeklyMemberData = {
    labels: weeklyNewMember.map(
      (item) => item.createDate || item.count || `Day ${item.id}`,
    ),
    datasets: [
      {
        label: "신규 회원",
        data: weeklyNewMember.map((item) => item.count || item.members || 0),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

// 인기 지역 차트 데이터 (totalCount 기준 상위 10개, 0 제외)
  const regionData = {
    labels: popularRegion
      .filter((item) => item.totalCount > 0) // totalCount가 0보다 큰 것만
      .sort((a, b) => b.totalCount - a.totalCount) // totalCount 내림차순 정렬
      .slice(0, 10)
      .map((item) => item.regionName),
    datasets: [
      {
        label: "지역별 총 개수",
        data: popularRegion
          .filter((item) => item.totalCount > 0)
          .sort((a, b) => b.totalCount - a.totalCount)
          .slice(0, 10)
          .map((item) => item.totalCount),
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
          "rgba(199, 199, 199, 0.7)",
          "rgba(83, 102, 255, 0.7)",
          "rgba(255, 99, 255, 0.7)",
          "rgba(99, 255, 132, 0.7)",
        ],
      },
    ],
  };

  // 인기 태그 차트 데이터
  const tagsData = {
    labels: popularTags.map((item) => item.tagName || item.name || ""),
    datasets: [
      {
        label: "인기 태그",
        data: popularTags.map((item) => item.count || item.usage || 0),
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <DashboardContainer>
      {/* 상단: 통계 카드 */}
      <HeaderSection>
        <Breadcrumb>
          <LayoutDashboard size={20} />
          <span>대시보드</span>
        </Breadcrumb>
        <WelcomeMessage>안녕하세요, {auth.auth.nickname}님</WelcomeMessage>
      </HeaderSection>

      <TopSection>
        <StatCard>
          <StatTitle>오늘 신규 회원</StatTitle>
          <StatValue>{todayMemberCount}명</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>오늘 리뷰</StatTitle>
          <StatValue>{todayReviewCount}건</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>오늘 답글</StatTitle>
          <StatValue>{todayTotalReply}건</StatValue>
        </StatCard>
      </TopSection>

      {/* 중단: 차트 영역 */}
      <MiddleSection>
        <ChartCard>
          <h3>주간 신규 회원</h3>
          <div style={{ height: "300px", padding: "20px" }}>
            <Line data={weeklyMemberData} options={chartOptions} />
          </div>
        </ChartCard>
        <ChartCard>
          <h3>인기 지역 TOP 10</h3>
          <div style={{ height: "300px", padding: "20px" }}>
            <Bar data={regionData} options={chartOptions} />
          </div>
        </ChartCard>
        <ChartCard>
          <h3>인기 태그</h3>
          <div style={{ height: "300px", padding: "20px" }}>
            <Doughnut data={tagsData} options={chartOptions} />
          </div>
        </ChartCard>
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
