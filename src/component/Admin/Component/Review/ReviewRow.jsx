import { useState } from "react";
import { MoreVertical } from "lucide-react";
import {
  ReviewRowContainer,
  ReviewInfoCell,
  AuthorInfoCell,
  Avatar,
  AuthorDetails,
  AuthorName,
  ReviewContentCell,
  LikeCountCell,
  DateCell,
  StatusCell,
  StatusBadge,
  OptionsCell,
  OptionsButton,
  OptionsMenu,
  OptionsMenuItem,
} from "./ReviewRow.style";
import { authInstance } from "../../../api/reqService";

const ReviewRow = ({ review, onStatusChange }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const handleActivate = () => {
    // 활성화 로직
    if (review.status === "N") {
      authInstance
        .put(`/api/admin/reviews/${review.reviewNo}`)
        .then((res) => {
          alert(res.data.message);
          onStatusChange();
        })
        .catch((err) => {
          console.log(err);
        });
      setIsOptionsOpen(false);
    } else {
      alert("이미 활성화된 리뷰입니다.");
    }
  };

  const handleDeactivate = () => {
    // 비활성화 로직
    if (review.status === "Y") {
      authInstance
        .delete(`/api/admin/reviews/${review.reviewNo}`)
        .then((res) => {
          console.log(res);
          if (res.status === 204) {
            alert("비활성화에 성공하셨습니다!");
            onStatusChange();
          }
        })
        .catch((err) => {
          console.log(err);
        });

      setIsOptionsOpen(false);
    } else {
      alert("이미 비활성화된 리뷰입니다.");
    }
  };

  const handleGoToPost = () => {
    // 게시글로 이동하는 로직
    console.log("게시글로 이동:", review.reviewNo);
    // window.location.href = `/review/${review.reviewNo}`;
    // 또는 navigate(`/review/${review.reviewNo}`);
    setIsOptionsOpen(false);
  };

  return (
    <ReviewRowContainer>
      <Avatar>
        {review.profileImage ? (
          <img src={review.profileImage} alt={review.nickname} />
        ) : (
          <span>{review.nickname?.charAt(0)?.toUpperCase() || "U"}</span>
        )}
      </Avatar>

      <AuthorInfoCell>
        <AuthorDetails>
          <AuthorName>{review.nickname || "알 수 없음"}</AuthorName>
        </AuthorDetails>
      </AuthorInfoCell>

      <ReviewInfoCell>
        <span className="mobile-label"></span>
        <span className="mobile-value">
          {review.reviewTitle || "제목 없음"}
        </span>
      </ReviewInfoCell>

      <ReviewContentCell>
        <span className="mobile-label"></span>
        <span className="mobile-value">
          {review.reviewContent || "내용 없음"}
        </span>
      </ReviewContentCell>

      <LikeCountCell>
        <span className="mobile-label"></span>
        <span className="mobile-value">{review.likes || 0}</span>
      </LikeCountCell>

      <DateCell>
        <span className="mobile-label"></span>
        <span className="mobile-value">
          {review.createDate
            ? new Date(review.createDate).toLocaleDateString("ko-KR")
            : "-"}
        </span>
      </DateCell>

      <StatusCell>
        <span className="mobile-label"></span>
        <StatusBadge $isActive={review.status === "Y"}>
          {review.status === "Y" ? "활성화" : "비활성화"}
        </StatusBadge>
      </StatusCell>

      <OptionsCell>
        <OptionsButton onClick={toggleOptions}>
          <MoreVertical size={18} />
        </OptionsButton>
        {isOptionsOpen && (
          <OptionsMenu>
            <OptionsMenuItem onClick={handleGoToPost}>
              → 게시글 이동하기
            </OptionsMenuItem>
            <OptionsMenuItem onClick={handleActivate}>
              ✓ 활성화하기
            </OptionsMenuItem>
            <OptionsMenuItem onClick={handleDeactivate}>
              ✕ 비활성화하기
            </OptionsMenuItem>
          </OptionsMenu>
        )}
      </OptionsCell>
    </ReviewRowContainer>
  );
};

export default ReviewRow;
