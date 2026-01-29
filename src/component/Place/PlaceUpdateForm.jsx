import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Image as ImageIcon, X, Bold, Italic, Underline, List, ListOrdered, AlignLeft, AlignCenter, AlignRight, Home, ChevronRight } from 'lucide-react';
import {
  Container, FormTitle, FormGroup, Label, Input, EditorContainer, Toolbar,
  ToolbarButton, TextArea, ImageSection, ImageGrid, ImageWrapper,
  RemoveImageButton, UploadPlaceholder, TagSection, TagGroup, Tag,
  ButtonGroup, SubmitButton, CancelButton,
  Breadcrumb
} from './PlaceUpdateForm.style.js';

const PlaceUpdateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 상태 관리
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]); // 서버 전송용 신규 File 객체
  const [previews, setPreviews] = useState([]); // 화면 표시용 URL (기존 + 신규)
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');

  const hashtags = ['#염도_최적화', '#자극치_풀로드', '#제로_스트레스', '#단짠_알고리즘', '#풍미_딥러닝', '#가성비_오버클럭', '#삼삼한_입맛', '#삼중_감동', '#성공확률_100'];
  const regions = ['서울', '경기', '강원', '충북', '충남', '경북', '경남', '전북', '전남', '부산', '인천', '대전', '대구', '광주', '울산', '제주'];

  // 기존 장소 데이터 로드
  useEffect(() => {
    const fetchPlaceData = async () => {
      try {
        const res = await axios.get(`/api/places/${id}`);
        const { title, content, imageUrls, tags, region } = res.data;
        setTitle(title);
        setContent(content);
        setPreviews(imageUrls || []);
        setSelectedTags(tags || []);
        setSelectedRegion(region || '');
      } catch (err) {
        console.error("데이터 로드 실패", err);
      }
    };
    fetchPlaceData();
  }, [id]);

  // 이미지 변경 핸들러
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(prev => [...prev, ...files]);

    const newPreviews = files.map(file => URL.createObjectURL(file));
    setPreviews(prev => [...prev, ...newPreviews]);
  };

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    setPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpdateSubmit = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('region', selectedRegion);
    formData.append('tags', JSON.stringify(selectedTags));
    images.forEach(file => formData.append('images', file));

  };

  return (
    <Container>
            <Breadcrumb>
                <div className="link-item" onClick={() => navi('/')}>
                    <Home size={14} />
                </div>
                <ChevronRight size={12} />
                <div className="link-item" onClick={() => navi('/places')}>
                    맛집 목록
                </div>
                <ChevronRight size={12} />
                <span>맛집 수정</span>
            </Breadcrumb>

      <FormTitle>맛집 정보 수정</FormTitle>

      <FormGroup>
        <Label>제목</Label>
        <Input 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="제목을 입력해주세요." 
        />
      </FormGroup>

      <FormGroup>
        <Label>내용</Label>
        <EditorContainer>
          <Toolbar>

            <ToolbarButton as="label">
              <ImageIcon size={18} />
              <input type="file" multiple hidden onChange={handleImageChange} />
            </ToolbarButton>
            </Toolbar>
          <TextArea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            placeholder="장소에 대한 설명을 입력해주세요." 
          />
        </EditorContainer>
      </FormGroup>

      <ImageSection>
        <Label style={{ textAlign: 'center', marginBottom: '20px' }}>이미지 미리보기</Label>
        <ImageGrid>
          {previews.map((src, index) => (
            <ImageWrapper key={index}>
              <img src={src} alt="preview" />
              <RemoveImageButton onClick={() => removeImage(index)}><X size={14} /></RemoveImageButton>
            </ImageWrapper>
          ))}
          <UploadPlaceholder as="label">
            <input type="file" multiple hidden onChange={handleImageChange} />
            <ImageIcon size={24} />
            <span>사진 추가</span>
          </UploadPlaceholder>
        </ImageGrid>
      </ImageSection>

      <TagSection>
        <TagGroup>
          {hashtags.map(tag => (
            <Tag 
              key={tag} 
              $active={selectedTags.includes(tag)}
              onClick={() => setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])}
            >
              {tag}
            </Tag>
          ))}
        </TagGroup>
        <TagGroup>
          {regions.map(region => (
            <Tag 
              key={region} 
              $active={selectedRegion === region}
              onClick={() => setSelectedRegion(region)}
            >
              {region}
            </Tag>
          ))}
        </TagGroup>
      </TagSection>

      <ButtonGroup>
        <SubmitButton onClick={handleUpdateSubmit}>수정 완료</SubmitButton>
        <CancelButton onClick={() => navigate(-1)}>취소</CancelButton>
      </ButtonGroup>
    </Container>
  );
};

export default PlaceUpdateForm;