import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label,  ...props }) => {
  return (
    <div className="flex items-center">
      <div className="relative flex items-center">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer"
          {...props}
        />
        {label && (
          <label 
            className="ml-2 block text-sm text-gray-700 cursor-pointer" 
            htmlFor={props.id}
          >
            {label}
          </label>
        )}
      </div>
    </div>
  );
};

export default Checkbox;