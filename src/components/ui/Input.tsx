'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  label: string;
  as?: 'input' | 'select';
}

export const Input = ({ label, as = 'input', className = '', ...props }: InputProps) => {
  const baseStyles = "w-full bg-transparent border-b border-accent/20 py-4 focus:border-accent outline-none transition-colors appearance-none text-accent font-light";
  
  return (
    <div className="space-y-2 group">
      <label className="text-[10px] tracking-widest uppercase font-bold opacity-60 group-focus-within:opacity-100 transition-opacity">
        {label}
      </label>
      {as === 'input' ? (
        <input className={`${baseStyles} ${className}`} {...(props as React.InputHTMLAttributes<HTMLInputElement>)} />
      ) : (
        <select className={`${baseStyles} ${className}`} {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)} />
      )}
    </div>
  );
};
