import { Field } from "formik";
import { NextPage } from "next";

const StudentInfo: NextPage = () => {
  return (
    <div>
      <p>
        Témavezető:
        <Field type="text" name="consultant_name" />
      </p>
      <p>
        (Társ-témavezető):
        <Field type="text" name="consultant2_name" />
      </p>
      <p>
        Téma címe:
        <Field type="text" name="student_title" />
      </p>
      <p>
        Finanszírozási forma:
        <label>
          <Field
            type="radio"
            name="payment_method"
            value="állami önköltséges"
          />
          állami önköltséges
        </label>
        <label>
          <Field type="radio" name="payment_method" value="önköltséges" />
          önköltséges
        </label>
        <label>
          <Field
            type="radio"
            name="payment_method"
            value="Stipendium Hungaricum"
          />
          Stipendium Hungaricum
        </label>
        <label>
          <Field type="radio" name="payment_method" value="Egyéb" />
          Egyéb:
          <Field type="text" name="other_payment_method" />
        </label>
      </p>
      <p>
        Felvétel dátuma:
        <Field as="select" name="date_of_admission">
          <option></option>
        </Field>
      </p>
    </div>
  );
};

export default StudentInfo;
