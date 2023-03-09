import type { NextPage } from "next";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";
import React, { ChangeEventHandler, FormEvent, useState } from "react";
import { Field, Form, Formik, useField } from "formik";
import Link from "next/link";
import DatePicker from "react-datepicker";

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

const MyDatePicker = ({ name = "" }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <DatePicker
      {...field}
      selected={value}
      onChange={(date: Date) => setValue(date)}
    />
  );
};

const Admin: NextPage<Props> = (props) => {
  const [examiners, setExaminers] = useState([
    { name: "", degree: "", position: "", uni_name: "", subject_name: "" },
  ]);

  const [members, setMembers] = useState([
    { name: "", degree: "", position: "", uni_name: "" },
  ]);

  const handleRemoveExaminer = () => {
    if (examiners.length > 1) {
      let newArr = [...examiners];
      newArr.splice(newArr.length - 1, 1);
      setExaminers(newArr);
    }
  };

  const handleAddExaminer = () => {
    setExaminers([
      ...examiners,
      { name: "", degree: "", position: "", uni_name: "", subject_name: "" },
    ]);
  };

  const handleRemoveMember = () => {
    if (members.length > 1) {
      let newArr = [...members];
      newArr.splice(newArr.length - 1, 1);
      setMembers(newArr);
    }
  };

  const handleAddMember = () => {
    setMembers([
      ...members,
      { name: "", degree: "", position: "", uni_name: "" },
    ]);
  };

  const initialValues = {
    committee_name: "",
    committee_rank: "",
    committee_uni_name: "",
    committee_department_name: "",
    where: "",
    student_name: "",
    student_semester: "",
    student_supervisors: "",
    date: new Date(),
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
                <button onClick={handleAddExaminer}>Hozzáadás</button>
                <button onClick={handleRemoveExaminer}>Törlés</button>
                <br />
                {examiners.map((examiner, index) => {
                  return (
                    <>
                      {index + 1}. vizsgáztató:
                      <br />
                      <Field
                        value={examiner.name}
                        placeholder="Neve"
                        key={index}
                      />
                      <br />
                      <Field
                        value={examiner.degree}
                        placeholder="Végzettsége"
                        key={index}
                      />
                      <br />
                      <Field
                        value={examiner.position}
                        placeholder="Beosztása"
                        key={index}
                      />
                      <br />
                      <Field
                        value={examiner.uni_name}
                        placeholder="Egyetem rövid neve"
                        key={index}
                      />
                      <br />
                      <Field
                        value={examiner.subject_name}
                        placeholder="Tárgy neve"
                        key={index}
                      />
                      <br />
                    </>
                  );
                })}
                Tagok:
                <button onClick={handleAddMember}>Hozzáadás</button>
                <button onClick={handleRemoveMember}>Törlés</button>
                <br />
                {members.map((member, index) => {
                  return (
                    <>
                      {index + 1}. tag:
                      <br />
                      <Field
                        value={member.name}
                        placeholder="Neve"
                        key={index}
                      />
                      <br />
                      <Field
                        value={member.degree}
                        placeholder="Végzettsége"
                        key={index}
                      />
                      <br />
                      <Field
                        value={member.position}
                        placeholder="Beosztása"
                        key={index}
                      />
                      <br />
                      <Field
                        value={member.uni_name}
                        placeholder="Egyetem rövid neve"
                        key={index}
                      />
                      <br />
                    </>
                  );
                })}
                Online vizsga esetén link: <br />
                <Field value="" placeholder="Link" />
                <br />
                Időpont: <br />
                <div className="form-group">
                  <MyDatePicker name="date" />
                </div>
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
