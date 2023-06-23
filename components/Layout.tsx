import Head from 'next/head';

import { useSession } from 'next-auth/react';
import React, { ReactNode } from 'react';
import { AccessDenied } from './auth/access-denied';
import Navbar from './Navbar';
type LayoutProps = {
  children: ReactNode;
  title: string;
};

export const Layout = ({ children, title }: LayoutProps) => {
  const { data: session, status } = useSession();

  const loading = status === 'loading';

  const CommonLayoutElements = () => (
    <>
      <Head>
        <title>Trowel - {title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <link href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,400&display=swap' />
      </Head>
      <Navbar />
    </>
  );

  if (!session) {
    return (
      <>
        <CommonLayoutElements />
        <main>
          <AccessDenied />
        </main>
      </>
    );
  }

  return (
    <>
      <CommonLayoutElements />
      <main>{children}</main>
    </>
  );
};
