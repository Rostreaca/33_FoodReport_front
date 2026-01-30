import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as S from './SignUp.style';
import { publicInstance } from '../api/reqService';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'

const SignUp = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        nickname: '',
        phone: '',
        profileImage: null
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [emailChecked, setEmailChecked] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^010-\d{4}-\d{4}$/;
        return phoneRegex.test(phone);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));


        // 실시간 유효성 검사
        if (name === 'email') {
            setEmailChecked(false);
            if (value && !validateEmail(value)) {
                setErrors(prev => ({ ...prev, email: '아이디는 이메일 형식이어야합니다.' }));
            } else {
                setErrors(prev => ({ ...prev, email: '' }));
            }
        } else if (name === 'password') {
            if (value && value.length < 8) {
                setErrors(prev => ({ ...prev, password: '비밀번호는 8자부터 시작할 수 있습니다.' }));
            } else {
                setErrors(prev => ({ ...prev, password: '' }));
            }
            if (formData.confirmPassword && value !== formData.confirmPassword) {
                setErrors(prev => ({ ...prev, confirmPassword: '비밀번호가 일치하지 않습니다.' }));
            } else if (formData.confirmPassword) {
                setErrors(prev => ({ ...prev, confirmPassword: '' }));
            }
        } else if (name === 'confirmPassword') {
            if (value && value !== formData.password) {
                setErrors(prev => ({ ...prev, confirmPassword: '비밀번호가 일치하지 않습니다.' }));
            } else {
                setErrors(prev => ({ ...prev, confirmPassword: '' }));
            }
        } else if (name === 'phone') {
            if (value && !validatePhone(value)) {
                setErrors(prev => ({ ...prev, phone: '전화번호 형식이 맞지 않습니다.' }));
            } else {
                setErrors(prev => ({ ...prev, phone: '' }));
            }
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 500 * 500) {
                alert('파일 크기가 너무 큽니다. 500x500 픽셀 이하로 업로드해주세요.');
                return;
            }
            setFormData(prev => ({
                ...prev,
                profileImage: file
            }));
        }
    };

    const checkEmailDuplicate = () => {
        if (!formData.email) {
            setErrors(prev => ({ ...prev, email: '이메일을 입력해주세요.' }));
            return;
        }
        if (!validateEmail(formData.email)) {
            setErrors(prev => ({ ...prev, email: '아이디는 이메일 형식이어야합니다.' }));
            return;
        }
        // TODO: API 호출
        setEmailChecked(true);
        setErrors(prev => ({ ...prev, email: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, nickname, phone } = formData;

        // 유효성 검사
        const newErrors = {};
        if (!validateEmail(formData.email)) {
            newErrors.email = '아이디는 이메일 형식이어야합니다.';
        }
        if (formData.password.length < 8) {
            newErrors.password = '비밀번호는 8자부터 시작할 수 있습니다.';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
        }
        if (!validatePhone(formData.phone)) {
            newErrors.phone = '전화번호 형식이 맞지 않습니다.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        /*
        if (!emailChecked) {
            alert('이메일 중복 확인을 해주세요.');
            return;
        }
            */
        publicInstance.post("/api/members", { email, password, nickname, phone, })

            .then((result) => {
                alert("회원가입 성공!");
                console.log(result);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            })

        console.log('SignUp:', formData);

    };

    return (
        <S.SignUpContainer>
            <S.BackgroundImage />
            <S.SignUpWrapper>
                <S.TopMenu>
                    <S.MenuItem onClick={() => navigate('/login')}>
                        로그인
                    </S.MenuItem>
                    <S.MenuItem $active onClick={() => navigate('/signup')}>
                        회원가입
                    </S.MenuItem>
                </S.TopMenu>

                <S.Title>회원가입</S.Title>

                <S.Form onSubmit={handleSubmit}>
                    <S.InputGroup>
                        <S.Label>이메일</S.Label>
                        <S.InputRow>
                            <S.InputWrapper>
                                <S.Input
                                    type="email"
                                    name="email"
                                    placeholder="user@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </S.InputWrapper>
                            <S.CheckButton type="button" onClick={checkEmailDuplicate}>
                                아이디 중복확인
                            </S.CheckButton>
                        </S.InputRow>
                        {errors.email && <S.ErrorText>{errors.email}</S.ErrorText>}
                    </S.InputGroup>

                    <S.InputGroup>
                        <S.Label>비밀번호</S.Label>
                        <S.InputWrapper>
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
                        {errors.password && <S.ErrorText>{errors.password}</S.ErrorText>}
                    </S.InputGroup>

                    <S.InputGroup>
                        <S.Label>비밀번호 확인</S.Label>
                        <S.InputWrapper>
                            <S.Input
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                placeholder="비밀번호 재입력해주세요."
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            <S.EyeIcon onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                            </S.EyeIcon>
                        </S.InputWrapper>
                        {errors.confirmPassword && <S.ErrorText>{errors.confirmPassword}</S.ErrorText>}
                    </S.InputGroup>

                    <S.InputGroup>
                        <S.Label>닉네임</S.Label>
                        <S.InputWrapper>
                            <S.InputIcon>👤</S.InputIcon>
                            <S.Input
                                type="text"
                                name="nickname"
                                placeholder="닉네임을 입력해주세요."
                                value={formData.nickname}
                                onChange={handleChange}
                                required
                            />
                        </S.InputWrapper>
                    </S.InputGroup>

                    <S.InputGroup>
                        <S.Label>연락처</S.Label>
                        <S.InputWrapper>
                            <S.InputIcon>📱</S.InputIcon>
                            <S.Input
                                type="tel"
                                name="phone"
                                placeholder="휴대폰 번호를 입력해주세요."
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </S.InputWrapper>
                        {errors.phone && <S.ErrorText>{errors.phone}</S.ErrorText>}
                    </S.InputGroup>

                    <S.ProfileSection>
                        <S.ProfileText>
                            프로필 사진은 귀하의 프로필과 목록에 표시됩니다.
                        </S.ProfileText>
                        <S.ProfileText>
                            PNG 또는 JPG 형식으로 가로 세로 500픽셀 이하로 업로드하세요.
                        </S.ProfileText>
                        <S.FileInputWrapper>
                            <S.FileInput
                                type="file"
                                id="profileImage"
                                accept="image/png,image/jpeg"
                                onChange={handleFileChange}
                            />
                            <S.FileLabel htmlFor="profileImage">
                                🔄 사진 등록하기
                            </S.FileLabel>
                        </S.FileInputWrapper>
                    </S.ProfileSection>

                    <S.SignUpButton type="submit">가입하기</S.SignUpButton>
                </S.Form>

                <S.LoginLink>
                    이미 계정이 있으신가요? <Link to="/login">로그인</Link>
                </S.LoginLink>
            </S.SignUpWrapper>
        </S.SignUpContainer>
    );
};

export default SignUp;
