import { useState } from 'react';

import { useSession, signIn, signOut } from 'next-auth/react';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './shared/Logo';

export default function Navbar() {
  const { data: session, status } = useSession();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const loading = status === 'loading';

  return (
    <nav className='relative flex flex-wrap items-center justify-between py-3 mb-3 bg-gradient-yellowGreen'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <div className='relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start'>
          <Logo />
          <button
            className='block px-3 py-1 text-xl leading-none text-white bg-transparent border-transparent outline-none cursor-pointer lg:hidden focus:outline-none'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <FiX className='w-6 h-6' />
            ) : (
              <FiMenu className='w-6 h-6' />
            )}
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center' +
            (navbarOpen ? 'flex border-t border-gray-medium pt-4' : ' hidden')
          }
        >
          <ul className='flex flex-col list-none lg:flex-row lg:ml-auto'>
            <li className='nav-item'>
              {!session && !loading ? (
                <a
                  className='flex items-center px-3 leading-snug cursor-pointer py-2font-bold hover:opacity-75'
                  onClick={() => signIn('google')}
                >
                  <span className='ml-2'>Sing In</span>
                </a>
              ) : (
                <button
                  className='flex items-center px-3 leading-snug cursor-pointer py-2font-bold hover:opacity-75'
                  onClick={() => signOut()}
                >
                  <span className='ml-2'>Sing Out</span>
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
