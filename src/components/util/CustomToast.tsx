import { Check, X } from 'lucide-react';

export interface CustomToastProps {
  message: string;
  iconType: 'success' | 'error';
}

const CustomToast = ({ message, iconType }: CustomToastProps) => {
  const icon =
    iconType === 'success' ? (
      <Check size={26} color="white" className="rounded-full bg-[#18c00c]" />
    ) : (
      <X size={26} color="white" className="rounded-full bg-[#f50000]" />
    );

  return (
    <div className="flex items-center gap-4">
      {icon}
      <p className="text-lg">{message}</p>
    </div>
  );
};

export default CustomToast;
