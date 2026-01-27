import { useEffect, useState } from "react";
import {
    Container,
    SectionTitle,
    CategorySection,
    TagContainer,
    Tag,
    ReviewSection,
    ReviewHeader,
    SortDropdownContainer,
    SortDropdown,
    SortDropdownMenu,
    SortOption,
    WriteButton,
    ReviewGrid,
    ReviewCard,
    CardImageArea,
    CardImage,
    CardCategory,
    CardContent,
    CardTitleRow,
    CardTitle,
    CardStats,
    StatItem,
    CardDescription,
    CardFooter,
    Author,
    AuthorAvatar,
    ReadMoreButton,
    PaginationWrapper,
    SearchInput,
    SearchButton,
    Icon,
    PaginationContainer,
    SearchContainer,
    LeftSpacer,
    BackgroundImg
} from "./ReviewList.style";
import Pagination from "../common/Paging/Pagination";
import { ChevronDown, ChevronRight, ThumbsUp, Eye, Search, Image } from "lucide-react";
import axios from "axios";
import { publicInstance } from "../api/reqService";

// 카드 이미지 경로 - 나중에 실제 이미지로 교체
const CARD_PLACEHOLDER = "../../../public/card.png";

const ReviewList = () => {
    const [activeTag, setActiveTag] = useState(null);
    const [sortOpen, setSortOpen] = useState(false);
    const [sortBy, setSortBy] = useState("최신순");
    const [orderBy, setOrderBy] = useState("createDate");
    const [keyword, setKeyword] = useState("");
    const [isSearched, setIsSearched] = useState(false);
    const [pageInfo, setPageInfo] = useState({
        currentPage: 1,
        startPage: 1,
        endPage: 5,
        maxPage: 10,
    });
    const [tags, setTags] = useState([]);
    const [tagNo, setTagNo] = useState(0);

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        publicInstance.get(`/api/global/tags`)
            .then((res) => {
                setTags(res.data.data);
            }).catch((err) => {
                console.error(err);
            })
    }, []);

    useEffect(() => {

        publicInstance.get(`/api/reviews?page=${pageInfo.currentPage}&order=${orderBy}&keyword=${keyword}&tagNo=${tagNo}`)
            .then((res) => {
                console.log(res.data.data);
                setPageInfo({
                    currentPage: res.data.data.pageInfo.currentPage,
                    startPage: res.data.data.pageInfo.startPage,
                    endPage: res.data.data.pageInfo.endPage,
                    maxPage: res.data.data.pageInfo.maxPage
                });
                setReviews(res.data.data.reviews);
            }).catch((err) => {
                console.error(err);
            })

        setIsSearched(false);

    }, [pageInfo.currentPage, orderBy, isSearched, tagNo]);

    const ICONS = {
        user: "../../../public/user.png",
    };



    const handleSortSelect = (option) => {
        setSortBy(option);
        if (option === "최신순") {
            setOrderBy("createDate");
        } else if (option === "좋아요순") {
            setOrderBy("likes");
        }

        setSortOpen(false);
    };

    const handleActiveTag = (e) => {
        setActiveTag(activeTag === e ? null : e);
        setTagNo(activeTag === e ? 0 : e.tagNo);
    }

    return (
        <Container>
            <CategorySection>
                <SectionTitle>카테고리</SectionTitle>
                <TagContainer>
                    {Array.isArray(tags) && tags.map((tag, index) => (
                        <Tag
                            key={index}
                            $active={activeTag === tag}
                            onClick={() => handleActiveTag(tag)}
                            data-tooltip={tag.tagContent || "설명이 없습니다."}
                        >
                            #{tag.tagTitle}
                        </Tag>
                    ))}
                </TagContainer>
            </CategorySection>

            <ReviewSection>
                <SectionTitle>리뷰 목록</SectionTitle>
                <ReviewHeader>
                    <SortDropdownContainer>
                        <SortDropdown onClick={() => setSortOpen(!sortOpen)}>
                            {sortBy} <ChevronDown size={16} />
                        </SortDropdown>
                        <SortDropdownMenu $open={sortOpen}>
                            <SortOption $active={sortBy === "최신순"} onClick={() => handleSortSelect("최신순")}>
                                최신순
                            </SortOption>
                            <SortOption $active={sortBy === "좋아요순"} onClick={() => handleSortSelect("좋아요순")}>
                                좋아요순
                            </SortOption>
                        </SortDropdownMenu>
                    </SortDropdownContainer>
                    <WriteButton>글쓰기</WriteButton>
                </ReviewHeader>

                <ReviewGrid>
                    {reviews[0] !== undefined ? reviews.map((review, index) => (
                        <ReviewCard key={index} onClick={() => alert(`${review.reviewNo}번 페이지 로 이동`)}>
                            <CardImageArea>
                                <CardImage src={review.reviewImages[0] === undefined ? CARD_PLACEHOLDER : review.reviewImages[0].changeName} alt={review.reviewTitle} />
                                <CardCategory>#{review.tags[0] === undefined ? '태그없음' : review.tags[0].tagTitle}</CardCategory>
                            </CardImageArea>
                            <CardContent>
                                <CardTitleRow>
                                    <CardTitle>{review.reviewTitle}</CardTitle>
                                    <CardStats>
                                        <StatItem>
                                            <ThumbsUp size={14} /> {review.likes}
                                        </StatItem>
                                        <StatItem>
                                            <Eye size={14} /> {review.viewCount}
                                        </StatItem>
                                    </CardStats>
                                </CardTitleRow>
                                <CardDescription>{review.reviewContent}</CardDescription>
                                <CardFooter>
                                    <Author>
                                        <AuthorAvatar>
                                            <Icon src={review.profileImage || ICONS.user} alt="" />
                                        </AuthorAvatar>
                                        {review.reviewWriter !== null ? review.reviewWriter : '탈퇴유저'}
                                    </Author>
                                </CardFooter>
                            </CardContent>
                        </ReviewCard>
                    )) : (<>
                        <LeftSpacer />
                        <BackgroundImg src="../../../public/logo.png" alt="foodReport로고" />
                        <br />
                        <LeftSpacer />
                        <SectionTitle>게시글이 존재하지 않습니다.</SectionTitle>
                    </>
                    )
                    }
                </ReviewGrid>

                {reviews[0] !== undefined ?
                    (<PaginationWrapper>
                        <LeftSpacer />
                        <PaginationContainer>
                            <Pagination
                                pageInfo={pageInfo}
                                onPageChange={(page) => setPageInfo({ ...pageInfo, currentPage: page })}
                            />
                        </PaginationContainer>
                        <SearchContainer>
                            <SearchInput>
                                <SearchButton onClick={() => setIsSearched(true)}>
                                    <Search size={16} color="#9ca3af" />
                                </SearchButton>
                                <input type="text" onChange={(e) => setKeyword(e.target.value)} value={keyword} placeholder="검색어를 입력하세요" />
                            </SearchInput>
                        </SearchContainer>
                    </PaginationWrapper>) : <PaginationWrapper>
                        <LeftSpacer />
                        <LeftSpacer />
                        <SearchContainer>
                            <SearchInput>
                                <SearchButton onClick={() => setIsSearched(true)}>
                                    <Search size={16} color="#9ca3af" />
                                </SearchButton>
                                <input type="text" onChange={(e) => setKeyword(e.target.value)} value={keyword} placeholder="검색어를 입력하세요" />
                            </SearchInput>
                        </SearchContainer>
                        </PaginationWrapper>
                }
            </ReviewSection>
        </Container>
    );

}

export default ReviewList;