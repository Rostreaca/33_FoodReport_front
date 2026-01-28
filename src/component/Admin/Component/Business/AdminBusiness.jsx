import { useEffect, useState } from "react";
import {
  Container,
  TableWrapper,
  Table,
  Tr,
  Th,
  Td,
  UserInfo,
  Avatar,
  UserDetail,
  Nickname,
  Email,
  Address,
  DateText,
  StatusBadge,
  HeaderSection,
  Breadcrumb,
  WelcomeMessage,
  PageWrapper,
} from "./AdminBusiness.style";
import { DollarSign } from "lucide-react";
import Pagination from "../../../common/Paging/Pagination";
import { authInstance } from "../../../api/reqService";

const AdminBusiness = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [pageInfo, setPageInfo] = useState({});

  const getRestaurant = (page = 1) => {
    authInstance
      .get(`/api/admin/members/places?page=${page}`)
      .then((res) => {
        console.log(res);
        const restaurant = res.data.data.restaurant;
        const pages = res.data.data.pageInfo;
        setPageInfo(pages);
        setRestaurants([...restaurant]);
      })
      .catch((err) => {
        console.log("업장 목록 조회 실패 : ", err);
      });
  };

  useEffect(() => {
    getRestaurant(1);
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
  };

  const getStatusBadge = (status) => {
    if (status === "Y") {
      return <StatusBadge $isStatus={true}>등록됨</StatusBadge>;
    } else {
      return <StatusBadge $isStatus={false}>취소</StatusBadge>;
    }
  };

  const handlePageChange = (page) => {
    getRestaurant(page);
  };

  return (
    <Container>
      <HeaderSection>
        <Breadcrumb>
          <DollarSign size={20} />
          <span>사업자 관리</span>
        </Breadcrumb>
        <WelcomeMessage>사업자 관리</WelcomeMessage>
      </HeaderSection>
      <TableWrapper>
        <Table>
          <thead>
            <Tr>
              <Th width="150px">사용자</Th>
              <Th width="150px">사업자번호</Th>
              <Th width="200px">Email</Th>
              <Th width="200px">업장명</Th>
              <Th>주소</Th>
              <Th width="150px">등록일</Th>
              <Th width="100px">상태</Th>
            </Tr>
          </thead>
          <tbody>
            {restaurants.length === 0 ? (
              <Tr>
                <Td
                  colSpan="7"
                  style={{ textAlign: "center", padding: "40px" }}
                >
                  등록된 업장이 없습니다.
                </Td>
              </Tr>
            ) : (
              restaurants.map((restaurant) => (
                <Tr key={restaurant.restaurantNo}>
                  <Td>
                    <UserInfo>
                      <Avatar>
                        {restaurant.profileImage ? (
                          <img
                            src={restaurant.profileImage}
                            alt={restaurant.nickname}
                          />
                        ) : (
                          restaurant.nickname?.charAt(0) || "U"
                        )}
                      </Avatar>
                      <UserDetail>
                        <Nickname>{restaurant.nickname}</Nickname>
                      </UserDetail>
                    </UserInfo>
                  </Td>
                  <Td>{restaurant.businessNo}</Td>
                  <Td>
                    <Email>{restaurant.memberId}</Email>
                  </Td>
                  <Td>{restaurant.restaurantName}</Td>
                  <Td>
                    <Address>{restaurant.address}</Address>
                  </Td>
                  <Td>
                    <DateText>{formatDate(restaurant.createDate)}</DateText>
                  </Td>
                  <Td>{getStatusBadge(restaurant.status)}</Td>
                </Tr>
              ))
            )}
          </tbody>
        </Table>

        {restaurants.length === 0 ? (
          <PageWrapper>
          </PageWrapper>
        ) : (
          <PageWrapper>
            <span>
              페이지 총 {pageInfo.boardLimit}개 중 {pageInfo.listCount}개
            </span>
            <Pagination pageInfo={pageInfo} onPageChange={handlePageChange} />
          </PageWrapper>
        )}
      </TableWrapper>
    </Container>
  );
};

export default AdminBusiness;
