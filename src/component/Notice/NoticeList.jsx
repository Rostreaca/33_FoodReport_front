import React, { useState } from 'react';
import { Home, ChevronRight } from 'lucide-react';
import {
    Container,
    Breadcrumb,
    Title,
    Table,
    TableHeader,
    TableRow,
    RowContent,
    ColNumber,
    ColTitle,
    ColDate,
    ExpandedContent
} from './NoticeList.style.js';
import Pagination from '../common/Paging/Pagination.jsx';
import ConfirmModal from '../common/Confirm/ConfirmModal.jsx';

const NoticeList = () => {
    // 특정 아이템이 클릭되었을 때의 상태 (이미지처럼 서버 점검 안내가 열려있는 상태를 기본값으로 예시)
    const [openId, setOpenId] = useState(5);

    const notices = [
        { id: 92, title: "신규 회원 전용 웰컴 페이지가 추가되었습니다.", date: "2024-10-21" },
        { id: 92, title: "알림 설정 옵션이 세분화되어 원하는 알림만 받을 수 있습니다.", date: "2024-10-21" },
        { id: 92, title: "긴급 배송 서비스는 연휴 기간에도 이용 가능합니다.", date: "2024-10-21" },
        { id: 92, title: "추석 연휴로 인해 배송 마감 일정이 조정됩니다.", date: "2024-10-21" },
        { id: 92, title: "택배사 파업으로 일부 지역 배송이 지연되고 있습니다.", date: "2024-10-21" },
        {
            id: 92,
            title: "Designbase 서버 점검 안내 (일시: 2024. 10. 10.)",
            date: "2024-10-21",
            content: `안녕하세요.
항상 Designbase를 이용해 주시는 고객님들께 감사드립니다.
더 안정적이고 원활한 서비스를 제공하기 위해 서버 점검 작업을 진행할 예정입니다.
점검 기간 동안 서비스 이용이 제한될 수 있는 점 양해 부탁드립니다.

- 점검 일시: 2024. 10. 10. (화) 02:00~05:00
- 점검 내용: 서버 안정화 및 성능 최적화

점검이 완료된 후에는 더욱 빠르고 안정적인 서비스를 제공해 드리겠습니다.`
        },
        { id: 92, title: "앱 업데이트로 버그가 수정되고 성능이 향상되었습니다.", date: "2024-10-21" },
        { id: 92, title: "정기적인 서버 점검이 매월 첫째 주 화요일에 진행됩니다.", date: "2024-10-21" },
    ];

    const handleToggle = (index) => {
        setOpenId(openId === index ? null : index);
    };

    const [pageInfo, setPageInfo] = useState({
        currentPage: 1,
        startPage: 1,
        endPage: 5,
        maxPage: 10,
    });

    return (
        <Container>
            <Breadcrumb>
                <Home size={16} />
                <ChevronRight size={14} />
                <span>공지사항</span>
            </Breadcrumb>

            <Title>공지사항</Title>

            <Table>
                <TableHeader>
                    <ColNumber>번호</ColNumber>
                    <ColTitle>제목</ColTitle>
                    <ColDate>등록일</ColDate>
                </TableHeader>

                {notices.map((notice, index) => (
                    <TableRow key={index}>
                        <RowContent onClick={() => handleToggle(index)}>
                            <ColNumber>{notice.id}</ColNumber>
                            <ColTitle $isBold={openId === index}>{notice.title}</ColTitle>
                            <ColDate>{notice.date}</ColDate>
                        </RowContent>

                        {openId === index && notice.content && (
                            <ExpandedContent>
                                {notice.content}
                            </ExpandedContent>
                        )}
                    </TableRow>
                ))}
            </Table>
                <Pagination
                    pageInfo={pageInfo}
                    onPageChange={(page) => setPageInfo({ ...pageInfo, currentPage: page })}
                />
        </Container>
        
    );
};

export default NoticeList;