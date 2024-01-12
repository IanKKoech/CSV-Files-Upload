import { Column } from '@tanstack/react-table';
import { RxCaretSort } from 'react-icons/rx';

export const SortableHeader = <TbData, TValue>({
  column,
  columnName,
}: {
  column: Column<TbData, TValue>;
  columnName: string;
}) => (
  <a
    onClick={() => {
      column.toggleSorting(column.getIsSorted() === 'asc');
    }}
    className="relative left-[2px] inline-table cursor-pointer"
  >
    <span className="flex items-center gap-1">
      {columnName}
      <RxCaretSort
        strokeWidth={0.3}
        className="relative h-[0.9rem] w-auto -top-[0.4px] print:hidden"
      />
    </span>
  </a>
);
