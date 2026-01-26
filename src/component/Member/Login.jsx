import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as S from './Login.style';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: 로그인 API 호출
        console.log('Login:', formData, keepLoggedIn);
        // navigate('/mypage');
    };

    return (
        <S.LoginContainer>
            <S.TopMenu>
                <S.MenuItem onClick={() => navigate('/login')}>
                    <S.MenuIcon>🚪</S.MenuIcon>
                    로그인
                </S.MenuItem>
                <S.MenuItem onClick={() => navigate('/signup')}>
                    <S.MenuIcon>👤+</S.MenuIcon>
                    회원가입
                </S.MenuItem>
            </S.TopMenu>

            <S.LoginWrapper>
                <S.Title>로그인</S.Title>
                
                <S.Form onSubmit={handleSubmit}>
                    <S.InputGroup>
                        <S.Label>이메일</S.Label>
                        <S.InputWrapper>
                            <S.InputIcon>👤</S.InputIcon>
                            <S.Input
                                type="email"
                                name="email"
                                placeholder="user@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </S.InputWrapper>
                    </S.InputGroup>

                    <S.InputGroup>
                        <S.Label>패스워드</S.Label>
                        <S.InputWrapper>
                            <S.InputIcon>🔒</S.InputIcon>
                            <S.Input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="비밀번호를 입력해주세요."
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <S.EyeIcon onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? '👁️' : '👁️‍🗨️'}
                            </S.EyeIcon>
                        </S.InputWrapper>
                    </S.InputGroup>

                    <S.OptionsRow>
                        <S.CheckboxWrapper>
                            <S.Checkbox
                                type="checkbox"
                                checked={keepLoggedIn}
                                onChange={(e) => setKeepLoggedIn(e.target.checked)}
                            />
                            <S.CheckboxLabel>로그인 상태 유지</S.CheckboxLabel>
                        </S.CheckboxWrapper>
                        <S.LinkText to="/find-password">비밀번호 찾기</S.LinkText>
                    </S.OptionsRow>

                    <S.LoginButton type="submit">로그인</S.LoginButton>
                </S.Form>

                <S.Divider>
                    <S.DividerLine />
                    <S.DividerText>or</S.DividerText>
                    <S.DividerLine />
                </S.Divider>

                <S.SocialLoginSection>
                    <S.SocialButton $kakao>
                        <S.SocialIcon>💬</S.SocialIcon>
                        카카오로 3초만에 시작하기
                    </S.SocialButton>
                    <S.SocialButton $google>
                        <S.SocialIcon>G</S.SocialIcon>
                        구글로 시작하기
                    </S.SocialButton>
                </S.SocialLoginSection>

                <S.SignUpLink>
                    계정이 없으신가요? <Link to="/signup">계정 만들기</Link>
                </S.SignUpLink>
            </S.LoginWrapper>
        </S.LoginContainer>
    );
};

export default Login;
