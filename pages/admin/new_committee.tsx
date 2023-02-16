import type { NextPage } from "next";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";
import React, { ChangeEventHandler, FormEvent, useState } from "react";
import { Field, Form, Formik } from "formik";
import ConsultantInfo from "../../components/ConsultantInfo";
import StudentInfo from "../../components/StudentInfo";
import BasicInfo from "../../components/BasicInfo";

interface Props {
  session: Session;
}

export async function getServerSideProps(ctx: any) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}

const Admin: NextPage<Props> = (props) => {
  const initialValues = {
    lastname: "",
    firstname: "",
    email: "",
    institution_name: "",
    faculty: "",
  };

  if (props.session && props.session!.role === "admin") {
    return (
      <>
        <h1>Admin felület</h1>
        <div className="max-w-xl">
          <h2>Személy létrehozása</h2>

          <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
              console.log(values);
              // alert(JSON.stringify(values, null, 2));
              let data = {
                lastname: values.lastname,
                firstname: values.firstname,
                email: values.email,
                institution_name: values.institution_name,
                faculty: values.faculty,
              };
              const rawData = await fetch(
                "http://localhost:3000/api/addCommittee",
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
                }
              );
              const res = await rawData.json();
              console.log(res);
              alert("New committee added!");
            }}
          >
            {(props) => {
              const { values } = props;
              return (
                <Form>
                  <div>
                    <h1>Add committee</h1>
                    <br />
                    Firstname:
                    <Field type="text" name="firstname" />
                    <br />
                    Lastname:
                    <Field type="text" name="lastname" />
                    <br />
                    Email:
                    <Field type="text" name="email" />
                    <br />
                    Institution_name:
                    <Field type="text" name="institution_name" />
                    <br />
                    Faculty:
                    <Field type="text" name="faculty" />
                    <br />
                  </div>

                  <button type="submit">Submit</button>
                </Form>
              );
            }}
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
