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
    NoticeImg,
    NonContentArea,
    BackgroundImg
} from './NoticeList.style.js';
import Pagination from '../common/Paging/Pagination.jsx';
import { publicInstance } from '../api/reqService.js';

const NoticeList = () => {
    const [openId, setOpenId] = useState();
    const [notices, setNotices] = useState([]);


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

                {notices?.length > 0 ? notices.map((notice, index) => (
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
                )) : <TableRow>
                    <NonContentArea>
                        <BackgroundImg src='/logo.png'/>
                        <h2>공지사항이 존재하지 않습니다.</h2>
                    </NonContentArea>
                    </TableRow>}
            </Table>
            {notices?.length > 0 && pageInfo.startPage !== pageInfo.maxPage ? (
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