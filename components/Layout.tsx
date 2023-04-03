import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex flex-col text-white bg-green-light'>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        {children}
      </div>

      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          className='flex items-center justify-center gap-2'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src='/shift-icon.png'
            alt='Shift Logo'
            width={72}
            height={72}
          />
        </a>
      </footer>
    </div>
  );
};
