import { useState } from "react";
import { MoreVertical, ChevronUp, ChevronDown } from "lucide-react";
import {
    MemberRowContainer,
    MemberInfoCell,
    Avatar,
    MemberDetails,
    MemberName,
    MemberEmail,
    PhoneInfoCell,
    ReviewCountCell,
    DateCell,
    StatusCell,
    StatusBadge,
    OptionsCell,
    OptionsButton,
    OptionsMenu,
    OptionsMenuItem
} from "./MemberRow.style";

const MemberRow = ({ member }) => {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    const toggleOptions = () => {
        setIsOptionsOpen(!isOptionsOpen);
    };

    const handleActivate = () => {
        // 활성화 로직
        setIsOptionsOpen(false);
    };

    const handleDeactivate = () => {
        // 비활성화 로직
        setIsOptionsOpen(false);
    };

    return (
        <MemberRowContainer>
            <MemberInfoCell>
                <Avatar>
                    {member.avatar ? (
                        <img src={member.avatar} alt={member.name} />
                    ) : (
                        <span>{member.name.charAt(0).toUpperCase()}</span>
                    )}
                </Avatar>
                <MemberDetails>
                    <MemberName>{member.name}</MemberName>
                    <MemberEmail>{member.email}</MemberEmail>
                </MemberDetails>
            </MemberInfoCell>
            <PhoneInfoCell>
                <span className="mobile-label">전화 번호:</span>
                <span className="mobile-value">{member.phone}</span>
            </PhoneInfoCell>
            <ReviewCountCell>
                <span className="mobile-label">리뷰 작성 수:</span>
                <span className="mobile-value">
                    {member.reviewCount}
                    <div>
                        <ChevronUp size={12} />
                        <ChevronDown size={12} />
                    </div>
                </span>
            </ReviewCountCell>
            <DateCell>
                <span className="mobile-label">날짜:</span>
                <span className="mobile-value">{member.date}</span>
            </DateCell>
            <StatusCell>
                <span className="mobile-label">상태:</span>
                <StatusBadge $isActive={member.isActive}>
                    {member.isActive ? "활성화" : "비활성화"}
                </StatusBadge>
            </StatusCell>
            <OptionsCell>
                <OptionsButton onClick={toggleOptions}>
                    <MoreVertical size={18} />
                </OptionsButton>
                {isOptionsOpen && (
                    <OptionsMenu>
                        <OptionsMenuItem onClick={handleActivate}>
                            ✓ 활성화하기
                        </OptionsMenuItem>
                        <OptionsMenuItem onClick={handleDeactivate}>
                            X 비활성화하기
                        </OptionsMenuItem>
                    </OptionsMenu>
                )}
            </OptionsCell>
        </MemberRowContainer>
    );
};

export default MemberRow;
