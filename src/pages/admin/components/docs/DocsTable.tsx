import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState, useEffect } from 'react';

import {
  applyDocsInterface,
  useGetApplyDocs,
} from '@gdg/apis/hooks/admin/docs/useGetApplyDocs';
import { useGetSearch } from '@gdg/apis/hooks/admin/docs/useGetSearch';
import Pagination from '@gdg/components/common/pagination/pagination';
import { columns } from '@gdg/constants/DocsTableColumns';
import {
  StyledTable,
  TableHeader,
  TableHeaderRow,
  TableCell,
  TableHeaderCell,
  TableRow,
} from '@gdg/pages/admin/components/MemberTable.style';
import { getTrack } from '@gdg/components/common/select/trackSelectBar/getTrack';

import ApplyDetailModal from './ApplyDetailModal';

const DocsTable = ({
  searchName,
  trackIdx,
  isMarked,
  classYearId,
}: {
  searchName?: string | undefined;
  trackIdx: number;
  isMarked: boolean;
  classYearId: number;
}) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentGroup, setCurrentGroup] = useState<number>(0);
  const [docsList, setDocsList] = useState<applyDocsInterface | null>(null);
  const [openDetail, setOpenDetail] = useState<number | null>(null);

  const { data: docsData, refetch: refetchDocs } = useGetApplyDocs(
    getTrack(trackIdx),
    isMarked,
    currentPage,
    7,
    classYearId
  );
  const { data: searchData } = useGetSearch(searchName, currentPage, 7);

  const handleOpenModal = (id: number) => {
    setOpenDetail(id);
  };

  const handleCloseModal = () => {
    setOpenDetail(null);
    refetchDocs();
  };

  useEffect(() => {
    if (searchName) {
      setDocsList(searchData ?? null);
    } else {
      setDocsList(docsData ?? null);
    }
  }, [searchName, docsData, searchData]);

  const totalPages = docsList ? docsList.totalPage : 0;

  const handlePageChange = (page: number) => {
    setCurrentPage(page - 1);
  };

  const handleNextGroup = () => {
    if (currentGroup < Math.ceil(totalPages / 5) - 1) {
      setCurrentGroup(currentGroup + 1);
    }
  };

  const handlePrevGroup = () => {
    if (currentGroup > 0) {
      setCurrentGroup(currentGroup - 1);
    }
  };

  const table = useReactTable({
    columns: columns(),
    data: docsList?.data || [],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <StyledTable>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableHeaderRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHeaderCell key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHeaderCell>
              ))}
            </TableHeaderRow>
          ))}
        </TableHeader>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  onClick={() => handleOpenModal(cell.row.original.id)}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
      {openDetail && (
        <ApplyDetailModal id={openDetail} onClose={handleCloseModal} />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        currentGroup={currentGroup}
        onPageChange={handlePageChange}
        onNextGroup={handleNextGroup}
        onPrevGroup={handlePrevGroup}
      />
    </>
  );
};

export default DocsTable;
