import React, { useState, useEffect } from 'react';

export interface Links {
  self: string;
  first: string;
  next: string;
  last: string;
}

interface PaginationProps {
  links: Partial<Links>;
  onPageSelect: (pageNumber: number) => void;
  currentPage: number;
  visiblePages?: number;
}

export const extractPageNumber = (url: string) =>
  parseInt(url.match(/page=(\d+)/)?.[1] ?? '', 10) || 0;

const Pagination: React.FC<PaginationProps> = ({
  links,
  onPageSelect,
  currentPage,
  visiblePages = 5,
}) => {
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    if (links && links.last) {
      const lastPage = extractPageNumber(links.last);
      const pageNumbers = Array.from({ length: lastPage }, (_, i) => i + 1);
      setPages(pageNumbers);
    }
  }, [links]);

  const handleClick = (pageNumber: number) => {
    onPageSelect(pageNumber);
  };

  const limitedPages = (pages: number[]) => {
    if (pages.length <= visiblePages + 1) {
      return pages;
    }

    const middlePages = pages.slice(
      Math.max(1, currentPage - Math.ceil(visiblePages / 2)),
      Math.min(currentPage + Math.floor(visiblePages / 2), pages.length - 1)
    );

    const startPages = middlePages[0] > 2 ? [1, -1] : [1];
    const endPages =
      middlePages[middlePages.length - 1] < pages.length - 2
        ? [-1, pages.length]
        : [pages.length];

    return [...startPages, ...middlePages, ...endPages];
  };

  return (
    <div className='flex justify-center mt-5 space-x-2'>
      {limitedPages(pages).map((page, index) =>
        page === -1 ? (
          <button
            key={`ellipsis-${index}`}
            onClick={() =>
              handleClick(
                limitedPages(pages)[index - 1] + Math.ceil(visiblePages / 2)
              )
            }
            className='px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50'
          >
            ...
          </button>
        ) : (
          <button
            key={page}
            onClick={() => handleClick(page)}
            className={`px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${
              currentPage === page ? 'text-blue-mediumLight' : ''
            }`}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
};

export default Pagination;
