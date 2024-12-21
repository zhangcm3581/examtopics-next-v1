interface AnswerButtonProps {
  onToggle: (show: boolean) => void;
  isShowing: boolean;
}

export function AnswerButton({ onToggle, isShowing }: AnswerButtonProps) {
  const buttonStyles = isShowing
    ? "bg-white text-blue-500 border border-blue-500 hover:bg-blue-50"
    : "bg-blue-500 text-white hover:bg-blue-600";

  return (
    <button
      onClick={() => onToggle(!isShowing)}
      className={`px-4 py-2 text-sm rounded-md transition-colors ${buttonStyles}`}
    >
      {isShowing ? '隐藏答案' : '显示答案'}
    </button>
  );
}