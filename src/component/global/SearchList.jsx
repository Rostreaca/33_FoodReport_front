import React, { useState } from 'react';
import { Eye, ThumbsUp, MessageSquare, ChevronDown } from 'lucide-react';
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
  CategorySection
} from './SearchList.style.js';

const SearchList = () => {
  // 선택 상태 관리를 위한 state (예시)
  const [selectedHash, setSelectedHash] = useState('#단짠_알고리즘');
  const [selectedRegion, setSelectedRegion] = useState('전체');
  
  // 데이터 구조를 tagTitle과 tagContent로 맞춤
  const hashtags = [
    { tagTitle: '염도_최적화', tagContent: '적절한 간의 밸런스를 찾아서' },
    { tagTitle: '자극치_풀로드', tagContent: '강렬한 맛의 향연' },
    { tagTitle: '제로_스트레스', tagContent: '먹는 순간 스트레스 해소!' },
    { tagTitle: '단짠_알고리즘', tagContent: '멈출 수 없는 단짠의 조화' },
    { tagTitle: '풍미_딥러닝', tagContent: '깊고 진한 풍미의 세계' },
    { tagTitle: '가성비_오버클럭', tagContent: '가격 대비 성능 끝판왕' },
  ];

  const regions = [
    '전체', '서울', '경기', '강원', '충북', '충남', '경북', '경남', '전북', '전남', '부산', '인천', '대전', '대구', '광주', '울산', '제주'
  ];

  const reviewData = [
    { id: 1, title: '서울역 근방 최고 인기 고깃집', summary: '리뷰 세 줄 요약입니다.' },
    { id: 2, title: '고깃집은 역시 OOO', summary: '리뷰 세 줄 요약입니다.' },
    { id: 3, title: '최근 가본 고깃집 OOO 서비스 좋네요', summary: '리뷰 세 줄 요약입니다.' },
  ];

  return (
    <Container>
      <CategorySection>
        <SectionTitle>카테고리</SectionTitle>
        <TagContainer>
          {hashtags.map((tag, index) => (
            <Tag
              key={index}
              $active={selectedHash === `#${tag.tagTitle}`}
              onClick={() => setSelectedHash(`#${tag.tagTitle}`)}
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
        {reviewData.map((item) => (
          <CardContainer key={item.id}>
            <ImagePlaceholder><span>Placeholder</span></ImagePlaceholder>
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              <CardSummary>{item.summary}</CardSummary>
              <CardFooter>
                <UserInfo>
                  <UserAvatar src="https://via.placeholder.com/32" alt="user" />
                  <div>
                    <div className="username">tteokbokkiyum</div>
                    <div className="time">12시간 전</div>
                  </div>
                </UserInfo>
                <Stats>
                  <span><Eye size={16} /> 35</span>
                  <span><ThumbsUp size={16} /> 35</span>
                  <span><MessageSquare size={16} /> 4</span>
                </Stats>
              </CardFooter>
            </CardContent>
          </CardContainer>
        ))}
      </ListWrapper>
      <MoreButton>더 불러오기 <ChevronDown size={16} /></MoreButton>

      <Divider />

      {/* 추천 맛집 목록 */}
      <SectionTitle>추천 맛집 목록</SectionTitle>
      <ListWrapper>
        {reviewData.map((item, index) => (
          <CardContainer key={`recommend-${item.id}`}>
            <ImagePlaceholder><span>Placeholder</span></ImagePlaceholder>
            <CardContent>
              <CardTitle>{index === 2 ? "시원한 냉면 같이 파는 고깃집입니다~" : item.title}</CardTitle>
              <CardSummary>{item.summary}</CardSummary>
              <CardFooter>
                <UserInfo>
                  <UserAvatar src="https://via.placeholder.com/32" alt="user" />
                  <div>
                    <div className="username">tteokbokkiyum</div>
                    <div className="time">12시간 전</div>
                  </div>
                </UserInfo>
                <Stats>
                  <span><Eye size={16} /> 35</span>
                  <span><ThumbsUp size={16} /> 35</span>
                  <span><MessageSquare size={16} /> 4</span>
                </Stats>
              </CardFooter>
            </CardContent>
          </CardContainer>
        ))}
      </ListWrapper>
      <MoreButton>더 불러오기 <ChevronDown size={16} /></MoreButton>
    </Container>
  );
};

export default SearchList;