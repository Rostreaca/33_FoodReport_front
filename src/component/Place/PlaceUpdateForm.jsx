import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Image as ImageIcon, X , Home, ChevronRight } from 'lucide-react';
import {
  Container, FormTitle, FormGroup, Label, Input, EditorContainer, Toolbar,
  ToolbarButton, TextArea, ImageSection, ImageGrid, ImageWrapper,
  RemoveImageButton, UploadPlaceholder, Tag,
  ButtonGroup, SubmitButton, CancelButton,
  Breadcrumb,
  TagContainer,
  SectionTitle,
  Region,
  CategorySection
} from './PlaceUpdateForm.style.js';
import { authInstance, publicInstance } from '../api/reqService.js';
import Toast from '../common/Toast/Toast.jsx';

const PlaceUpdateForm = () => {
  const { placeNo } = useParams();

  const navi = useNavigate();

  // 상태 관리
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [activeTag, setActiveTag] = useState([]);
  const [activeRegion, setActiveRegion] = useState(null);

  const [tags, setTags] = useState([]);

  const [regions, setRegions] = useState([]);

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "error",
  });

  useEffect(() => {

    publicInstance.get(`/api/places/${placeNo}`)
        .then((res) => {
          setTitle(res.data.data.placeTitle);
          setContent(res.data.data.placeContent);
          setImages(res.data.data.placeImages);
          setActiveRegion(res.data.data.region);
          res.data.data.placeImages.map(image => setPreviews([...previews, image.changeName]));
          res.data.data.tags.map(tag => setActiveTag([...activeTag, tag]));
        }).catch((err) => {
          navi('/errorpage', {state : { code: err.response.data.status , message : err.response.data.message} });
        })


        publicInstance.get(`/api/global/tags`)
            .then((res) => {
                setTags(res.data.data);
            }).catch((err) => {
                navi('/errorpage', {state : { code: err.response.data.status , message : err.response.data.message} });
            })

        publicInstance.get(`/api/global/regions`)
            .then((res) => {
                setRegions(res.data.data);
            }).catch((err) => {
                navi('/errorpage', {state : { code: err.response.data.status , message : err.response.data.message} });
            })
    

  }, []);

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

  const handleUpdateSubmit = () => {

    if(title.trim() === '' ){
      showToast('제목을 작성해주십시오.');
      return;
    }

    if(content.trim() === ''){
      showToast('내용을 작성해주십시오.');
      return;
    }


    const formData = new FormData();
    formData.append('placeTitle', title);
    formData.append('placeContent', content);
    formData.append('regionNo', activeRegion.regionNo);
    activeTag.forEach(tag => formData.append('tagNums', tag.tagNo) );
    images.forEach(file => formData.append('images', file));

    authInstance.put(`/api/places/${placeNo}`, formData, {
      headers : {
        "Content-Type" : "multipart/form-data"
      }
    })
    .then((res) => {
      navi('/places');
    }).catch((err) => {
      navi('/errorpage', {state : { code: err.response.data.status , message : err.response.data.message} });
    })

  };

    const handleActiveTag = (e) => {
        setActiveTag(activeTag.includes(e) ? activeTag.filter((tag) => { return tag != e }) : [...activeTag, e]);
    }

    const handleActiveRegion = (e) => {
        setActiveRegion(activeRegion === e ? null : e);
    }

    const showToast = (message, type = "error") => {
    setToast({ show: true, message, type });
  };

  return (
    <Container>
            {toast.show && (
              <Toast
                message={toast.message}
                type={toast.type}
                duration={2000}
                onClose={() => setToast({ ...toast, show: false })}
              />
            )}
            <Breadcrumb>
                <div className="link-item" onClick={() => navi('/')}>
                    <Home size={14} />
                </div>
                <ChevronRight size={12} />
                <div className="link-item" onClick={() => navi('/places')}>
                    추천 맛집
                </div>
                <ChevronRight size={12} />
                <span>맛집 수정</span>
            </Breadcrumb>

      <FormTitle>맛집 수정</FormTitle>

      <FormGroup>
        <Label>제목</Label>
        <Input 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="제목을 입력해주세요." 
          required
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
            required
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

            <CategorySection>
                <SectionTitle>해시태그</SectionTitle>
                <TagContainer>
                    {Array.isArray(tags) && tags.map((tag, index) => (
                        <Tag
                            key={index}
                            $active={activeTag.filter(active => (active.tagNo === tag.tagNo)).length > 0}
                            onClick={() => handleActiveTag(tag)}
                            data-tooltip={tag.tagContent || "설명이 없습니다."}
                        >
                            #{tag.tagTitle}
                        </Tag>
                    ))}
                </TagContainer>
                <SectionTitle>지역</SectionTitle>
                <TagContainer>
                    {Array.isArray(regions) && regions.map((region, index) => (
                        <Region
                            key={index}
                            $active={region?.regionNo === activeRegion?.regionNo}
                            onClick={() => handleActiveRegion(region)}
                        >
                            {region.regionName}
                        </Region>
                    ))}
                </TagContainer>
            </CategorySection>


      <ButtonGroup>
        <SubmitButton onClick={handleUpdateSubmit}>작성</SubmitButton>
        <CancelButton onClick={() => navi(-1)}>취소</CancelButton>
      </ButtonGroup>
    </Container>
  );
};

export default PlaceUpdateForm;