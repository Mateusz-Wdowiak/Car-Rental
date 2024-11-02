import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  params?: any;
}