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
    role: "",
    lastname: "",
    firstname: "",
    lang: "",
    email: "",
    institution_name: "",
    faculty: "",
    professorship: "",
    consultant_title: "",
    status: "",
    academic_degree: "",
    consultant_name: "",
    consultant2_name: "",
    student_title: "",
    payment_method: "",
    date_of_admission: "",
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
              alert(JSON.stringify(values, null, 2));
              let data = {};
              let basicData = {
                firstname: values.firstname,
                lastname: values.lastname,
                lang: values.lang,
                email: values.email,
              };
              if (values.role === "Témavezető / oktató") {
                data = {
                  ...basicData,
                  tablename: "consultants",
                  institution_name: values.institution_name,
                  faculty: values.faculty,
                  professorship: values.professorship,
                  consultant_title: values.consultant_title,
                  status: values.status,
                  academic_degree: values.academic_degree,
                };
              }
              if (values.role.includes("PhD hallgató")) {
                data = {
                  ...basicData,
                  tablename: "students",
                  consultant_name: values.consultant_name,
                  consultant2_name: values.consultant2_name,
                  student_title: values.student_title,
                  payment_method: values.payment_method,
                  date_of_admission: values.date_of_admission,
                };
              }
              const rawData = await fetch(
                "http://localhost:3000/api/addPerson",
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
            }}
          >
            {(props) => {
              const { values } = props;
              return (
                <Form>
                  <BasicInfo />
                  {values.role === "Témavezető / oktató" && <ConsultantInfo />}
                  {values.role.includes("PhD hallgató") && <StudentInfo />}

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
