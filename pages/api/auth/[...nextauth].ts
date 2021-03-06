import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import SequelizeAdapter, { models } from "@next-auth/sequelize-adapter";
import { Sequelize, DataTypes } from "sequelize";
import { getToken } from "next-auth/jwt";
import { User } from "../models/User";
import getUserByEmail from "../services/getUserByEmail";
import { db, adapter } from "../db/db";

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const userData = await getUserByEmail(credentials!.email);
        const data = userData?.toJSON();
        // check if data is correct
        if (
          credentials?.email === data.email &&
          credentials?.password === data.password
        ) {
          console.log(data);
          return data;
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
        return {
          ...token,
          role: user.role,
        };
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        return {
          ...session,
          id: token.sub,
          role: token.role,
        };
      }
      return session;
    },
  },
  secret: "test",
  jwt: {
    maxAge: 10000,
  },
});
