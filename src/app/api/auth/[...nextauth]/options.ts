import { CommonResType, UserDataType } from "@/app/types/responseType";
import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        loginID: { label: "LoginID", type: "text", placeholder: "아이디" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "비밀번호",
        },
      },
      async authorize(credentials, req): Promise<any> {
        if (!credentials?.loginID || !credentials?.password) {
          return null;
        }

        try {
          const res = await fetch(
            `https://api.team-hummingbird.shop/api/v1/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                loginID: credentials.loginID,
                password: credentials.password,
              }),
              cache: "no-cache",
            },
          );

          const user = (await res.json()) as CommonResType<UserDataType>;
          // console.log('data', user);
          return user.result;
        } catch (error) {
          console.error("error", error);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      return true;
    },

    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token;
      return session;
    },

    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  pages: { signIn: "/sign-in", error: "/error" },
};
