import type { NextPage } from "next";
import { getSession } from "next-auth/react";
import getUsers from "../api/services/getUsers";
import { Formik, Form } from "formik";
import { Session } from "next-auth";
import ConsultantInfo from "../../components/ConsultantInfo";
import StudentInfo from "../../components/StudentInfo";
import BasicInfo from "../../components/BasicInfo";
import createConsultant from "../api/services/createConsultant";
import { useState } from "react";

interface Props {
  session: Session;
  users: string[];
}

export async function getServerSideProps(ctx: any) {
  // if (ctx.req.method === "POST") {
  //   await createConsultant(
  //     values.firstname,
  //     values.lastname,
  //     values.email,
  //     values.role,
  //     values.faculty,
  //     values.professorship,
  //     values.title,
  //     values.status,
  //     values.academic_degree
  //   );
  // }

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

const Admin: NextPage<Props> = (props) => {
  console.log(props.users);

  if (props.session && props.session!.role === "admin") {
    return (
      <>
        <h1>Admin felület</h1>
        <div className="max-w-xl">
          <h2>Személy létrehozása</h2>
          <Formik
            initialValues={{
              role: "",
              lastname: "",
              firstname: "",
              lang: "magyar",
              email: "",
              faculty: "",
              professorship: "",
              status: "",
              academic_degree: "",
              institution_name: "",
              title: "",
              consultant_name: "",
              consultant2_name: "",
              payment_method: "",
              other_payment_method: "",
              date_of_admission: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              //ide jon az adatok beillesztese az adatbazisba
            }}
          >
            {({ values }) => (
              <Form>
                <BasicInfo />
                {values.role === "Témavezető / oktató" && (
                  <ConsultantInfo institution_name="Halo" />
                )}
                {values.role.includes("PhD hallgató") && <StudentInfo />}
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
