
import {
    LayoutDashboard,  // 대시보드
    Users,            // 회원 관리
    Store,            // 맛집 관리
    Hash,             // 해시태그 관리
    MessageSquare,    // 리뷰 관리
    Bell,             // 공지 사항 관리
    LogOut,          // 로그아웃
    ChevronRight,
    Home
} from 'lucide-react';

import {
    Container,
    MenuList,
    MenuItem,
    IconWrapper,
    MenuText,
    ArrowIcon,
    BottomMenu
} from "./SideBar.style";
import { useNavigate } from 'react-router-dom';

const MENU_ITEMS = [
    { id: 1, label: '대시보드', icon: LayoutDashboard, path: '/admin' },
    { id: 2, label: '회원 관리', icon: Users, path: '/admin/members' },
    { id: 3, label: '맛집(단장) 관리', icon: Store, path: '/admin/restaurants' },
    { id: 4, label: '해시태그 관리', icon: Hash, path: '/admin/hashtags' },
    { id: 5, label: '리뷰 관리', icon: MessageSquare, path: '/admin/reviews' },
    { id: 6, label: '공지 사항 관리', icon: Bell, path: '/admin/notices' }
];

const SideBar = () => {
    const navigate = useNavigate();


    const handleLogout = () => {
        if (window.confirm("관리자 페이지에서 로그아웃 하시겠습니까?")) {

        }
    };

    const handleMenuClick = (path) => {
        navigate(path);
    };

    return (
        <Container>
            <MenuList>
                {MENU_ITEMS.map((item) => {
                    const Icon = item.icon; // 이 부분 추가!
                    return (
                        <MenuItem
                            key={item.id}
                            onClick={() => handleMenuClick(item.path)}
                        >
                            <IconWrapper>
                                <Icon size={20} />
                            </IconWrapper>
                            <MenuText>{item.label}</MenuText>
                            <ArrowIcon>
                                <ChevronRight size={20} />
                            </ArrowIcon>
                        </MenuItem>
                    );
                })}
            </MenuList>

            <BottomMenu>
                <MenuItem onClick={handleLogout}>
                    <IconWrapper>
                        <LogOut size={20} /> 
                    </IconWrapper>
                    <MenuText>로그아웃</MenuText>
                    <ArrowIcon>
                        <ChevronRight size={20} />
                    </ArrowIcon>
                </MenuItem>
            </BottomMenu>
        </Container>
    );
};

export default SideBar;