import { useState, useEffect } from 'react';

import Pagination from '@gdsc/components/common/pagination/pagination';

import { applyDocsInterface } from '@gdsc/apis/hooks/admin/useGetApplyDocs';
import { useGetSearch } from '@gdsc/apis/hooks/admin/useGetSearch';

import { columns } from './AdminTableDocs';
import styled from '@emotion/styled';
import { MemberData, Track } from '@gdsc/types/AdminInterface';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

type Props = {
  data: applyDocsInterface;
  name: string;
  track: Track | '';
  isMarked: boolean;
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

const AdminConfirmTable = ({
  data,
  currentPage,
  setCurrentPage,
  name,
  isMarked,
  track,
}: Props) => {
  const [currentGroup, setCurrentGroup] = useState<number>(0);
  const [confirmList, setConfirmList] = useState<{
    data: MemberData[];
    totalPage: number;
  } | null>(null);

  const { data: searchData } = useGetSearch(name, currentPage, 10);

  useEffect(() => {
    let filteredData = data?.data || [];

    if (isMarked) {
      filteredData = filteredData.filter((item) => item.marked);
    }

    if (track) {
      filteredData = filteredData.filter((item) => item.track === track);
    }

    if (Array.isArray(searchData?.data)) {
      let searchFilteredData = searchData.data;

      if (isMarked) {
        searchFilteredData = searchFilteredData.filter((item) => item.marked);
      }

      if (track) {
        searchFilteredData = searchFilteredData.filter(
          (item) => item.track === track
        );
      }

      setConfirmList({
        data: searchFilteredData,
        totalPage: Math.ceil(searchFilteredData.length / 10),
      });
    } else {
      setConfirmList({
        data: filteredData,
        totalPage: Math.ceil(filteredData.length / 10),
      });
    }
  }, [searchData, data, isMarked, track]);

  const totalPages = confirmList?.totalPage ?? 0;

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
