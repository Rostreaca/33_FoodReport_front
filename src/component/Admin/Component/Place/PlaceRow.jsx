import { useState } from "react";
import { MoreVertical } from "lucide-react";
import {
  PlaceRowContainer,
  PlaceContentCell,
  OwnerCell,
  AddressCell,
  ReviewCountCell,
  DateCell,
  StatusCell,
  StatusBadge,
  OptionsCell,
  OptionsButton,
  OptionsMenu,
  OptionsMenuItem,
  Avatar,
} from "./PlaceRow.style";

const PlaceRow = ({ place }) => {
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

  const handleGoToPost = () => {
    // 게시글로 이동하는 로직
    console.log("게시글로 이동:", place.placeNo);
    // window.location.href = `/place/${place.placeNo}`;
    // 또는 navigate(`/place/${place.placeNo}`);
    setIsOptionsOpen(false);
  };

  return (
    <PlaceRowContainer>
      <Avatar>
        {place.profileImage ? (
          <img src={place.profileImage} alt={place.nickname} />
        ) : (
          <span>{place.nickname?.charAt(0)?.toUpperCase() || "U"}</span>
        )}
      </Avatar>
      <OwnerCell>
        <span className="mobile-label"></span>
        <span className="mobile-value">{place.nickname}</span>
      </OwnerCell>
      <AddressCell>
        <span className="mobile-label"></span>
        <span className="mobile-value">{place.placeTitle || "제목 없음"}</span>
      </AddressCell>
      <PlaceContentCell>
        <span className="mobile-label"></span>
        <span className="mobile-value">{place.placeContent || "내용 없음"}</span>
      </PlaceContentCell>
      <ReviewCountCell>
        <span className="mobile-label"></span>
        <span className="mobile-value">{place.viewCount || 0}</span>
      </ReviewCountCell>
      <DateCell>
        <span className="mobile-label"></span>
        <span className="mobile-value">
          {place.createDate
            ? new Date(place.createDate).toLocaleDateString("ko-KR")
            : "-"}
        </span>
      </DateCell>
      <StatusCell>
        <span className="mobile-label"></span>
        <StatusBadge $isStatus={place.status === "Y"}>
          {place.status === "Y" ? "활성화" : "비활성화"}
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
            <OptionsMenuItem onClick={handleEdit}>✓ 활성화하기</OptionsMenuItem>
            <OptionsMenuItem onClick={handleDelete}>
              ✕ 비활성화하기
            </OptionsMenuItem>
          </OptionsMenu>
        )}
      </OptionsCell>
    </PlaceRowContainer>
  );
};

export default PlaceRow;
