 import { ReactNode } from "react";

interface CalloutProps {
  variant?: 'info' | 'danger' | 'warning';
  children: ReactNode;
}

 
export default function Callout({ variant = 'info', children }: CalloutProps) {
  const variantStyles = {
    info: 'bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3',
    danger: 'border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700',
    warning: 'bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4',
  };

  return (
    <aside className={variantStyles[variant] + ' my-6'} >
      {children}
    </aside>
  );
}