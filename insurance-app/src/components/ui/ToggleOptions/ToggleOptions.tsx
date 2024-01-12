import { Table } from '@tanstack/react-table';

import { Button, Menu, cn } from 'fin-ui';
import { VscSettings } from 'react-icons/vsc';

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  label?: string;
}

export function DataTableViewOptions<TData>({
  table,
  size = 'md',
  rounded = 'lg',
  label = 'Columns',
}: DataTableViewOptionsProps<TData>) {
  return (
    <Menu>
      <Menu.Button>
        <Button
          color="light"
          rounded={rounded}
          size={size}
          variant="outline"
          leftIcon={
            <VscSettings
              className={cn('h-5 w-auto rotate-90', {
                'h-[1.1rem]': size === 'xs',
              })}
            />
          }
        >
          {label}
        </Button>
      </Menu.Button>
      <Menu.Items align="end">
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== 'undefined' && column.getCanHide()
          )
          .map((column) => {
            return (
              <Menu.CheckboxItem
                key={column.id}
                className="capitalize gap-3 flex items-center"
                checked={column.getIsVisible()}
                onCheckedChange={(checked) => column.toggleVisibility(checked)}
              >
                {column.id.replace(/_/g, ' ')}
              </Menu.CheckboxItem>
            );
          })}
      </Menu.Items>
    </Menu>
  );
}
