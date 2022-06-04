import type { NextPage } from "next";
import { useSession, getSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { User } from "../../interfaces/interfaces";
import { Context } from "vm";
import getUsers from "../api/services/getUsers";
import Link from "next/link";
import { useState } from "react";

export async function getServerSideProps(ctx: any) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}

const Admin: NextPage = () => {
  const { data: session, status } = useSession();

  if (session && session!.role === "admin") {
    return (
      <div>
        <button onClick={() => signOut()}>Log out</button>
        <h2>Users:</h2>
        <h1>Welcome to the admin panel</h1>
        <h2>Személy létrehozása:</h2>
        <h3>Szerepköre:</h3>
        <div>
          <input type="radio" name="role" />
          <label>Témavezető / oktató</label>
          <input type="radio" name="role" />
          <label>PhD hallgató</label>
          <input type="radio" name="role" />
          <label>PhD hallgató (egyéni felkészüléses)</label>
        </div>
        <h3>Név:</h3>
        <div>
          Vezetéknév: <input type="text" />
          Keresztnév: <input type="text" />
        </div>
        <h3>Általa használt nyelv:</h3>
        <div>
          <input type="radio" name="name" />
          <label>magyar</label>
          <input type="radio" name="name" />
          <label>angol</label>
        </div>
        <h3>E-mail címe:</h3>
        <input type="text" />
      </div>
    );
  } else
    return (
      <div>
        <h1>
          You dont have permission to the admin interface. Link to user
          interface:
        </h1>
        <Link href="/user">User interface</Link>
      </div>
    );
};

export default Admin;
