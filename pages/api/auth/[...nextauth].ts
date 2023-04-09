import NextAuth, { User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID as string,
      clientSecret: GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn(params) {
      const { user } = params as { user: User };
      if (user.account.provider === 'google') {
        const {
          profile: { sub, name, email, image },
        } = user;

        try {
          const existingUser = await prisma.user.findUnique({
            where: { googleId: sub },
          });

          if (existingUser) {
            return true;
          }

          const user = await prisma.user.create({
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
