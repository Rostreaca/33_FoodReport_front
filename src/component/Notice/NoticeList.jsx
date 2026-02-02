import React, { useEffect, useState } from 'react';
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
    ExpandedContent,
    NoticeImg
} from './NoticeList.style.js';
import Pagination from '../common/Paging/Pagination.jsx';
import { publicInstance } from '../api/reqService.js';

const NoticeList = () => {
    const [openId, setOpenId] = useState();
    const [notices, setNotices] = useState([{ boardNo: 92, boardTitle: "신규 회원 전용 웰컴 페이지가 추가되었습니다.", createDate: "2024-10-21" }]);


    const handleToggle = (index) => {
        setOpenId(openId === index ? null : index);
    };

    const [pageInfo, setPageInfo] = useState({
        currentPage: 1,
        startPage: 1,
        endPage: 5,
        maxPage: 10,
    });

    const findAllNotices = () => {

        publicInstance.get(`/api/notices?page=${pageInfo.currentPage}`)
        .then((res) => {
            console.log(res);
            setNotices(res.data.data.notices);
            setPageInfo(res.data.data.pageInfo);
        }).catch((err) => {
            console.log(err);
        })

    }

    useEffect(() => {
        findAllNotices();
    }, [])

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
                            <ColNumber>{notice.noticeNo}</ColNumber>
                            <ColTitle $isBold={openId === index}>{notice.noticeTitle}</ColTitle>
                            <ColDate>{notice.createDate}</ColDate>
                        </RowContent>

                        {openId === index && notice.noticeContent && (
                            <ExpandedContent>
                                {notice.noticeContent}
                                {notice.noticeImageUrl != null ? <div>
                                    <br />
                                    <NoticeImg src={notice.noticeImageUrl} alt='공지사항 첨부 이미지' />
                                    </div>
                                    : <></>
                                }
                            </ExpandedContent>
                        )}
                    </TableRow>
                ))}
            </Table>
            {pageInfo.startPage !== pageInfo.maxPage ? (
            <>
            <Pagination
                pageInfo={pageInfo}
                onPageChange={(page) => setPageInfo({ ...pageInfo, currentPage: page })}
            />
            </>) : <></>

            }
        </Container>

    );
};

export default NoticeList;