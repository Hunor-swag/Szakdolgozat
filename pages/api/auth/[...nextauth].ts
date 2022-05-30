import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import SequelizeAdapter, { models } from "@next-auth/sequelize-adapter";
import { Sequelize, DataTypes } from "sequelize";
import { getToken } from "next-auth/jwt";
import { User } from "../models/User";
import getUserByEmail from "../getUserByEmail";

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = await getUserByEmail(credentials!.email);
        const data = user?.toJSON();

        // check if data is correct
        if (
          credentials?.email === data.email &&
          credentials?.password === data.password
        ) {
          return {
            user,
          };
        }
        //login failed
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  secret: "test",
  jwt: {
    maxAge: 10000,
  },
});
