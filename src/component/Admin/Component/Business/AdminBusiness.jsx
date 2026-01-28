import { useState } from "react";
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
  WelcomeMessage
} from "./AdminBusiness.style";
import { DollarSign } from "lucide-react";

const AdminBusiness = () => {
  // 샘플 데이터
  const restaurants = [
    {
      restaurantNo: 5,
      businessNo: "000-00-00000",
      nickname: "유저05",
      email: "user05@example.com",
      profileImage: null, // 이미지 URL 또는 null
      restaurantName: "또보겠지떡볶이",
      address: "몽글몽글청계",
      status: "Y",
      createDate: "2023-03-02T03:48:27.000+00:00",
    },
    {
      restaurantNo: 1,
      businessNo: "123-45-67890",
      nickname: "유저05",
      email: "user05@example.com",
      profileImage: null,
      restaurantName: "삼삼뼛국",
      address: "논현동",
      status: "Y",
      createDate: "2023-03-02T03:48:27.000+00:00",
    },
    {
      restaurantNo: 2,
      businessNo: "111-22-33333",
      nickname: "사장님01",
      email: "owner01@example.com",
      profileImage: null,
      restaurantName: "맛있는집",
      address: "강남구 테헤란로",
      status: "N",
      createDate: "2025-07-05T11:34:04.000+00:00",
    },
  ];

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
            {restaurants.map((restaurant) => (
              <Tr key={restaurant.restaurantNo}>
                <Td>
                  <UserInfo>
                    <Avatar>
                      {restaurant.profileImage ? (
                        <img src={restaurant.profileImage} alt={restaurant.nickname} />
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
                  <Email>{restaurant.email}</Email>
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
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
};

export default AdminBusiness;