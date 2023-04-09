import React from 'react';

export interface IconProps {
  height?: string;
  width?: string;
  additionalClasses?: string;
  color?: string;
  bgColor?: string;
}

const ChevronDownIcon: React.FC<IconProps> = ({
  height = 'h-[6px]',
  width = 'w-[11px]',
  additionalClasses = '',
  color = 'currentColor',
  bgColor = 'bg-transparent',
}) => {
  return (
    <svg
      width='11'
      height='6'
      viewBox='0 0 11 6'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${height} ${width} ${additionalClasses}`}
    >
      <circle cx='12' cy='12' r='12' fill={bgColor} />

      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.792893 0.292893C1.18342 -0.097631 1.81658 -0.097631 2.2071 0.292893L5.49999 3.58579L8.79288 0.292893C9.1834 -0.0976311 9.81657 -0.0976311 10.2071 0.292893C10.5976 0.683417 10.5976 1.31658 10.2071 1.70711L6.2071 5.70711C5.81657 6.09763 5.18341 6.09763 4.79289 5.70711L0.792893 1.70711C0.402369 1.31658 0.402369 0.683417 0.792893 0.292893Z'
        fill={color}
      />
    </svg>
  );
};

export default ChevronDownIcon;
