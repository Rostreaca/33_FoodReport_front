import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MemberWithdrawal.style';

const MemberWithdrawal = () => {
    const navigate = useNavigate();
    const [reason, setReason] = useState('');
    const [confirmText, setConfirmText] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!isConfirmed) {
            alert('회원 탈퇴를 확인해주세요.');
            return;
        }

        if (confirmText !== '탈퇴') {
            alert('"탈퇴"를 정확히 입력해주세요.');
            return;
        }

        // TODO: 회원 탈퇴 API 호출
        console.log('Withdraw:', { reason, confirmText });
        alert('회원 탈퇴가 완료되었습니다.');
        navigate('/');
    };

    return (
        <S.MemberWithdrawalContainer>
            <S.Breadcrumb>
                홈 & 마이페이지 & 회원 탈퇴
            </S.Breadcrumb>

            <S.Title>회원 탈퇴</S.Title>

            <S.WarningBox>
                <S.WarningTitle>⚠️ 주의사항</S.WarningTitle>
                <S.WarningList>
                    <li>탈퇴 후 모든 데이터가 삭제되며 복구할 수 없습니다.</li>
                    <li>작성한 리뷰와 좋아요 정보가 모두 삭제됩니다.</li>
                    <li>탈퇴 후 30일간 동일한 이메일로 재가입이 불가능합니다.</li>
                </S.WarningList>
            </S.WarningBox>

            <S.Form onSubmit={handleSubmit}>
                <S.InputGroup>
                    <S.Label>탈퇴 사유 (선택사항)</S.Label>
                    <S.TextArea
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        placeholder="탈퇴 사유를 입력해주세요."
                        rows={5}
                    />
                </S.InputGroup>

                <S.InputGroup>
                    <S.Label>탈퇴 확인</S.Label>
                    <S.ConfirmInput
                        type="text"
                        value={confirmText}
                        onChange={(e) => setConfirmText(e.target.value)}
                        placeholder="탈퇴를 확인하려면 '탈퇴'를 입력하세요"
                    />
                    <S.ConfirmText>
                        회원 탈퇴를 확인하려면 위 입력란에 "탈퇴"를 입력해주세요.
                    </S.ConfirmText>
                </S.InputGroup>

                <S.CheckboxWrapper>
                    <S.Checkbox
                        type="checkbox"
                        checked={isConfirmed}
                        onChange={(e) => setIsConfirmed(e.target.checked)}
                    />
                    <S.CheckboxLabel>
                        위 내용을 모두 확인했으며, 회원 탈퇴에 동의합니다.
                    </S.CheckboxLabel>
                </S.CheckboxWrapper>

                <S.ButtonGroup>
                    <S.WithdrawButton type="submit">탈퇴하기</S.WithdrawButton>
                    <S.CancelButton type="button" onClick={() => navigate('/mypage/info')}>
                        취소
                    </S.CancelButton>
                </S.ButtonGroup>
            </S.Form>
        </S.MemberWithdrawalContainer>
    );
};

export default MemberWithdrawal;
