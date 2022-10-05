import { Field } from "formik";
import { NextPage } from "next";

const ConsultantInfo: NextPage = () => {
  return (
    <div>
      <label>Intézmény hosszú neve:</label>
      <Field as="select" name="institution_name">
        <option value=""></option>
      </Field>
      <br />
      <label>Kar neve:</label>
      <Field as="select" name="faculty" id=""></Field>
      <br />
      <label>Tanszék neve:</label>
      <Field as="select" name="professorship"></Field>
      <br />
      <label>Címe:</label>
      <Field type="text" name="consultant_title" />
      <br />
      <label>Beosztás:</label>
      <Field as="select" name="status"></Field>
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
