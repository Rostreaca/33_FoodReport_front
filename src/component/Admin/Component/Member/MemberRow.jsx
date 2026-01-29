import { useState } from "react";
import { MoreVertical } from "lucide-react";
import {
  MemberRowContainer,
  AvatarCell,
  Avatar,
  MemberInfoCell,
  MemberName,
  MemberEmail,
  ContactInfoCell,
  PhoneNumber,
  Introduce,
  ReviewCountCell,
  DateCell,
  StatusCell,
  StatusBadge,
  RoleCell,
  RoleBadge,
  OptionsCell,
  OptionsButton,
  OptionsMenu,
  OptionsMenuItem,
} from "./MemberRow.style";

const MemberRow = ({ member }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(member.role);

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

  const handleRoleChange = (newRole) => {
    setCurrentRole(newRole);
    setIsOptionsOpen(false);
    // TODO: API 호출하여 서버에 역할 변경 요청
    console.log(`역할 변경: ${member.nickname} -> ${newRole}`);
  };

  const getRoleText = (role) => {
    switch(role) {
      case 'ROLE_ADMIN':
        return '관리자';
      case 'ROLE_OWNER':
        return '사장님';
      default:
        return '사용자';
    }
  };

  const isActive = member.status === "Y";

  return (
    <MemberRowContainer>
      <AvatarCell>
        <Avatar>
          {member.profileImage ? (
            <img src={member.profileImage} alt={member.nickname} />
          ) : (
            <span>{member.nickname.charAt(0)}</span>
          )}
        </Avatar>
      </AvatarCell>

      <MemberInfoCell>
        <MemberName>{member.nickname}</MemberName>
        <MemberEmail>{member.email}</MemberEmail>
      </MemberInfoCell>

      <ContactInfoCell>
        <span className="mobile-label">회원정보</span>
        <PhoneNumber>{member.phone}</PhoneNumber>
        <Introduce>{member.introduce || "소개가 없습니다."}</Introduce>
      </ContactInfoCell>

      <ReviewCountCell>
        <span className="mobile-label">리뷰 수:</span>
        <span className="mobile-value">{member.reviewCount}</span>
      </ReviewCountCell>

      <DateCell>
        <span className="mobile-label">가입일:</span>
        <span className="mobile-value">
          {member.createDate
            ? new Date(member.createDate).toLocaleDateString("ko-KR")
            : "-"}
        </span>
      </DateCell>

      <StatusCell>
        <span className="mobile-label">상태:</span>
        <StatusBadge $isActive={isActive}>
          {isActive ? "활성화" : "비활성화"}
        </StatusBadge>
      </StatusCell>

      <RoleCell>
        <span className="mobile-label">역할:</span>
        <RoleBadge $role={currentRole}>
          {getRoleText(currentRole)}
        </RoleBadge>
      </RoleCell>

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
            <OptionsMenuItem onClick={() => handleRoleChange('ROLE_ADMIN')}>
              관리자로 변경
            </OptionsMenuItem>
            <OptionsMenuItem onClick={() => handleRoleChange('ROLE_OWNER')}>
              사장님으로 변경
            </OptionsMenuItem>
            <OptionsMenuItem onClick={() => handleRoleChange('ROLE_USER')}>
              사용자로 변경
            </OptionsMenuItem>
          </OptionsMenu>
        )}
      </OptionsCell>
    </MemberRowContainer>
  );
};

export default MemberRow;