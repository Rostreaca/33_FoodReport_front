import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MyInfo.style';

const MyInfo = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: 'seo567@gmail.com',
        nickname: '김두한',
        phone: '010-1234-5678',
        bio: '안녕하세요. 김두한입니다. 종로 맛집을 평정하러 왔어요.',
        profileImage: null
    });
    const [bioLength, setBioLength] = useState(21);
    const [saveChecked, setSaveChecked] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (name === 'bio') {
            setBioLength(value.length);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                profileImage: file
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!saveChecked) {
            alert('사용자 정보를 저장하려면 체크해주세요!');
            return;
        }
        // TODO: API 호출
        console.log('Update user info:', formData);
    };

    const handleCancel = () => {
        // TODO: 변경사항 취소
        navigate('/mypage');
    };

    const handleOwnerRegister = () => {
        // TODO: 사장님 등록 페이지로 이동
        console.log('Register as owner');
    };

    const handlePasswordReset = () => {
        // TODO: 비밀번호 재설정 페이지로 이동
        console.log('Reset password');
    };

    return (
        <S.MyInfoContainer>
            <S.Breadcrumb>
                홈 & 마이페이지 & 내 정보
            </S.Breadcrumb>

            <S.Title>내 정보</S.Title>

            <S.Form onSubmit={handleSubmit}>
                <S.ProfileSection>
                    <S.ProfileImageWrapper>
                        <S.ProfileImage
                            src={formData.profileImage ? URL.createObjectURL(formData.profileImage) : '/user.png'}
                            alt="프로필"
                        />
                    </S.ProfileImageWrapper>
                    <S.ProfileText>
                        프로필 사진은 귀하의 프로필과 목록에 표시됩니다. PNG 또는 JPG 형식으로 가로 세로 500픽셀 이하로 업로드하세요.
                    </S.ProfileText>
                    <S.FileInputWrapper>
                        <S.FileInput
                            type="file"
                            id="profileImage"
                            accept="image/png,image/jpeg"
                            onChange={handleFileChange}
                        />
                        <S.FileLabel htmlFor="profileImage">
                            🔄 사진 업데이트
                        </S.FileLabel>
                    </S.FileInputWrapper>
                </S.ProfileSection>

                <S.InputGroup>
                    <S.Label>이메일</S.Label>
                    <S.Input
                        type="email"
                        name="email"
                        value={formData.email}
                        disabled
                    />
                </S.InputGroup>

                <S.InputGroup>
                    <S.Label>닉네임</S.Label>
                    <S.Input
                        type="text"
                        name="nickname"
                        value={formData.nickname}
                        onChange={handleChange}
                    />
                </S.InputGroup>

                <S.InputGroup>
                    <S.Label>전화번호</S.Label>
                    <S.Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </S.InputGroup>

                <S.InputGroup>
                    <S.Label>소개글</S.Label>
                    <S.TextAreaWrapper>
                        <S.TextArea
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            maxLength={100}
                            rows={4}
                        />
                        <S.CharCount>{bioLength}/100자</S.CharCount>
                    </S.TextAreaWrapper>
                </S.InputGroup>

                <S.CheckboxWrapper>
                    <S.Checkbox
                        type="checkbox"
                        checked={saveChecked}
                        onChange={(e) => setSaveChecked(e.target.checked)}
                    />
                    <S.CheckboxLabel>사용자 정보를 저장하려면 체크해주세요!</S.CheckboxLabel>
                </S.CheckboxWrapper>

                <S.ButtonGroup>
                    <S.ConfirmButton type="submit">확인</S.ConfirmButton>
                    <S.CancelButton type="button" onClick={handleCancel}>취소</S.CancelButton>
                </S.ButtonGroup>
            </S.Form>

            <S.Section>
                <S.SectionTitle>사장님 등록하기</S.SectionTitle>
                <S.SectionDescription>사업장을 등록합니다.</S.SectionDescription>
                <S.SectionButton onClick={handleOwnerRegister}>등록</S.SectionButton>
            </S.Section>

            <S.Section>
                <S.SectionTitle>비밀번호 재설정</S.SectionTitle>
                <S.SectionDescription>비밀번호를 변경합니다.</S.SectionDescription>
                <S.SectionButton onClick={handlePasswordReset}>변경</S.SectionButton>
            </S.Section>
        </S.MyInfoContainer>
    );
};

export default MyInfo;
