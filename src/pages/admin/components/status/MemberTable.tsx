import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState, useEffect } from 'react';

import {
  userListInterface,
  useGetUserList,
} from '@gdg/apis/hooks/admin/status/useGetUserList';
import Pagination from '@gdg/components/common/pagination/pagination';
import { columns } from '@gdg/constants/MemberTableColumns';
import { useSelectedUserStore } from '@gdg/store/useSelectedUserStore';

import {
  StyledTable,
  TableHeader,
  TableHeaderRow,
  TableCell,
  TableHeaderCell,
  TableRow,
} from './MemberTable.style';

const MemberTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentGroup, setCurrentGroup] = useState<number>(0);
  const [userList, setUserList] = useState<userListInterface | null>(null);

  const { data } = useGetUserList(currentPage, 7);
  const { selectedUsers, addSelectedUser } = useSelectedUserStore();

  useEffect(() => {
    setUserList(data ?? null);
  }, [data]);

  const totalPages = data ? data.totalPage : 0;

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

  // const [selectedUser, setSelectedUser] = useState<number[]>([]);

  // const addSelectedUser = (userId: number) => {
  //   setSelectedUser((prev) => {
  //     if (prev.includes(userId)) {
  //       return prev.filter((id) => id !== userId);
  //     } else {
  //       return [...prev, userId];
  //     }
  //   });
  // };

  const table = useReactTable({
    columns: columns(selectedUsers, addSelectedUser),
    data: userList?.data || [],
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

export default MemberTable;
