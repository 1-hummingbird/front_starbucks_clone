import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        loginId: { label: "LoginId", type: "text", placeholder: "아이디" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "비밀번호",
        },
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials?.loginId || !credentials?.password) {
          return null;
        }

        console.log(credentials);
        try {
          const res = await fetch(
            "https://api.team-hummingbird.shop/api/v1/auth/login",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                loginId: credentials.loginId,
                password: credentials.password,
              }),
              cache: "no-cache",
            },
          );
          const user = await res.json();
          console.log(user);
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
      if (profile && account) {
        try {
          const res = await fetch(
            `${process.env.BASE_API_URL}/auth/oauth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                provider: account.provider,
                providerId: account.providerAccountId,
              }),
              cache: "no-cache",
            },
          );
          const data = await res.json();
          console.log(data);

          user.name = data.result.name;
          user.uuid = data.result.uuid;
          user.accessToken = data.result.accessToken;

          return true;
        } catch (error) {
          console.error("error", error);
          return "/register";
        }
      }
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
  secret: process.env.NEXTAUTH_SECRET,
};
