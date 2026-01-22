import { useState } from "react";
import { MoreVertical } from "lucide-react";
import {
    NoticeRowContainer,
    TitleCell,
    AuthorCell,
    DateCell,
    ViewCountCell,
    StatusCell,
    StatusBadge,
    OptionsCell,
    OptionsButton,
    OptionsMenu,
    OptionsMenuItem
} from "./NoticeRow.style";

const NoticeRow = ({ notice }) => {
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
        <NoticeRowContainer>
            <TitleCell>
                <span className="mobile-label">제목:</span>
                <span className="mobile-value">{notice.title}</span>
            </TitleCell>
            <AuthorCell>
                <span className="mobile-label">작성자:</span>
                <span className="mobile-value">{notice.author}</span>
            </AuthorCell>
            <DateCell>
                <span className="mobile-label">작성일:</span>
                <span className="mobile-value">{notice.date}</span>
            </DateCell>
            <ViewCountCell>
                <span className="mobile-label">조회수:</span>
                <span className="mobile-value">{notice.viewCount}</span>
            </ViewCountCell>
            <StatusCell>
                <span className="mobile-label">상태:</span>
                <StatusBadge $isActive={notice.isActive}>
                    {notice.isActive ? "공개" : "비공개"}
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
        </NoticeRowContainer>
    );
};

export default NoticeRow;
