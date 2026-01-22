import { useState } from "react";
import { MoreVertical, FileText } from "lucide-react";
import {
    ReviewRowContainer,
    ReviewInfoCell,
    AuthorInfoCell,
    Avatar,
    AuthorDetails,
    AuthorName,
    AuthorEmail,
    ReviewContentCell,
    LikeCountCell,
    DateCell,
    StatusCell,
    StatusBadge,
    OptionsCell,
    OptionsButton,
    OptionsMenu,
    OptionsMenuItem
} from "./ReviewRow.style";

const ReviewRow = ({ review }) => {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    const toggleOptions = () => {
        setIsOptionsOpen(!isOptionsOpen);
    };

    const handleEdit = () => {
        // 수정 로직
        setIsOptionsOpen(false);
    };

    const handleDelete = () => {
        // 삭제 로직
        setIsOptionsOpen(false);
    };

    return (
        <ReviewRowContainer>
            <ReviewInfoCell>
                <FileText size={16} />
                <span className="mobile-label">리뷰 정보:</span>
                <span className="mobile-value">{review.reviewInfo || review.placeName}</span>
            </ReviewInfoCell>
            <AuthorInfoCell>
                <Avatar>
                    {review.authorAvatar ? (
                        <img src={review.authorAvatar} alt={review.author} />
                    ) : (
                        <span>{review.author?.charAt(0)?.toUpperCase() || 'U'}</span>
                    )}
                </Avatar>
                <AuthorDetails>
                    <AuthorName>{review.author}</AuthorName>
                    <AuthorEmail>{review.authorEmail}</AuthorEmail>
                </AuthorDetails>
            </AuthorInfoCell>
            <ReviewContentCell>
                <span className="mobile-label">리뷰:</span>
                <span className="mobile-value">{review.content}</span>
            </ReviewContentCell>
            <LikeCountCell>
                <span className="mobile-label">좋아요 수:</span>
                <span className="mobile-value">{review.likeCount}</span>
            </LikeCountCell>
            <DateCell>
                <span className="mobile-label">날짜:</span>
                <span className="mobile-value">{review.date}</span>
            </DateCell>
            <StatusCell>
                <span className="mobile-label">상태:</span>
                <StatusBadge $isActive={review.isActive}>
                    {review.isActive ? "활성화" : "비활성화"}
                </StatusBadge>
            </StatusCell>
            <OptionsCell>
                <OptionsButton onClick={toggleOptions}>
                    <MoreVertical size={18} />
                </OptionsButton>
                {isOptionsOpen && (
                    <OptionsMenu>
                        <OptionsMenuItem onClick={handleEdit}>
                            ✓ 활성화하기
                        </OptionsMenuItem>
                        <OptionsMenuItem onClick={handleDelete}>
                            X 비활성화하기
                        </OptionsMenuItem>
                    </OptionsMenu>
                )}
            </OptionsCell>
        </ReviewRowContainer>
    );
};

export default ReviewRow;
