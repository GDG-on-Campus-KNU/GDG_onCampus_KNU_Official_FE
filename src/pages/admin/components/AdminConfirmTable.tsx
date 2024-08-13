import { useState, useEffect } from 'react';

import Pagination from '@gdsc/components/common/pagination/pagination';

import { applyDocsInterface } from '@gdsc/apis/hooks/admin/useGetApplyDocs';

import { columns } from './AdminTableDocs';
import styled from '@emotion/styled';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

type Props = {
  data: applyDocsInterface;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 30px 0px;
`;

const TableHeader = styled.thead`
  height: 59px;
  background-color: rgba(255, 255, 255, 0.7);
  color: var(--color-halti);
  white-space: nowrap;
  text-align: left;
`;

const TableHeaderRow = styled.tr`
  border-bottom: none;
`;

const TableCell = styled.td`
  height: 59px;
  border: none;
  white-space: nowrap;
  font-size: 14px;

  &:first-of-type {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    padding-left: 10px;
  }

  &:last-of-type {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    padding-right: 10px;
  }
`;

const TableHeaderCell = styled.th`
  border: none;
  width: 1rem;
  &:first-of-type {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  &:last-of-type {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const AdminConfirmTable = ({ data, currentPage, setCurrentPage }: Props) => {
  // const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentGroup, setCurrentGroup] = useState<number>(0);
  const [confirmList, setConfirmList] = useState<applyDocsInterface | null>(
    null
  );

  useEffect(() => {
    setConfirmList(data ?? null);
  }, [data]);

  const totalPages = data?.totalPage ?? 0;

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
    data: confirmList?.data || [],
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
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
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

export default AdminConfirmTable;
