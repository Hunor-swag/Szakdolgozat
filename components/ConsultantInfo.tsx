import React from "react";
import { Field } from "formik";
import { NextPage } from "next";

interface Props {
  institution_name: string;
}

const ConsultantInfo: NextPage<Props> = (props: Props) => {
  return (
    <div>
      <label>Intézmény hosszú neve:</label>
      <Field as="select" name="institution_name">
        <option value=""></option>
        <option value={props.institution_name}>{props.institution_name}</option>
      </Field>
      <br />
      <label>Kar neve:</label>
      <select name="faculty" id=""></select>
      <br />
      <label>Tanszék neve:</label>
      <select name="professorship" id=""></select>
      <br />
      <label>Címe:</label>
      <Field type="text" name="title" />
      <br />
      <label>Beosztás:</label>
      <select name="status"></select>
      <br />
      <label>Tudományos fokozat:</label>
      <Field as="select" name="academic_degree">
        <option>---</option>
        <option>PhD</option>
        <option>DSc</option>
      </Field>
      <br />
    </div>
  );
};

export default ConsultantInfo;
