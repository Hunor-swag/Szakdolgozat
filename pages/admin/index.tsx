import type { NextPage } from "next";
import { useSession, getSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { Context } from "vm";
import getUsers from "../api/services/getUsers";
import Link from "next/link";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import LinkButton from "../../components/LinkButton";
import { User } from "../api/models/User";
import getUserByEmail from "../api/services/getUserByEmail";
import { Session } from "next-auth";
import { UserInterface } from "../../interfaces/interfaces";

export async function getServerSideProps(ctx: any) {
  let users = await getUsers();
  return {
    props: {
      session: await getSession(ctx),
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}

const handleRadioClick = (e: Event) => {
  const target = e.target as HTMLInputElement;
  console.log(target.value + " set as role.");
};

const Admin: NextPage<{ session: Session; users: string[] }> = (props) => {
  if (props.session && props.session!.role === "admin") {
    return (
      <>
        <h1>Admin felület</h1>
        <div className="max-w-xl">
          <h2>Személy létrehozása</h2>
          <Formik
            initialValues={{
              role: "",
              lang: "",
            }}
            onSubmit={(values, { setSubmitting }) => {}}
          >
            {({ values }) => (
              <Form>
                <div>
                  <label>
                    <Field
                      type="radio"
                      name="role"
                      value="Témavezető / oktató"
                    />
                    Témavezető / oktató
                  </label>
                  <label>
                    <Field type="radio" name="role" value="PhD hallgató" />
                    PhD hallgató
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="role"
                      value="PhD hallgató (egyéni felkészüléses)"
                    />
                    PhD hallgató (egyéni felkészüléses)
                  </label>
                  {/* <div>Kivalasztott: {values.role}</div> */}
                </div>
                <div>
                  <Field
                    type="text"
                    name="veznev"
                    placeholder="Vezetéknév"
                    className="bg-gray-50 block w-full pl-3 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
                  />
                  <Field
                    type="text"
                    name="kernev"
                    placeholder="Keresztnév"
                    className="bg-gray-50 block w-full pl-3 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
                  />
                </div>
                <div>
                  Általa használt nyelv: <br />
                  <label>
                    <Field type="radio" name="lang" value="magyar" />
                    magyar
                  </label>
                  <label>
                    <Field type="radio" name="lang" value="angol" />
                    angol
                  </label>
                  {/* <div>Kiválasztott:{values.lang}</div> */}
                </div>
                <div>
                  <Field type="text" name="email" placeholder="E-mail címe" />
                </div>
                {values.role === "Témavezető / oktató" ? (
                  <div>
                    <label>Intézmény hosszú neve:</label>
                    <select name="" id=""></select>
                    <br />
                    <label>Kar neve:</label>
                    <select name="kar" id=""></select>
                    <br />
                    <label>Tanszék neve:</label>
                    <br />
                    <label>Címe:</label>
                    <br />
                    <label>Beosztás:</label>
                    <br />
                    <label>Tudományos fokozat:</label>
                    <select name="tud_fok" id="">
                      <option>---</option>
                      <option>PhD</option>
                      <option>DSc</option>
                    </select>
                    <br />
                  </div>
                ) : (
                  <div>hallgato</div>
                )}
                <button>Submit</button>
                <br />
              </Form>
            )}
          </Formik>
        </div>
      </>
    );
  } else
    return (
      <div>
        <h1>You dont have permission to the admin interface.</h1>
      </div>
    );
};

export default Admin;
