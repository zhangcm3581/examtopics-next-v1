export function Globe({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={className}
      width="16" 
      height="16" 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8 1.33333C4.3181 1.33333 1.33333 4.3181 1.33333 8C1.33333 11.6819 4.3181 14.6667 8 14.6667Z" 
        stroke="currentColor" 
        strokeWidth="1.33333" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M1.33333 8H14.6667" 
        stroke="currentColor" 
        strokeWidth="1.33333" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M8 1.33333C9.66743 3.15904 10.6151 5.52787 10.6667 8C10.6151 10.4721 9.66743 12.841 8 14.6667C6.33256 12.841 5.38487 10.4721 5.33333 8C5.38487 5.52787 6.33256 3.15904 8 1.33333Z" 
        stroke="currentColor" 
        strokeWidth="1.33333" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}