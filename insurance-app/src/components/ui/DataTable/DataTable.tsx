import { NoRecords, Pagination } from '@/components/ui';
import { Table as ReactTable, flexRender } from '@tanstack/react-table';
import { Table, cn } from 'fin-ui';
import { useSession } from 'next-auth/react';
import { ComponentProps } from 'react';

type TableProps = ComponentProps<typeof Table>;
type DataTableProps<TData> = {
  table: ReactTable<TData>;
  totalRows?: number;
} & TableProps;

export const DataTable = <TbData,>(props: DataTableProps<TbData>) => {
  const { table, totalRows = 0, ...rest } = props;
  const {
    data: {
      user: { isSupervisor },
    },
  } = useSession({ required: true });
  const totalColumns = table.getAllFlatColumns().length;

  const allRows = totalRows || table.getPrePaginationRowModel().rows.length;

  return (
    <>
      <Table {...rest}>
        <Table.Head>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.TR key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.TH key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Table.TH>
              ))}
            </Table.TR>
          ))}
        </Table.Head>
        <Table.Body>
          {table.getRowModel().rows.map((row) => (
            <Table.TR
              key={row.id}
              className={cn({
                group: isSupervisor,
              })}
            >
              {row.getVisibleCells().map((cell) => (
                <Table.TD key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.TD>
              ))}
            </Table.TR>
          ))}
          {table.getRowModel().rows.length === 0 && (
            <Table.TR>
              <Table.TD colSpan={totalColumns}>
                <NoRecords />
              </Table.TD>
            </Table.TR>
          )}
        </Table.Body>
      </Table>
      {table.getPageCount() > 1 && (
        <Pagination className="border-t pt-3">
          <Pagination.Info
            allRows={allRows}
            visibleRows={table.getRowModel().rows.length}
          />
          <Pagination.Controls
            pageSize={table.getState().pagination.pageSize}
            pageIndex={table.getState().pagination.pageIndex}
            pageCount={table.getPageCount()}
            canPreviousPage={table.getCanPreviousPage()}
            canNextPage={table.getCanNextPage()}
            previousPage={table.previousPage}
            nextPage={table.nextPage}
            setPageIndex={table.setPageIndex}
            setPageSize={table.setPageSize}
          />
        </Pagination>
      )}
    </>
  );
};
