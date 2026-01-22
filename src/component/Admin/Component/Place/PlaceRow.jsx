import { useState } from "react";
import { MoreVertical } from "lucide-react";
import {
    PlaceRowContainer,
    PlaceNameCell,
    OwnerCell,
    AddressCell,
    ReviewCountCell,
    DateCell,
    StatusCell,
    StatusBadge,
    OptionsCell,
    OptionsButton,
    OptionsMenu,
    OptionsMenuItem
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

    return (
        <PlaceRowContainer>
            <PlaceNameCell>
                <span className="mobile-label">맛집명:</span>
                <span className="mobile-value">{place.name}</span>
            </PlaceNameCell>
            <OwnerCell>
                <span className="mobile-label">단장:</span>
                <span className="mobile-value">{place.owner}</span>
            </OwnerCell>
            <AddressCell>
                <span className="mobile-label">주소:</span>
                <span className="mobile-value">{place.address}</span>
            </AddressCell>
            <ReviewCountCell>
                <span className="mobile-label">리뷰 수:</span>
                <span className="mobile-value">{place.reviewCount}</span>
            </ReviewCountCell>
            <DateCell>
                <span className="mobile-label">등록일:</span>
                <span className="mobile-value">{place.date}</span>
            </DateCell>
            <StatusCell>
                <span className="mobile-label">상태:</span>
                <StatusBadge $isActive={place.isActive}>
                    {place.isActive ? "활성화" : "비활성화"}
                </StatusBadge>
            </StatusCell>
            <OptionsCell>
                <OptionsButton onClick={toggleOptions}>
                    <MoreVertical size={18} />
                </OptionsButton>
                {isOptionsOpen && (
                    <OptionsMenu>
                        <OptionsMenuItem onClick={handleEdit}>
                            수정하기
                        </OptionsMenuItem>
                        <OptionsMenuItem onClick={handleDelete}>
                            삭제하기
                        </OptionsMenuItem>
                    </OptionsMenu>
                )}
            </OptionsCell>
        </PlaceRowContainer>
    );
};

export default PlaceRow;
