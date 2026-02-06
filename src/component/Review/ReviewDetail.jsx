import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Eye, Heart, MessageSquare, MoreHorizontal,
    Pencil, X, Image as ImageIcon, ChevronRight, Home
} from 'lucide-react';

import {
    Container, Breadcrumb, Card, Title, UserInfo, ContentText, ImageWrapper, ReviewImage, ButtonGroup, ActionBtn, Stats, CommentSection,
    CommentInputRow, OrangeBtn, CommentItem, CommentBody, DropdownMenu, DropdownItem,
    HeartButton,
    TagContainer,
    Tag
} from './ReviewDetail.style.js';
import { authInstance, publicInstance } from '../api/reqService.js';
import { AuthContext } from '../context/AuthContext.jsx';
import ConfirmModal from '../common/Confirm/ConfirmModal.jsx';
import { ToastContext } from '../context/ToastContext.jsx';

const ReviewDetail = () => {
    const showToast = useContext(ToastContext);
    const { auth } = useContext(AuthContext);

    const { reviewNo } = useParams();
    const navi = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(null);
    const [review, setReview] = useState({});
    const [confirm, setConfirm] = useState({
        type : 'review',
        title : '게시글 삭제',
        message : '정말로 게시글을 삭제하시겠습니까?',
    })
    const [showConfirm, setShowConfirm] = useState(false);
    const [selectedReplyNo, setSelectedReplyNo] = useState(0);
    const [replyContent, setReplyContent] = useState('');
    

    useEffect(() => {
        findReviewDetail();
    }, []);

    const findReviewDetail = () => {
        publicInstance.get(`/api/reviews/${reviewNo}`)
            .then((res) => {
                setReview(res.data.data);
            }).catch((err) => {
                navi('/errorpage', {state : { code : 404 , message : err.response.data.message}});
            })
    }

    const handleReviewDelete = () => {

        authInstance.delete(`/api/reviews/${reviewNo}`)
            .then((res) => {
                showToast({message : res.data.message, type : "success"});
                navi('/reviews');
            }).catch((err) => {
                showToast({message : err.response.data.message});
            })

    }

    const handleReplySubmit = () => {
        
        if(replyContent.trim() === ''){
            showToast({message : '댓글 내용은 비어있을 수 없습니다.'});
            return;
        }

        authInstance.post(`/api/reviews/${reviewNo}/replies`, {
            replyContent : replyContent
        })
            .then((res) => {
                showToast({message : res.data.message, type : "success"});
                setReplyContent('');
                findReviewDetail();
            }).catch((err) => {
                showToast({message : err.response.data.message});
            })

    }

    const handleReplyMenuOpen = ( replyNo ) => {
        setSelectedReplyNo(replyNo);
        isMenuOpen === null ? setIsMenuOpen(replyNo) : setIsMenuOpen(null);
    }

    const handleReplyDelete = ( replyNo ) => {

        authInstance.delete(`/api/reviews/replies/${replyNo}`)
            .then((res) => {
                showToast({message : res.data.message, type : "success"});
                findReviewDetail();
            })
            .catch((err) => {
                showToast({message : err.response.data.message});
            })

    }

    const handleModalOpen = ( type, title, message) => {

        setConfirm({type : type, title : title, message : message});

        setShowConfirm(true);

    }

    const handleConfirm = () => {
        
        if(confirm.type === 'review'){
            handleReviewDelete();
        } else if(confirm.type === 'reply'){
            handleReplyDelete(selectedReplyNo);
        }
        
        setShowConfirm(false);

    }

    return (
        <Container>
            <ConfirmModal 
                title={confirm.title}
                message={confirm.message}
                isOpen={showConfirm}
                onConfirm={() => handleConfirm()}
                onCancel={() => setShowConfirm(false)}
            />
            <Breadcrumb>
                <div className="link-item" onClick={() => navi('/')}>
                    <Home size={14} />
                </div>
                <ChevronRight size={12} />
                <div className="link-item" onClick={() => navi('/reviews')}>
                    리뷰 목록
                </div>
                <ChevronRight size={12} />
                <span>상세 조회</span>
            </Breadcrumb>

            <Title style={{ marginBottom: '20px' }}>리뷰 상세 조회</Title>

            <Card>
                <Title>{review.reviewTitle}</Title>
                <UserInfo>
                    <img src={review.profileImage || "/user.png"} alt="user" />
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
                            <ReviewImage key={image.imageNo} src={image?.changeName} alt="리뷰 이미지" />
                        ))}
                    </ImageWrapper>
                )}

                {review?.tags?.length > 0 && (
                    <TagContainer>
                        {review.tags.map((tag) => (
                            <Tag key={tag.tagNo}>{tag?.tagTitle}</Tag>
                        ))}
                    </TagContainer>
                )}

                <ButtonGroup>
                    {auth.isAuthenticated && auth.memberNo == review.memberNo ? (
                        <>
                        <div>
                            <ActionBtn $orange style={{ marginRight: '8px' }} onClick={() => navi(`/reviews/updateform/${reviewNo}`) }>수정</ActionBtn>
                            <ActionBtn $orange onClick={() => handleModalOpen('review', '게시글 삭제', '정말로 게시글을 삭제하시겠습니까?')}>삭제</ActionBtn>
                        </div>
                        <ActionBtn onClick={() => navi('/reviews')}>목록</ActionBtn>
                        </>
                    ) : (
                        <>
                        <div>
                        </div>
                        <ActionBtn onClick={() => navi('/reviews')}>목록</ActionBtn>
                        </>
                    )
                    }
                </ButtonGroup>

                <Stats>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Eye size={16} /> {review.viewCount}
                    </div>
                    {/* 메인 게시글: 좋아요 안 누른 상태 */}
                    <HeartButton $active={false}>
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
                    { auth.isAuthenticated? 
                    <>
                    <input type="text" placeholder="댓글을 입력해주세요..." value={replyContent} onChange={(e) => setReplyContent(e.target.value)}/>
                    <OrangeBtn onClick={handleReplySubmit}>댓글 등록</OrangeBtn>
                    </>
                    :
                    <input type="text" placeholder="댓글 작성은 로그인 후 진행해주시기 바랍니다." readOnly/>
                    }
                </CommentInputRow>

                {review.reviewReplies?.length > 0 && review.reviewReplies.map((reply) => (
                    <CommentItem key={reply.replyNo}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <UserInfo style={{ marginBottom: '5px' }}>
                                <img src={reply.profileImage || "/user.png"} alt="user" />
                                <div className="details">
                                    <span>{reply.replyWriter} <small style={{ fontWeight: 400, marginLeft: '5px' }}>{Math.ceil((Date.now() - new Date(reply.createDate)) / (24 * 60 * 60 * 1000))}일 전</small></span>
                                    <small>손님</small>
                                </div>
                            </UserInfo>
                            {auth.isAuthenticated && auth.memberNo == reply.memberNo ? (
                            <div style={{ position: 'relative' }}>
                                <MoreHorizontal
                                    size={20}
                                    style={{ cursor: 'pointer', color: '#adb5bd' }}
                                    onClick={() => handleReplyMenuOpen(reply.replyNo)}
                                />
                                {isMenuOpen === reply.replyNo && (
                                    <DropdownMenu>
                                        <DropdownItem><Pencil /> 댓글 수정</DropdownItem>
                                        <DropdownItem onClick={() => handleModalOpen('reply', '댓글 삭제', '댓글을 삭제하시겠습니까?')}><X /> 댓글 삭제</DropdownItem>
                                    </DropdownMenu>
                                )}
                            </div>
                            ): <></>}
                        </div>
                        <CommentBody>{reply.replyContent}</CommentBody>
                        <HeartButton $active={true}>
                            <Heart /> {reply.likes}
                        </HeartButton>
                    </CommentItem>
                ))}
            </CommentSection>
        </Container>
    );
};

export default ReviewDetail;