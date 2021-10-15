import { Button } from '@mui/material';
import React from 'react';
export interface ButtonProps {
  variant: 'text' | 'contained' | 'outlined' | undefined;
  children: string;
}

export const ButtonCustome = ({ variant, children }: ButtonProps) => {
  return <Button variant={variant}>{children}</Button>;
};
