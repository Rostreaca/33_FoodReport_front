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
import { authInstance } from "../../../api/reqService";
import Toast from "../../../common/Toast/Toast";

const MemberRow = ({ member, onStatusChange }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "error",
  });
  const [currentRole, setCurrentRole] = useState(member.role);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const handleActivate = () => {
    // 활성화 로직
    if (member.status === "N") {
      const memberNo = member.memberNo;
      authInstance
        .put(`/api/admin/members/${memberNo}`)
        .then((res) => {
          onStatusChange();
          showToast(res.data.message, "success");
        })
        .catch((err) => {
          console.log(err);
          showToast("활성화에 실패했습니다.", "error");
        });

      setIsOptionsOpen(false);
    } else {
      showToast("이미 활성화되어있습니다!", "error");
    }
  };

  const handleDeactivate = () => {
    // 비활성화 로직
    if (member.status === "Y") {
      const memberNo = member.memberNo;
      authInstance
        .delete(`/api/admin/members/${memberNo}`)
        .then((res) => {
          if (res.status === 204) {
            onStatusChange();
            showToast("비활성화에 성공했습니다!", "success");
          }
        })
        .catch((err) => {
          console.log(err);
          showToast("비활성화에 실패했습니다.", "error");
        });
      setIsOptionsOpen(false);
    } else {
      showToast("이미 비활성화 되어있습니다!", "error");
    }
  };

  const showToast = (message, type = "error") => {
    // 알럿 대신 토스트
    setToast({ show: true, message, type });
  };

  const handleRoleChange = (newRole) => {
    setCurrentRole(newRole);
    setIsOptionsOpen(false);
  };

  const getRoleText = (role) => {
    switch (role) {
      case "ROLE_ADMIN":
        return "관리자";
      case "ROLE_OWNER":
        return "사장님";
      default:
        return "사용자";
    }
  };

  return (
    <MemberRowContainer>
      <AvatarCell>
        {toast.show && (
          <Toast
            message={toast.message}
            type={toast.type}
            duration={3000}
            onClose={() => setToast({ ...toast, show: false })}
          />
        )}
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
        <StatusBadge $isActive={member.status === "Y"}>
          {member.status === "Y" ? "활성화" : "비활성화"}
        </StatusBadge>
      </StatusCell>

      <RoleCell>
        <span className="mobile-label">역할:</span>
        <RoleBadge $role={currentRole}>{getRoleText(currentRole)}</RoleBadge>
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
            <OptionsMenuItem onClick={() => handleRoleChange("ROLE_ADMIN")}>
              관리자로 변경
            </OptionsMenuItem>
            <OptionsMenuItem onClick={() => handleRoleChange("ROLE_OWNER")}>
              사장님으로 변경
            </OptionsMenuItem>
            <OptionsMenuItem onClick={() => handleRoleChange("ROLE_USER")}>
              사용자로 변경
            </OptionsMenuItem>
          </OptionsMenu>
        )}
      </OptionsCell>
    </MemberRowContainer>
  );
};

export default MemberRow;
