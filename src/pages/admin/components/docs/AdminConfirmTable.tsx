import { useState, useEffect, lazy } from 'react';

import { applyDocsInterface } from '@gdsc/apis/hooks/admin/docs/useGetApplyDocs';
import { useGetSearch } from '@gdsc/apis/hooks/admin/docs/useGetSearch';

import {
  StyledTable,
  TableHeader,
  TableHeaderRow,
  TableCell,
  TableHeaderCell,
  TableRow,
} from '../MemberTable.style';
import { columns } from './AdminTableDocs';
import { MemberData, Track } from '@gdsc/types/AdminInterface';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

const ApplyDetailModal = lazy(() => import('./ApplyDetailModal'));
const Pagination = lazy(
  () => import('@gdsc/components/common/pagination/pagination')
);

type Props = {
  data: applyDocsInterface;
  name: string;
  track: Track | '';
  isMarked: boolean;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

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
  const [openDetail, setOpenDetail] = useState<number | null>(null);

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
        totalPage: searchData.totalPage,
      });
    } else {
      setConfirmList({
        data: filteredData,
        totalPage: data.totalPage,
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

  const handleOpenModal = (id: number) => {
    setOpenDetail(id);
  };

  const handleCloseModal = () => {
    setOpenDetail(null);
    window.location.reload();
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

export default AdminConfirmTable;
