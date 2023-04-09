import NextAuth, { Account, Profile, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, NEXT_AUTH_SECRET } =
  process.env;
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID as string,
      clientSecret: GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  secret: NEXT_AUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn(params) {
      const { account } = params as { account: Account };
      const { profile } = params as { profile: Profile };
      if (account.provider === 'google' && profile.email) {
        const { sub, name, email, image } = profile;
        try {
          const existingUser = await prisma.user.findUnique({
            where: { googleId: sub },
          });

          if (existingUser) {
            return true;
          }

          await prisma.user.create({
            data: {
              name: name,
              email: email,
              image: image,
              googleId: sub,
            },
          });

          return true;
        } catch (error) {
          console.error('Error during sign in:', error);
          return false;
        }
      }
      return false;
    },
  },
});
