import Link from 'next/link';
import { useState } from 'react';
import { navButtonStyles } from './Header';
import ChevronDownIcon from './icons/ChevronDownIcon';
export const DropdownPanel = ({ links }: any): JSX.Element | null => {
  return (
    <ul
      key={`${links[0].linkLabel}-dropdown`}
      className='flex flex-col w-full h-full bg-white gap-y-8'
    >
      {links.map(({ linkLabel, linkUrl, description, icon }: any) => {
        return linkLabel ? (
          <li key={linkLabel} className='w-full font-sans group'>
            <Link href={linkUrl}>
              <div className='grid gap-x-5 grid-cols-[25px_1fr] text-left'>
                {icon}
                <div>
                  <p className='text-base font-ttHovesMedium group-hover:text-nptDGreen'>
                    {linkLabel}
                  </p>
                  <p>{description}</p>
                </div>
              </div>
            </Link>
          </li>
        ) : null;
      })}
    </ul>
  );
};
export const NavDropdown = ({
  header,
  buttonSections,
}: {
  header: string;
  buttonSections: any[];
}): JSX.Element => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hidden, setHidden] = useState(true);
  return (
    <div
      onMouseEnter={() => {
        setDropdownOpen(true);
        setHidden(false);
      }}
      onMouseLeave={() => {
        setDropdownOpen(false);

        const timer = setTimeout(() => {
          setHidden(true);
        }, 250);

        return () => clearTimeout(timer);
      }}
      key={`nav-${header}-button`}
      className='relative flex items-center h-full bg-white'
    >
      <button
        type='button'
        onClick={() => {
          setDropdownOpen(true);
          setHidden(false);
        }}
        className={`${navButtonStyles} h-full flex items-center gap-x-[13px]`}
      >
        {header}
        <ChevronDownIcon />
      </button>
      <div
        onFocus={() => {
          setDropdownOpen(true);
          setHidden(false);
        }}
        onBlur={() => {
          setDropdownOpen(false);
          setHidden(true);
        }}
        className={`${hidden ? ` focus-within:grid` : ''} ${
          dropdownOpen
            ? 'grid grid-flow-col gap-8 bg-white p-8 shadow-lg  max-h-700 rounded-lg ring-1 ring-black ring-opacity-5'
            : 'max-h-0 max-w-0'
        } box top-[90%] absolute overflow-hidden  w-[478px] transition-opacity duration-100 right-1/2 translate-x-1/2 `}
      >
        {buttonSections.map((section: any) => {
          return DropdownPanel(section);
        })}
      </div>
    </div>
  );
};
