'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: 'bg-primary text-accent hover:bg-primary/90',
    outline: 'border border-primary/20 text-primary hover:bg-primary/5',
    accent: 'bg-accent text-primary hover:bg-white shadow-xl',
  };

  const sizes = {
    sm: 'px-6 py-3 text-[10px]',
    md: 'px-10 py-4 text-xs',
    lg: 'px-14 py-6 text-sm',
  };

  return (
    <button
      className={`
        uppercase tracking-[0.2em] font-bold transition-all duration-300 
        ${variants[variant]} 
        ${sizes[size]} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
