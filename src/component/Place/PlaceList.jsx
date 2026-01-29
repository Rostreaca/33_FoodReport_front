import { useEffect, useState } from "react";
import {
    Container,
    SectionTitle,
    CategorySection,
    TagContainer,
    Tag,
    PlaceSection,
    PlaceHeader,
    SortDropdownContainer,
    SortDropdown,
    SortDropdownMenu,
    SortOption,
    WriteButton,
    PlaceGrid,
    PlaceCard,
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
} from "./PlaceList.style";
import Pagination from "../common/Paging/Pagination";
import { ChevronDown, ChevronRight, ThumbsUp, Eye, Search, Image } from "lucide-react";
import axios from "axios";
import { publicInstance } from "../api/reqService";
import { useNavigate } from "react-router-dom";

// 카드 이미지 경로 - 나중에 실제 이미지로 교체
const CARD_PLACEHOLDER = "../../public/card.png";

const PlaceList = () => {

    const navi = useNavigate();
    const [activeTag, setActiveTag] = useState(null);
    const [sortOpen, setSortOpen] = useState(false);
    const [sortBy, setSortBy] = useState("최신순");
    const [orderBy, setOrderBy] = useState("createDate");
    const [keyword, setKeyword] = useState("");
    const [pageInfo, setPageInfo] = useState({
        currentPage: 1,
        startPage: 1,
        endPage: 5,
        maxPage: 10,
    });
    const [tags, setTags] = useState([]);
    const [tagNo, setTagNo] = useState(0);

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        publicInstance.get(`/api/global/tags`)
            .then((res) => {
                setTags(res.data.data);
            }).catch((err) => {
                console.error(err);
            })
    }, []);

    const findAllPlaces = () => {
        publicInstance.get(`/api/places?page=${pageInfo.currentPage}&order=${orderBy}&keyword=${keyword}&tagNo=${tagNo}`)
            .then((res) => {
                setPageInfo({
                    currentPage: res.data.data.pageInfo.currentPage,
                    startPage: res.data.data.pageInfo.startPage,
                    endPage: res.data.data.pageInfo.endPage,
                    maxPage: res.data.data.pageInfo.maxPage
                });
                setPlaces(res.data.data.places);
            }).catch((err) => {
                console.error(err);
            })
    }

    useEffect(() => {
        findAllPlaces();
    }, [pageInfo.currentPage, orderBy, tagNo]);

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

            <PlaceSection>
                <SectionTitle>추천 맛집</SectionTitle>
                <PlaceHeader>
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
                </PlaceHeader>

                <PlaceGrid>
                    {places[0] !== undefined ? places.map((place, index) => (
                        <PlaceCard key={index} onClick={() => navi(`/places/${place.placeNo}`)}>
                            <CardImageArea>
                                <CardImage src={place.placeImages[0] === undefined ? CARD_PLACEHOLDER : place.placeImages[0].changeName} alt={place.placeTitle} />
                                <CardCategory>#{place.tags[0] === undefined ? '태그없음' : place.tags[0].tagTitle}</CardCategory>
                            </CardImageArea>
                            <CardContent>
                                <CardTitleRow>
                                    <CardTitle>{place.placeTitle}</CardTitle>
                                    <CardStats>
                                        <StatItem>
                                            <ThumbsUp size={14} /> {place.likes}
                                        </StatItem>
                                        <StatItem>
                                            <Eye size={14} /> {place.viewCount}
                                        </StatItem>
                                    </CardStats>
                                </CardTitleRow>
                                <CardDescription>{place.placeContent}</CardDescription>
                                <CardFooter>
                                    <Author>
                                        <AuthorAvatar>
                                            <Icon src={place.profileImage || ICONS.user} alt="" />
                                        </AuthorAvatar>
                                        {place.placeWriter !== null ? place.placeWriter : '탈퇴유저'}
                                    </Author>
                                </CardFooter>
                            </CardContent>
                        </PlaceCard>
                    )) : (<>
                        <LeftSpacer />
                        <BackgroundImg src="../../../public/logo.png" alt="foodReport로고" />
                        <br />
                        <LeftSpacer />
                        <SectionTitle>게시글이 존재하지 않습니다.</SectionTitle>
                    </>
                    )
                    }
                </PlaceGrid>

                {places[0] !== undefined ?
                    (<PaginationWrapper>
                        <LeftSpacer />
                        { pageInfo.startPage !== pageInfo.maxPage ?
                        <PaginationContainer>
                            <Pagination
                                pageInfo={pageInfo}
                                onPageChange={(page) => setPageInfo({ ...pageInfo, currentPage: page })}
                            />
                        </PaginationContainer>
                        :
                        <LeftSpacer />
                        }
                        <SearchContainer>
                            <SearchInput>
                                <SearchButton onClick={() => findAllPlaces()}>
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
                                <SearchButton onClick={() => findAllPlaces()}>
                                    <Search size={16} color="#9ca3af" />
                                </SearchButton>
                                <input type="text" onChange={(e) => setKeyword(e.target.value)} value={keyword} placeholder="검색어를 입력하세요" />
                            </SearchInput>
                        </SearchContainer>
                        </PaginationWrapper>
                }
            </PlaceSection>
        </Container>
    );

}

export default PlaceList;