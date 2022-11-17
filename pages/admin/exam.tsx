import type { NextPage } from "next";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";
import { Field, Formik, Form } from "formik";

type Consultant = {
  academic_degree: string;
  consultant_title: string;
  email: string;
  faculty: string;
  firstname: string;
  institution_name: string;
  lang: string;
  lastname: string;
  professorship: string;
  status: string;
  tablename: string;
};

type Student = {
  name: string;
};

interface Props {
  session: Session;
  consultants: Consultant[];
  students: Student[];
}

export async function getServerSideProps(ctx: any) {
  const consultants_result = await fetch(
    "http://localhost:3000/api/getConsultants",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  if (consultants_result.status !== 200) {
    console.log("error loading consultants");
    return;
  }
  const consultants = await consultants_result.json();

  const students_res = await fetch("http://localhost:3000/api/getStudents", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (consultants_result.status !== 200) {
    console.log("error loading students");
    return;
  }
  const students = await students_res.json();

  return {
    props: {
      session: await getSession(ctx),
      consultants: consultants,
      students: students,
    },
  };
}

const Exam: NextPage<Props> = (props) => {
  const initialValues = {
    student: "",
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={(values) => {}}>
        {(data) => {
          const { values } = data;
          return (
            <Form>
              <div>
                Hallgató:{" "}
                <select name="student">
                  {props.students.map((student, index) => {
                    return <option key={index}>{student.name}</option>;
                  })}
                </select>
                <br />
                Témavezető:{" "}
                <select name="consultant">
                  {props.consultants.map((consultant, index) => {
                    return (
                      <option key={index}>
                        {consultant.lastname} {consultant.firstname}
                      </option>
                    );
                  })}
                </select>
                <br />
                A téma címe: <Field value="" />
                Dátum: <select></select> óra: <select></select> Helyszín:{" "}
                <Field value="" /> <br />
                alaptárgy: <select></select>
                <br />
                melléktárgy: <select></select>
                <br />
              </div>
              <div>
                <button>Új bizottság felvétele</button>
                <button>Felkérő levelek generálása</button>
                <button>Meghívó generálása</button>
                <br />
                <button>Jegyzőkönyv generálása</button>
                <button>HTML generálása</button>
              </div>
              <div>
                <button>Mentés</button>
                <button>Mégsem</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Exam;
