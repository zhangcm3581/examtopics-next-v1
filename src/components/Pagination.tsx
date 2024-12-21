'use client';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const buttonBaseStyles = "flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors";
  const activeButtonStyles = "bg-green-500 text-white hover:bg-green-600";
  const disabledButtonStyles = "bg-gray-200 text-gray-400 cursor-not-allowed";

  return (
    <div className="flex items-center justify-between">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${buttonBaseStyles} ${
          currentPage === 1 ? disabledButtonStyles : activeButtonStyles
        }`}
      >
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 19l-7-7 7-7" 
          />
        </svg>
        上一页
      </button>

      <div className="text-center">
        <p className="text-sm text-gray-500">
          第 <span className="font-medium">{currentPage}</span> 页
          <span className="mx-1">,</span>
          共 <span className="font-medium">{totalPages}</span> 页
        </p>
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${buttonBaseStyles} ${
          currentPage === totalPages ? disabledButtonStyles : activeButtonStyles
        }`}
      >
        下一页
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </button>
    </div>
  );
}