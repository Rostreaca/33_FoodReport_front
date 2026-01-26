import { useNavigate } from 'react-router-dom';
import * as S from './Header.style';
import { useState } from 'react';

const Header = () => {
    const navi = useNavigate();
    const [open, setOpen] = useState(false);
    return (
        <S.HeaderContainer>
            <S.HeaderWrapper>
                <S.LeftSection>
                    <S.LogoLink to="/">
                        <S.LogoText>Food<br />Report</S.LogoText>
                    </S.LogoLink>

                    <S.SearchWrapper>
                        <S.SearchIcon>
                            <img src="/Search-Icon.png" alt="search" />
                        </S.SearchIcon>
                        <S.SearchInput
                            type="text"
                            placeholder="음식이름 입력하세요"
                        />
                    </S.SearchWrapper>
                </S.LeftSection>

                <S.RightSection>
                    <S.DropdownButton>
                        추천 맛집
                    </S.DropdownButton>

                    <S.DropdownButton>
                        리뷰 모음
                    </S.DropdownButton>

                    <S.DropdownButton>
                        공지사항
                    </S.DropdownButton>

                    <S.IconButton type="button" aria-label="메시지">
                        <img src='/chat.png' alt='채팅' />
                    </S.IconButton>

                    <S.IconButton type="button" aria-label="알림">
                        <img src='/light.png' alt='다크모드' />
                    </S.IconButton>

                    <S.UserSection onClick={() => setOpen(prev => !prev)}>
                        <S.UserAvatar>
                            <img src="/user.png" alt="유저" />
                        </S.UserAvatar>

                        <S.Username>
                            로그인이 필요합니다.
                            <S.DropdownIcon $open={open}>
                                <img src="/Under2-Icon.png" alt="드롭다운" />
                            </S.DropdownIcon>
                        </S.Username>

                        {open && (
                            <S.DropdownMenu>
                                <S.DropdownItem onClick={() => navi("/admin")}><img src="/admin.png" alt="관리자" />관리자 페이지</S.DropdownItem>
                                <S.DropdownItem onClick={() => navi("/login")}><img src="/login.png" alt="로그인" />로그인</S.DropdownItem>
                                <S.DropdownItem onClick={() => navi("/signup")}><img src="/SignUp.png" alt="회원가입" />회원가입</S.DropdownItem>
                                <S.DropdownItem onClick={() => navi("/mypage/info")}><img src="/user.png" alt="마이페이지" />마이페이지</S.DropdownItem>
                                <S.DropdownItem><img src="/logout.png" alt="로그아웃" />로그아웃</S.DropdownItem>
                            </S.DropdownMenu>
                        )}
                    </S.UserSection>
                </S.RightSection>
            </S.HeaderWrapper>
        </S.HeaderContainer>
    );
};

export default Header;