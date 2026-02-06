import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as S from './Login.style';
import { AuthContext } from "../context/AuthContext"
import { publicInstance } from "../api/reqService"
import Toast from '../common/Toast/Toast';


const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);
    const { login } = useContext(AuthContext);
    const [toast, setToast] = useState({
        show: false,
        message: "",
        type: "error",
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const showToast = (message, type = "error") => {
        setToast({ show: true, message, type });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;
        publicInstance.post("/api/auth/login", { email, password, })
            .then((result) => {
                const { memberNo, email, nickname, phone, accessToken, refreshToken, role } = result.data.data;

                // AuthContext의 login 함수 호출
                login(memberNo, email, nickname, phone, accessToken, refreshToken, role);

                navigate('/');
                showToast("로그인에 성공하였습니다!", "success");
            })
            .catch((error) => {
                showToast("아이디 또는 비밀번호를 확인해주세요.", "error");
            });
    };

    return (
        <S.LoginContainer>
            {toast.show && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    duration={3000}
                    onClose={() => setToast({ ...toast, show: false })}
                />
            )}
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
                        {formData.password && formData.password.length < 8 && (
                            <span style={{ color: 'red', fontSize: '12px' }}>
                                비밀번호는 8자 이상이어야 합니다.
                            </span>
                        )}
                    </S.InputGroup>

                    <S.LoginButton type="submit">로그인</S.LoginButton>

                </S.Form>
                
                <S.SignUpLink>
                    계정이 없으신가요? <Link to="/signup">계정 만들기</Link>
                </S.SignUpLink>
            </S.LoginWrapper>
        </S.LoginContainer>
    );
};

export default Login;
