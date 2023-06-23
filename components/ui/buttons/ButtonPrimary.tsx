import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  additionalClasses?: string;
  fontSize?: string;
  padding?: string;
  fontWeight?: string;
  fontColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  additionalClasses,
  fontSize = 'text-md',
  padding = 'py-3 px-6',
  fontWeight = 'font-normal',
  fontColor = 'text-white',
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-green-moss hover:bg-green-olive ${fontColor} ${fontWeight} transition duration-200 ease-in-out ${fontSize} ${padding} rounded-md shadow-sm ${additionalClasses}`}
    >
      {text}
    </button>
  );
};

export default Button;
