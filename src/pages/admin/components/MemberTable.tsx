//import { useState } from 'react';
import { columns } from '@gdsc/constants/MemberTableColumns';

import { PersonData, tableData } from '../PeopleData';
import {
  StyledTable,
  TableHeader,
  TableHeaderRow,
  TableCell,
  TableHeaderCell,
  TableRow,
} from './MemberTable.style';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

const MemberTable = () => {
  //const [data, setData] = useState<PersonData[]>([...tableData.data]);
  const data: PersonData[] = [...tableData.data];

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
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
  );
};

export default MemberTable;
