import type { NextPage } from "next";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";
import React, { ChangeEventHandler, FormEvent, useState } from "react";
import { Field, Form, Formik } from "formik";
import Link from "next/link";

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
    committee_name: "",
    committee_rank: "",
    committee_uni_name: "",
    committee_department_name: "",
    where: "",
    student_name: "",
    student_semester: "",
    student_supervisors: "",
  };
  if (props.session && props.session!.role === "admin") {
    return (
      <>
        <h1>Meghívó levél generálása</h1>
        <span>Adja meg a szükséges adatokat!</span>
        <br />
        <Formik initialValues={initialValues} onSubmit={(values) => {}}>
          {(data) => {
            const { values } = data;
            return (
              <Form>
                <h3>Meghívandó bizottsági tag:</h3>
                <Field value="" placeholder="Teljes neve" />
                <br />
                <Field value="" placeholder="Beosztása" />
                <br />
                <Field value="" placeholder="Egyetem neve" />
                <br />
                <Field value="" placeholder="Tanszék neve" />
                <br />
                <Field as="select" value="where">
                  <option>Helyben</option>
                  <option>Távolléti</option>
                </Field>
                <br />
                <h3>Hallgató:</h3>
                <Field value="" placeholder="Teljes neve" />
                <br />
                <Field value="" placeholder="Félév" />
                <br />
                <Field value="" placeholder="Témavezetők" />
                <br />
                <h3>Komplex vizsga bizottság:</h3>
                Elnök: <br />
                <Field value="" placeholder="Neve" />
                <br />
                <Field value="" placeholder="Végzettsége" />
                <br />
                <Field value="" placeholder="Beosztása" />
                <br />
                <Field value="" placeholder="Egyetem neve" />
                <br />
                Vizsgáztatók:
                <br />
              </Form>
            );
          }}
        </Formik>
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
