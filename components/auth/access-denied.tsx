import { signIn } from 'next-auth/react';

export const AccessDenied = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full mt-4'>
      <p className='my-5'>Please sign in to continue</p>

      <button onClick={() => signIn('google')}>Sign In</button>
    </div>
  );
};
