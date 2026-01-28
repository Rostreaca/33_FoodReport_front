import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Eye, Heart, MessageSquare, MoreHorizontal,
    Pencil, X, Image as ImageIcon, ChevronRight, Home
} from 'lucide-react';

import {
    Container, Breadcrumb, Card, Title, UserInfo, ContentText, ImageWrapper, PlaceImage, ButtonGroup, ActionBtn, Stats, CommentSection,
    CommentInputRow, OrangeBtn, CommentItem, CommentBody, DropdownMenu, DropdownItem,
    HeartButton,
    TagContainer,
    Tag
} from './PlaceDetail.style.js';
import { publicInstance } from '../api/reqService.js';
import { AuthContext } from '../context/AuthContext.jsx';

const PlaceDetail = () => {
    const { auth } = useContext(AuthContext);

    const { placeNo } = useParams();
    const navi = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [place, setPlace] = useState({});


    useEffect(() => {
        publicInstance.get(`/api/places/${placeNo}`)
            .then((res) => {
                setPlace(res.data.data);
            }).catch((err) => {
                navi('/errorpage', {state : { code: 404 , message : err.response.data.message} });
            })

    }, []);

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
                <span>상세 조회</span>
            </Breadcrumb>

            <Title style={{ marginBottom: '20px' }}>맛집 조회</Title>

            <Card>
                <Title>{place.placeTitle}</Title>
                <UserInfo>
                    <img src={place.profileImage || "../../../public/user.png"} alt="user" />
                    <div className="details">
                        <span>{place.placeWriter}</span>
                        <small>{Math.ceil((Date.now() - new Date(place.createDate)) / (24 * 60 * 60 * 1000))}일 전</small>
                    </div>
                </UserInfo>

                <ContentText>
                    {place.placeContent}
                </ContentText>

                {place?.placeImages?.length > 0 && (
                    <ImageWrapper>
                        {place.placeImages.map((image) => (
                            <PlaceImage key={image.imageNo} src={image?.changeName} alt="맛집 이미지" />
                        ))}
                    </ImageWrapper>
                )}

                {place?.tags?.length > 0 && (
                    <TagContainer>
                        {place.tags.map((tag) => (
                            <Tag key={tag.tagNo}>{tag?.tagTitle}</Tag>
                        ))}
                    </TagContainer>
                )}

                <ButtonGroup>
                    {auth.isAuthenticated? (
                        <>
                        <div>
                            <ActionBtn orange style={{ marginRight: '8px' }}>수정</ActionBtn>
                            <ActionBtn orange>삭제</ActionBtn>
                        </div>
                        <ActionBtn onClick={() => navi('/places')}>목록</ActionBtn>
                        </>
                    ) : (
                        <>
                        <div>
                        </div>
                        <ActionBtn onClick={() => navi('/places')}>목록</ActionBtn>
                        </>
                    )
                    }
                </ButtonGroup>

                <Stats>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Eye size={16} /> {place.viewCount}
                    </div>
                    {/* 메인 게시글: 좋아요 안 누른 상태 */}
                    <HeartButton active={false}>
                        <Heart /> {place.likes}
                    </HeartButton>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <MessageSquare size={16} /> {place.placeReplies?.length} 댓글
                    </div>
                </Stats>
            </Card>

            <CommentSection>
                <strong style={{ fontSize: '14px' }}>댓글 남기기</strong>
                <CommentInputRow>
                    { auth.isAuthenticated? 
                    <>
                    <input type="text" placeholder="댓글을 입력해주세요..." />
                    <OrangeBtn>댓글 등록</OrangeBtn>
                    </>
                    :
                    <input type="text" placeholder="댓글 작성은 로그인 후 진행해주시기 바랍니다." readOnly/>
                    }
                </CommentInputRow>

                {place.placeReplies?.length > 0 && place.placeReplies.map((reply) => (
                    <CommentItem key={reply.replyNo}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <UserInfo style={{ marginBottom: '5px' }}>
                                <img src={reply.profileImage || "../../../public/user.png"} alt="user" />
                                <div className="details">
                                    <span>{reply.replyWriter} <small style={{ fontWeight: 400, marginLeft: '5px' }}>{Math.ceil((Date.now() - new Date(reply.createDate)) / (24 * 60 * 60 * 1000))}일 전</small></span>
                                    <small>손님</small>
                                </div>
                            </UserInfo>
                            {auth.isAuthenticated ? (
                            <div style={{ position: 'relative' }}>
                                <MoreHorizontal
                                    size={20}
                                    style={{ cursor: 'pointer', color: '#adb5bd' }}
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                />
                                {isMenuOpen && (
                                    <DropdownMenu>
                                        <DropdownItem><Pencil /> 댓글 수정</DropdownItem>
                                        <DropdownItem><X /> 댓글 삭제</DropdownItem>
                                    </DropdownMenu>
                                )}
                            </div>
                            ): <></>}
                        </div>
                        <CommentBody>{reply.replyContent}</CommentBody>
                        <HeartButton active={true}>
                            <Heart /> {reply.likes}
                        </HeartButton>
                    </CommentItem>
                ))}
            </CommentSection>
        </Container>
    );
};

export default PlaceDetail;