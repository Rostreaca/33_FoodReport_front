import { PageContainer, PageButton, PageNumber, Dots } from "./Pagination.style";
 
const Pagination = ({ pageInfo, onPageChange }) => {
    const { currentPage, startPage, endPage, maxPage } = pageInfo;

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <PageContainer>
            {/* 이전 버튼 */}
            <PageButton
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}>
                이전
            </PageButton>

            {/* 첫 페이지 */}
            {startPage > 1 && (
                <>
                    <PageNumber onClick={() => onPageChange(1)}>1</PageNumber>
                    {startPage > 2 && <Dots>...</Dots>}
                </>
            )}

            {/* 페이지 번호들 */}
            {pageNumbers.map((page) => (
                <PageNumber
                    key={page}
                    onClick={() => onPageChange(page)}
                    $isActive={currentPage === page}>
                    {page}
                </PageNumber>
            ))}

            {/* 마지막 페이지 */}
            {endPage < maxPage && (
                <>
                    {endPage < maxPage - 1 && <Dots>...</Dots>}
                    <PageNumber onClick={() => onPageChange(maxPage)}>
                        {maxPage}
                    </PageNumber>
                </>
            )}

            {/* 다음 버튼 */}
            <PageButton
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === maxPage}>
                다음
            </PageButton>
        </PageContainer>
    );
};

export default Pagination;