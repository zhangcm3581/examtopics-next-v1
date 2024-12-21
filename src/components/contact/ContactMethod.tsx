import { CopyButton } from './CopyButton';

interface ContactMethodProps {
  icon: React.ReactNode;
  type: string;
  value: string;
}

export function ContactMethod({ icon, type, value }: ContactMethodProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="text-gray-500">
          {icon}
        </div>
        <div>
          <div className="text-sm text-gray-500">{type}</div>
          <div className="text-blue-500">{value}</div>
        </div>
      </div>
      <CopyButton text={value} />
    </div>
  );
}