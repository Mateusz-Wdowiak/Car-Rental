import { ReactNode } from 'react';

export interface InfoboxProps {
  icon: ReactNode;
  description: string;
  title: string;
  className?: string;
}
