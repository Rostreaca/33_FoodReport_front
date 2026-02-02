import React, { useEffect, useState } from 'react';
import { Eye, ThumbsUp, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import {
  Container,
  SectionTitle,
  ListWrapper,
  CardContainer,
  ImagePlaceholder,
  CardContent,
  CardTitle,
  CardSummary,
  CardFooter,
  UserInfo,
  UserAvatar,
  Stats,
  MoreButton,
  Divider,
  TagContainer,
  Tag,
  CategorySection,
  BackgroundImg,
  BackgroundImgLayout
} from './SearchList.style.js';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { publicInstance } from '../api/reqService.js';

const SearchList = () => {
  // 선택 상태 관리를 위한 state (예시)
  const navi = useNavigate();
  const [activeTag, setActiveTag] = useState(null);
  const [activeRegion, setActiveRegion] = useState('전체');
  const [tags, setTags] = useState([]);
  const [tagNo, setTagNo] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [reviewPage, setReviewPage] = useState(1);  
  const [placePage, setPlacePage] = useState(1);

  const [reviews, setReviews] = useState([]);
  const [places, setPlaces] = useState([]);

  const [reviewPageInfo, setReviewPageInfo] = useState({});
  const [placePageInfo, setPlacePageInfo] = useState({});

  const [searchParam] = useSearchParams();

  const regions = [
    '전체', '서울', '경기', '강원', '충북', '충남', '경북', '경남', '전북', '전남', '부산', '인천', '대전', '대구', '광주', '울산', '제주'
  ];

  useEffect(() => {

    publicInstance.get(`/api/global/tags`)
      .then((res) => {
        setTags(res.data.data);
      }).catch((err) => {
        console.error(err);
      })
  }, []);

  useEffect(() => {
    setKeyword(searchParam.get('query'));
    setPlaces([]);
    setReviews([]);
    setPlacePage(1);
    setReviewPage(1);
  },[searchParam])

  useEffect(() => {
    findAllPlaces();

  },[tagNo, placePage, keyword])

  useEffect(() => {
    findAllReviews();

  },[tagNo, reviewPage, keyword])

  const findAllReviews = () => {
        publicInstance.get(`/api/global/searchReviews?keyword=${keyword}&page=${reviewPage}&tagNo=${tagNo}`)
            .then((res) => {
                console.log(res);
                setReviews([...reviews, ...res.data.data.reviews]);
                setReviewPageInfo(res.data.data.pageInfo);
            }).catch((err) => {
                console.error(err);
            })
    }
    const findAllPlaces = () => {
        publicInstance.get(`/api/global/searchPlaces?keyword=${keyword}&page=${placePage}&tagNo=${tagNo}`)
            .then((res) => {
                console.log(res);
                setPlaces([...places,...res.data.data.places]);
                setPlacePageInfo(res.data.data.pageInfo);
            }).catch((err) => {
                console.error(err);
            })
    }

  const handleActiveTag = (e) => {
    setActiveTag(activeTag === e ? null : e);
    setTagNo(activeTag === e ? 0 : e.tagNo);

    setReviews([]);
    setReviewPage(1);

    setPlaces([]);
    setPlacePage(1);
  }

  const handleReviewPage = () => {
        reviewPageInfo.currentPage !== reviewPageInfo.maxPage ?
        setReviewPage(reviewPage+1) : (
          setReviews([]),
          setReviewPage(1)
        )
  }

  const handlePlacePage = () => {

        placePageInfo.currentPage !== placePageInfo.maxPage ?
        setPlacePage(placePage+1) : (
          setPlaces([]),
          setPlacePage(1)
        )
    
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

      {/* 이하 리뷰 목록 및 추천 목록 생략 */}

      {/* 리뷰 목록 */}
      <SectionTitle>리뷰 목록</SectionTitle>
      <ListWrapper>
        {reviews != null && reviews.map((review) => (
          <CardContainer key={review.reviewNo} onClick={() => navi(`/reviews/${review.reviewNo}`)}>
            <ImagePlaceholder><img src={review?.reviewImages?.[0]?.changeName || "/card.png" } /></ImagePlaceholder>
            <CardContent>
              <CardTitle>{review.reviewTitle}</CardTitle>
              <CardSummary>{review.reviewContent}</CardSummary>
              <CardFooter>
                <UserInfo>
                  <UserAvatar src={review.profileImage || "/user.png"} alt="user" />
                  <div>
                    <div className="username">{review.reviewWriter}</div>
                    <div className="time">{Date.now() - new Date(review.createDate) < (24 * 60 * 60 * 1000 * 30)? Math.floor((new Date(Date.now()) - new Date(review.createDate)) /(24 * 60 * 60 * 1000)) +"일 전": review.createDate?.split('T')[0]}</div>
                  </div>
                </UserInfo>
                <Stats>
                  <span><Eye size={16} /> {review.viewCount}</span>
                  <span><ThumbsUp size={16} /> {review.likes}</span>
                </Stats>
              </CardFooter>
            </CardContent>
          </CardContainer>
        ))}
      </ListWrapper>
      {
        reviews?.length > 0 ?
        reviewPageInfo.currentPage !== reviewPageInfo.maxPage ?
      <MoreButton onClick={() => handleReviewPage()}>더 불러오기 <ChevronDown size={16} /></MoreButton>
      :(
        reviewPageInfo.maxPage !== 1 ?
      <MoreButton onClick={() => handleReviewPage()}>한 번에 접기 <ChevronUp size={16} /></MoreButton>
      : <></>
      )
      : <BackgroundImgLayout>
          <BackgroundImg src='/logo.png'/>
          <h2>게시글이 존재하지 않습니다.</h2>
        </BackgroundImgLayout>
      }
      <Divider />

      {/* 추천 맛집 목록 */}
      <SectionTitle>추천 맛집 목록</SectionTitle>
      <ListWrapper>
        {places != null && places.map((place) => (
          <CardContainer key={place.placeNo} onClick={() => navi(`/places/${place.placeNo}`)}>
            <ImagePlaceholder><img src={place?.placeImages?.[0]?.changeName || "/card.png" } /></ImagePlaceholder>
            <CardContent>
              <CardTitle>{place.placeTitle}</CardTitle>
              <CardSummary>{place.placeContent}</CardSummary>
              <CardFooter>
                <UserInfo>
                  <UserAvatar src={place.profileImage || "/user.png"} alt="user" />
                  <div>
                    <div className="username">{place.placeWriter}</div>
                    <div className="time">{Date.now() - new Date(place.createDate) < (24 * 60 * 60 * 1000 * 30)? Math.floor((new Date(Date.now()) - new Date(place.createDate)) /(24 * 60 * 60 * 1000)) +"일 전": place.createDate?.split('T')[0]}</div>
                  </div>
                </UserInfo>
                <Stats>
                  <span><Eye size={16} /> {place.viewCount}</span>
                  <span><ThumbsUp size={16} /> {place.likes}</span>
                </Stats>
              </CardFooter>
            </CardContent>
          </CardContainer>
        ))}
      </ListWrapper>
      
      {
        places?.length > 0 ?
      placePageInfo.currentPage !== placePageInfo.maxPage?
      <MoreButton onClick={() => handlePlacePage()}>더 불러오기 <ChevronDown size={16} /></MoreButton>
      : (
        placePageInfo.maxPage !== 1 ?
      <MoreButton onClick={() => handlePlacePage()}>한 번에 접기 <ChevronUp size={16} /></MoreButton>
      : <></>
      )
      : <BackgroundImgLayout>
          <BackgroundImg src='/logo.png'/>
          <h2>게시글이 존재하지 않습니다.</h2>
        </BackgroundImgLayout>
      }
    </Container>
  );
};

export default SearchList;