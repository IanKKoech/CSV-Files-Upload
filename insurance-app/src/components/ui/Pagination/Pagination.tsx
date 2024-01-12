import { Box, Button, Flex, Menu, Text, cn } from 'fin-ui';
import { ReactNode } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import {
  RxCaretSort,
  RxDoubleArrowLeft,
  RxDoubleArrowRight,
} from 'react-icons/rx';

export type PaginationProps = {
  pageSize: number;
  pageIndex: number;
  pageCount: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
  previousPage: () => void;
  nextPage: () => void;
  setPageIndex: (index: number) => void;
  setPageSize: (size: number) => void;
  className?: string;
};

const Controls = ({
  pageSize,
  pageIndex,
  pageCount,
  canPreviousPage,
  canNextPage,
  previousPage,
  nextPage,
  setPageIndex,
  setPageSize,
  className,
}: PaginationProps) => (
  <Flex align="center" gap={12} className={className}>
    <Flex align="center" gap={12}>
      <Flex align="center" gap={3}>
        <Text>Rows per page</Text>
        <Menu>
          <Menu.Button>
            <Button
              size="xs"
              color="light"
              type="button"
              variant="outline"
              rounded="md"
              className="px-4 gap-2"
              rightIcon={
                <RxCaretSort
                  strokeWidth={0.3}
                  className="relative -top-[0.4px]"
                />
              }
            >
              {pageSize}
            </Button>
          </Menu.Button>
          <Menu.Items className="w-36">
            {[15, 20, 30, 50].map((size) => (
              <Menu.Item
                onClick={() => setPageSize(size)}
                key={size}
                className={cn('py-2 flex items-center justify-between', {
                  'bg-primary/20 dark:bg-primary/10 hover:bg-primary dark:hover:bg-primary':
                    pageSize === size,
                })}
              >
                {size}
                {pageSize === size && <BsCheckLg />}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </Flex>

      <Text>
        Page {pageIndex + 1} of {pageCount}
      </Text>
    </Flex>
    <Flex align="center" gap={2}>
      <Button
        variant="outline"
        rounded="md"
        type="button"
        color="light"
        className="aspect-square"
        size="xs"
        leftIcon={
          <RxDoubleArrowLeft className="h-5 w-auto" strokeWidth={0.3} />
        }
        onClick={() => setPageIndex(0)}
        disabled={!canPreviousPage}
      >
        <span className="sr-only">First page</span>
      </Button>
      <Button
        variant="outline"
        color="light"
        type="button"
        rounded="md"
        className="aspect-square"
        size="xs"
        rightIcon={<RiArrowLeftSLine className="h-6 w-auto" />}
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      >
        <span className="sr-only">Previous page</span>
      </Button>
      <Button
        variant="outline"
        rounded="md"
        type="button"
        className="aspect-square"
        color="light"
        rightIcon={<RiArrowRightSLine className="h-6 w-auto" />}
        size="xs"
        onClick={() => nextPage()}
        disabled={!canNextPage}
      >
        <span className="sr-only">Next page</span>
      </Button>
      <Button
        variant="outline"
        color="light"
        rounded="md"
        type="button"
        className="aspect-square"
        size="xs"
        rightIcon={
          <RxDoubleArrowRight className="h-5 w-auto" strokeWidth={0.3} />
        }
        onClick={() => setPageIndex(pageCount - 1)}
        disabled={!canNextPage}
      >
        <span className="sr-only">Last page</span>
      </Button>
    </Flex>
  </Flex>
);

const Info = ({
  visibleRows,
  allRows,
  className,
}: {
  visibleRows: number;
  allRows: number;
  className?: string;
}) => (
  <Box className={className}>
    <Text color="muted" className="pl-[2px]">
      Showing {visibleRows} of {allRows} records
    </Text>
  </Box>
);

export const Pagination = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <Flex
    gap={2}
    align="center"
    justify="between"
    className={cn('border-tertiary-50/80 dark:border-secondary-200', className)}
  >
    {children}
  </Flex>
);

Pagination.Controls = Controls;
Pagination.Info = Info;
