import { CommonResType, UserDataType } from '@/types/responseType';
import { NextAuthOptions, User } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        loginID: { label: 'LoginID', type: 'text', placeholder: '아이디' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '비밀번호',
        },
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials?.loginID || !credentials?.password) {
          return null;
        }

        try {
          const res = await fetch(`${process.env.BASE_API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              loginID: credentials.loginID,
              password: credentials.password,
            }),
            cache: 'no-cache',
          });
          const user = (await res.json()) as CommonResType<User>;
          console.log(user);
          return user.result;
        } catch (error) {
          console.error('error', error);
        }

        return null;
      },
    }),
    // kakao
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (profile && account) {
        try {
          const res = await fetch(
            `${process.env.BASE_API_URL}/auth/oauth/login`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                provider: account.provider,
                providerId: account.providerAccountId,
                // providerEmail: account.email
              }),
              cache: 'no-cache',
            },
          );
          const data = await res.json();
          console.log('kakao :', data);

          user.name = data.result.name;
          user.uuid = data.result.uuid;
          user.accessToken = data.result.accessToken;

          return true;
        } catch (error) {
          console.error('error', error);
          return '/register';
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token;
      session.expires = new Date(Date.now() + 10 * 60 * 1000).toISOString();
      return session;
    },

    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  pages: { signIn: '/sign-in', error: '/error' },
  secret: process.env.NEXTAUTH_SECRET,
};
