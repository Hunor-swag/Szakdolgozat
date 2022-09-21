import React from "react";
import { getSession } from "next-auth/react";
import { NextPage } from "next";
import { Session } from "next-auth";

export async function getServerSideProps(ctx: any) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}

const User: NextPage<{ session: Session }> = (props) => {
  if (props.session) return <div>User</div>;
  else {
    return (
      <div>
        <h1>You dont have permission to the user interface.</h1>
      </div>
    );
  }
};

export default User;
