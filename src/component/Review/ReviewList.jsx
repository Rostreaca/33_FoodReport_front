import { useState } from "react";
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
    LeftSpacer
} from "./ReviewList.style";
import Pagination from "../common/Paging/Pagination";

// 이미지 경로 - 나중에 실제 이미지로 교체
const ICONS = {
    chevronDown: "../../../public/under2-icon.png",
    chevronRight: "../../../public/under-button.png",
    thumbsUp: "../../../public/good.png",
    eye: "../../../public/viewcount.png",
    user: "../../../public/user.png",
    search: "../../../public/Search-Icon.png",
};

// 카드 이미지 경로 - 나중에 실제 이미지로 교체
const CARD_PLACEHOLDER = "../../../public/card.png";

const ReviewList = () => {
    const [activeTag, setActiveTag] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOpen, setSortOpen] = useState(false);
    const [sortBy, setSortBy] = useState("최신순");

    const categories = [
        "#캠도_리믹싱",
        "#지구기_플로트",
        "#패트로_스트라스",
        "#디만_알고리즘",
        "#플미_딥러닝",
        "#카이어니_모바일학",
        "#워크콘_무결성",
        "#만수_플솝션",
        "#삼삼전_모인",
        "#길라솦록_정식",
    ];

    const reviews = Array(9).fill({
        category: "카테고리",
        title: "맛집 이름",
        description: "맛집 소개 한줄 요약",
        author: "브라이언 나이트",
        likes: 77,
        views: 124,
    });

    const pageInfo = {
        currentPage: 1,
        startPage: 1,
        endPage: 5,
        maxPage: 10,
    }

    const handleSortSelect = (option) => {
        setSortBy(option);
        setSortOpen(false);
    };

    return (
        <Container>
            <CategorySection>
                <SectionTitle>카테고리</SectionTitle>
                <TagContainer>
                    {categories.map((tag, index) => (
                        <Tag
                            key={index}
                            $active={activeTag === tag}
                            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                        >
                            {tag}
                        </Tag>
                    ))}
                </TagContainer>
            </CategorySection>

            <ReviewSection>
                <SectionTitle>리뷰</SectionTitle>
                <ReviewHeader>
                    <SortDropdownContainer>
                        <SortDropdown onClick={() => setSortOpen(!sortOpen)}>
                            {sortBy} <Icon src={ICONS.chevronDown} alt="" $size={16} />
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
                    {reviews.map((review, index) => (
                        <ReviewCard key={index}>
                            <CardImageArea>
                                <CardImage src={CARD_PLACEHOLDER} alt={review.title} />
                                <CardCategory>{review.category}</CardCategory>
                            </CardImageArea>
                            <CardContent>
                                <CardTitleRow>
                                    <CardTitle>{review.title}</CardTitle>
                                    <CardStats>
                                        <StatItem>
                                            <Icon src={ICONS.thumbsUp} alt="" $size={14} /> {review.likes}
                                        </StatItem>
                                        <StatItem>
                                            <Icon src={ICONS.eye} alt="" $size={14} /> {review.views}
                                        </StatItem>
                                    </CardStats>
                                </CardTitleRow>
                                <CardDescription>{review.description}</CardDescription>
                                <CardFooter>
                                    <Author>
                                        <AuthorAvatar>
                                            <Icon src={ICONS.user} alt="" $size={16} />
                                        </AuthorAvatar>
                                        {review.author}
                                    </Author>
                                    <ReadMoreButton>
                                        더 읽기 <Icon src={ICONS.chevronRight} alt="" $size={14} />
                                    </ReadMoreButton>
                                </CardFooter>
                            </CardContent>
                        </ReviewCard>
                    ))}
                </ReviewGrid>

                <PaginationWrapper>
                    <LeftSpacer />
                    <PaginationContainer>
                    <Pagination 
                        pageInfo={pageInfo}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                    </PaginationContainer>
                    <SearchContainer>
                    <SearchInput>
                        <SearchButton onClick={() => alert('검색')}>
                            <Icon src={ICONS.search} alt="" $size={16} />
                        </SearchButton>
                        <input type="text" placeholder="검색어를 입력하세요" />
                    </SearchInput>
                    </SearchContainer>
                </PaginationWrapper>
            </ReviewSection>
        </Container>
    );

}

export default ReviewList;