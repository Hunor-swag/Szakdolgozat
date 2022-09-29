import type { NextPage } from "next";
import { signOut, getSession, useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { disconnect } from "process";
import LinkButton from "../components/LinkButton";
import Link from "next/link";

export async function getServerSideProps(ctx: any) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}

const Home: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div>
      <h1>HomePage</h1>
      {session ? (
        <>
          <button onClick={() => signOut()}>Log out</button>
          <p>You are currently signed in</p>
        </>
      ) : (
        <>
          <p>You are currently signed out</p>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </div>
  );
};

export default Home;
