import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { User } from "./api/models/User";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  // console.log("session", session);

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
          <button
            onClick={() => {
              router.push("/api/auth/signin");
            }}
          >
            Sign in
          </button>
          <p>You are currently signed out</p>
        </>
      )}
    </div>
  );
};

export default Home;
