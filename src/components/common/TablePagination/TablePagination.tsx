'use client';

import React from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { TablePaginationProps } from '@/types/components/common';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

/**
 * TablePagination component
 * @description A pagination component for tables
 */
export const TablePagination = ({ rowsPerPage, totalRows, currentPage }: TablePaginationProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const getPaginationRange = () => {
    const delta = 2; // Number of pages to show around the current page
    const range = [];
    for (
      let i = Math.max(1, currentPage - delta);
      i <= Math.min(totalPages, currentPage + delta);
      i++
    ) {
      range.push(i);
    }
    return range;
  };

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page >= 1 && page <= totalPages) {
      params.set('page', String(page));
      replace(`${pathname}?${params.toString()}`);
    }
  };

  const paginationRange = getPaginationRange();
  return (
    <Pagination>
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious href='#' onClick={() => handlePageChange(currentPage - 1)} />
        </PaginationItem>

        {/* First Page Link */}
        {currentPage > 3 && (
          <>
            <PaginationItem>
              <PaginationLink href='#' onClick={() => handlePageChange(1)}>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}

        {/* Dynamic Pagination Links */}
        {paginationRange.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href='#'
              onClick={() => handlePageChange(page)}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Last Page Link */}
        {currentPage < totalPages - 2 && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#' onClick={() => handlePageChange(totalPages)}>
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext href='#' onClick={() => handlePageChange(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
