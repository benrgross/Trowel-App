import React from 'react';

interface InputTextProps {
  labelText: string;
  placeholder: string;
  value: string;
  type: string;
  onChange: (x?: any) => void;
  name?: string;
  required?: boolean;
  characterMax?: number;
}

export const inputTextStyles =
  'pt-2.5 rounded block w-full border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent text-base';

export const Input: React.FunctionComponent<InputTextProps> = ({
  labelText,
  placeholder,
  value,
  type,
  onChange,
  name,
  required,
  characterMax,
}) => {
  return (
    <label className='block'>
      <span className='block mb-1.5 text-sm md:text-base'>{labelText}</span>
      <input
        type={type}
        className={inputTextStyles}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event)}
        name={name ? name : ''}
        required={required ? required : false}
        maxLength={characterMax}
      />
    </label>
  );
};
