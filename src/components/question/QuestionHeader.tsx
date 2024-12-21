interface QuestionHeaderProps {
  number: number;
}

export function QuestionHeader({ number }: QuestionHeaderProps) {
  return (
    <div className="bg-blue-500 text-white px-3 sm:px-4 py-2">
      <h3 className="text-sm sm:text-lg">Question #{number}</h3>
    </div>
  );
}