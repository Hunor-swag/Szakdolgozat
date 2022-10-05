import type { NextPage } from "next";
import { signOut, getSession, useSession, signIn } from "next-auth/react";

export async function getServerSideProps(ctx: any) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h1>HomePage</h1>
      {session ? (
        <>
          <p>You are currently signed in</p>
          <button onClick={() => signOut()}>Sign out</button>
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
