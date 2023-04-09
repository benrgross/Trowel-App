import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface User {
    account: {
      provider: string;
      type: string;
      id: string;
      accessToken: string;
      accessTokenExpires: string;
      refreshToken: string;
      refreshTokenExpires: string;
    };
    profile: {
      id: string;
      name: string;
      email: string;
      image: string;
      sub: string;
    };
  }
}
