import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Eye, Heart, MessageSquare, MoreHorizontal,
    Pencil, X, Image as ImageIcon, ChevronRight, Home
} from 'lucide-react';

import {
    Container, Breadcrumb, Card, Title, UserInfo, ContentText, ImageWrapper, ReviewImage, ButtonGroup, ActionBtn, Stats, CommentSection,
    CommentInputRow, OrangeBtn, CommentItem, CommentBody, DropdownMenu, DropdownItem,
    HeartButton
} from './ReviewDetail.style.js';
import { publicInstance } from '../api/reqService.js';

const ReviewDetail = () => {
    const { reviewNo } = useParams();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [review, setReview] = useState({});


    useEffect(() => {
        publicInstance.get(`/api/reviews/${reviewNo}`)
            .then((res) => {
                console.log(res);
                setReview(res.data.data);
            }).catch((err) => {
                console.error(err);
            })

    }, []);

    return (
        <Container>
            <Breadcrumb>
                <div className="link-item" onClick={() => navigate('/')}>
                    <Home size={14} />
                </div>
                <ChevronRight size={12} />
                <div className="link-item" onClick={() => navigate('/reviews')}>
                    리뷰 목록
                </div>
                <ChevronRight size={12} />
                <span>상세 조회</span>
            </Breadcrumb>

            <Title style={{ marginBottom: '20px' }}>리뷰 조회</Title>

            <Card>
                <Title>{review.reviewTitle}</Title>
                <UserInfo>
                    <img src={review.profileImage || "../../../public/user.png"} alt="user" />
                    <div className="details">
                        <span>{review.reviewWriter}</span>
                        <small>{Math.ceil((Date.now() - new Date(review.createDate)) / (24 * 60 * 60 * 1000))}일 전</small>
                    </div>
                </UserInfo>

                <ContentText>
                    {review.reviewContent}
                </ContentText>

                {review?.reviewImages?.length > 0 && (
                    <ImageWrapper>
                        {review.reviewImages.map((image) => (
                            <ReviewImage src={image?.changeName} alt="리뷰 이미지" />
                        ))}
                    </ImageWrapper>
                )}

                <ButtonGroup>
                    <div>
                        <ActionBtn orange style={{ marginRight: '8px' }}>수정</ActionBtn>
                        <ActionBtn orange>삭제</ActionBtn>
                    </div>
                    <ActionBtn onClick={() => navigate('/reviews')}>목록</ActionBtn>
                </ButtonGroup>

                <Stats>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Eye size={16} /> {review.viewCount}
                    </div>
                    {/* 메인 게시글: 좋아요 안 누른 상태 */}
                    <HeartButton active={false}>
                        <Heart /> {review.likes}
                    </HeartButton>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <MessageSquare size={16} /> {review.reviewReplies?.length} 댓글
                    </div>
                </Stats>
            </Card>

            <CommentSection>
                <strong style={{ fontSize: '14px' }}>댓글 남기기</strong>
                <CommentInputRow>
                    <input type="text" placeholder="댓글을 입력해주세요..." />
                    <OrangeBtn>댓글 등록</OrangeBtn>
                </CommentInputRow>

                { review.reviewReplies?.length > 0 && review.reviewReplies.map((reply) => (
                    <CommentItem>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <UserInfo style={{ marginBottom: '5px' }}>
                                <img src={review.profileImage} alt="user" />
                                <div className="details">
                                    <span>{reply.replyWriter} <small style={{ fontWeight: 400, marginLeft: '5px' }}>{Math.ceil((Date.now() - new Date(reply.createDate)) / (24 * 60 * 60 * 1000))}일 전</small></span>
                                    <small>손님</small>
                                </div>
                            </UserInfo>
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

export default ReviewDetail;