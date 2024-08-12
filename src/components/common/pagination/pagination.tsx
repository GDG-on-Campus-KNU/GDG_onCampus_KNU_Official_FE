import { PageBtn, PageList, PaginationProps } from './pagination.style';

const Pagination = ({
  currentPage,
  totalPages,
  currentGroup,
  onPageChange,
  onNextGroup,
  onPrevGroup,
}: PaginationProps) => {
  const pagesPerGroup = 5;
  const totalGroups = Math.ceil(totalPages / pagesPerGroup);

  const startPage = currentGroup * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);
  const PaginationArray = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <PageList>
      <PageBtn onClick={onPrevGroup} disabled={currentGroup === 0}>
        {'<<'}
      </PageBtn>
      {PaginationArray.map((page) => (
        <PageBtn
          key={page}
          onClick={() => onPageChange(page)}
          isActive={currentPage + 1 === page}
        >
          {page}
        </PageBtn>
      ))}
      <PageBtn
        onClick={onNextGroup}
        disabled={currentGroup === totalGroups - 1}
      >
        {'>>'}
      </PageBtn>
    </PageList>
  );
};

export default Pagination;
