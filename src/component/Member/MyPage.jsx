import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import * as S from './MyPage.style';

const MyPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { path: '/mypage/info', label: '내 정보' },
        { path: '/mypage/likes', label: '좋아요 목록' },
        { path: '/mypage/reviews', label: '리뷰 관리' },
        { path: '/mypage/withdrawal', label: '회원 탈퇴' }
    ];

    const getCurrentPath = () => {
        if (location.pathname.includes('/info')) return '/mypage/info';
        if (location.pathname.includes('/likes')) return '/mypage/likes';
        if (location.pathname.includes('/reviews')) return '/mypage/reviews';
        if (location.pathname.includes('/withdrawal')) return '/mypage/withdrawal';
        return '/mypage/info';
    };

    const handleLogout = () => {
        // TODO: 로그아웃 처리
        console.log('Logout');
        navigate('/');
    };

    return (
        <S.MyPageContainer>
            <S.Sidebar>
                <S.SidebarTitle>마이페이지</S.SidebarTitle>
                <S.MenuList>
                    {menuItems.map((item) => (
                        <S.MenuItem
                            key={item.path}
                            to={item.path}
                            $active={getCurrentPath() === item.path}
                        >
                            {item.label}
                        </S.MenuItem>
                    ))}
                </S.MenuList>
            </S.Sidebar>

            <S.MainContent>
                <S.TopRightMenu>
                    <S.TopMenuItem onClick={() => navigate('/admin')}>
                        관리자페이지
                    </S.TopMenuItem>
                    <S.TopMenuItem onClick={handleLogout}>
                        → 로그아웃
                    </S.TopMenuItem>
                </S.TopRightMenu>
                <Outlet />
            </S.MainContent>
        </S.MyPageContainer>
    );
};

export default MyPage;
