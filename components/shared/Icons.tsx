import React, { ReactNode } from 'react';

export type IconParentProps = {
  children: ReactNode;
  customStyles?: string;
  clickHandler?: any;
  id?: string;
};

export type IconProps = {
  id?: string;
  color?: string;
  innerColor?: string;
  customStyles?: string;
  clickHandler?: any;
};

export const Icon = ({
  customStyles,
  children,
  id,
  clickHandler,
}: IconParentProps) => (
  <div
    aria-hidden='true'
    id={id ? id : ''}
    onClick={() => {
      if (clickHandler) clickHandler();
    }}
    className={customStyles}
  >
    {children}
  </div>
);

export const IconLightBulb = ({ color, customStyles = '' }: IconProps) => (
  <Icon customStyles={customStyles}>
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9 1C9 0.447715 8.55229 0 8 0C7.44771 0 7 0.447715 7 1V2C7 2.55228 7.44771 3 8 3C8.55229 3 9 2.55228 9 2V1Z'
        fill='#56A97F'
      />
      <path
        d='M13.6568 3.75731C14.0473 3.36678 14.0473 2.73362 13.6568 2.34309C13.2663 1.95257 12.6331 1.95257 12.2426 2.34309L11.5355 3.0502C11.145 3.44072 11.145 4.07389 11.5355 4.46441C11.926 4.85494 12.5592 4.85494 12.9497 4.46441L13.6568 3.75731Z'
        fill='#56A97F'
      />
      <path
        d='M16 8C16 8.55229 15.5523 9 15 9H14C13.4477 9 13 8.55228 13 8C13 7.44771 13.4477 7 14 7H15C15.5523 7 16 7.44771 16 8Z'
        fill='#56A97F'
      />
      <path
        d='M3.05019 4.46443C3.44071 4.85496 4.07388 4.85496 4.4644 4.46443C4.85493 4.07391 4.85493 3.44074 4.4644 3.05022L3.7573 2.34311C3.36677 1.95259 2.73361 1.95259 2.34308 2.34311C1.95256 2.73363 1.95256 3.3668 2.34308 3.75732L3.05019 4.46443Z'
        fill='#56A97F'
      />
      <path
        d='M3 8C3 8.55229 2.55228 9 2 9H1C0.447715 9 -1.19209e-07 8.55228 0 8C0 7.44771 0.447715 7 1 7H2C2.55228 7 3 7.44771 3 8Z'
        fill='#56A97F'
      />
      <path
        d='M6 14V13H10V14C10 15.1046 9.10457 16 8 16C6.89543 16 6 15.1046 6 14Z'
        fill='#56A97F'
      />
      <path
        d='M10.0009 12C10.0155 11.6597 10.2076 11.3537 10.4768 11.1411C11.4046 10.4086 12 9.27384 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 9.27384 4.59545 10.4086 5.52319 11.1411C5.79241 11.3537 5.98451 11.6597 5.99911 12H10.0009Z'
        fill='#56A97F'
      />
    </svg>
  </Icon>
);
export const IconCheck = ({
  color,
  innerColor,
  customStyles = '',
}: IconProps) => (
  <Icon customStyles={customStyles}>
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMinYMid'
    >
      <circle cx='9' cy='9' r='9' fill={color} />
      <svg width='12' height='8' viewBox='0 0 12 8' x='15%' y='30%'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M11.3661 0.234315C11.6785 0.546734 11.6785 1.05327 11.3661 1.36569L4.96608 7.76568C4.65366 8.0781 4.14712 8.0781 3.8347 7.76568L0.634705 4.56568C0.322286 4.25327 0.322286 3.74673 0.634705 3.43431C0.947125 3.1219 1.45366 3.1219 1.76608 3.43431L4.40039 6.06863L10.2347 0.234315C10.5471 -0.0781049 11.0537 -0.0781049 11.3661 0.234315Z'
          fill={innerColor ? innerColor : 'white'}
        />
      </svg>
    </svg>
  </Icon>
);

export const IconPlus = ({ color, customStyles = '' }: IconProps) => (
  <Icon customStyles={customStyles}>
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMinYMid'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.5 1.5C10.5 0.671573 9.82843 0 9 0C8.17157 0 7.5 0.671573 7.5 1.5L7.5 7.5H1.5C0.671573 7.5 0 8.17157 0 9C0 9.82843 0.671573 10.5 1.5 10.5H7.5L7.5 16.5C7.5 17.3284 8.17157 18 9 18C9.82843 18 10.5 17.3284 10.5 16.5V10.5H16.5C17.3284 10.5 18 9.82843 18 9C18 8.17157 17.3284 7.5 16.5 7.5H10.5V1.5Z'
        fill={color}
      />
    </svg>
  </Icon>
);

export const IconAlert = ({ color, customStyles = '' }: IconProps) => (
  <Icon customStyles={customStyles}>
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.3853 4.64824C13.5323 2.60928 16.4679 2.60928 17.6148 4.64823L25.9853 19.529C27.1101 21.5289 25.665 23.9998 23.3705 23.9998H6.62961C4.33513 23.9998 2.88999 21.5289 4.01488 19.529L12.3853 4.64824ZM16.4999 19.5C16.4999 20.3284 15.8284 21 14.9999 21C14.1715 21 13.4999 20.3284 13.4999 19.5C13.4999 18.6716 14.1715 18 14.9999 18C15.8284 18 16.4999 18.6716 16.4999 19.5ZM14.9999 7.5C14.1715 7.5 13.4999 8.17157 13.4999 9V13.5C13.4999 14.3284 14.1715 15 14.9999 15C15.8284 15 16.4999 14.3284 16.4999 13.5V9C16.4999 8.17157 15.8284 7.5 14.9999 7.5Z'
        fill={color}
      />
    </svg>
  </Icon>
);

export const IconDocument = ({ color, customStyles = '' }: IconProps) => (
  <Icon customStyles={customStyles}>
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M12.75 0.5H3V19.25H18V6.125L12.75 0.5Z' fill={color} />
      <path
        d='M11.2498 2.00012L16.4998 7.25012H11.2498V2.00012Z'
        fill='white'
      />
      <rect x='9.75024' y='9.12494' width='1.5' height='7.5' fill='white' />
      <rect x='6.75' y='12.1249' width='7.5' height='1.5' fill='white' />
    </svg>
  </Icon>
);

export const ChevronDown = ({ color, customStyles = '' }: IconProps) => (
  <Icon customStyles={customStyles}>
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 448 512'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMinYMid'
    >
      <path
        fill={color}
        d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'
      />
    </svg>
  </Icon>
);

export const IconX = ({ color, customStyles = '' }: IconProps) => (
  <Icon customStyles={customStyles}>
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z'
        fill={color}
      />
    </svg>
  </Icon>
);

export const SearchIcon = ({
  customStyles = '',
  id,
  clickHandler,
}: IconProps) => (
  <Icon id={id} clickHandler={clickHandler} customStyles={customStyles}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
      />
    </svg>
  </Icon>
);

export const ExitIcon = ({
  customStyles = '',
  id,
  clickHandler,
}: IconProps) => (
  <Icon id={id} clickHandler={clickHandler} customStyles={customStyles}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  </Icon>
);
