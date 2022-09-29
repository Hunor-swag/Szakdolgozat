import { Field } from "formik";
import React from "react";

const BasicInfo = () => {
  return (
    <>
      <div>
        <label>
          <Field type="radio" name="role" value="Témavezető / oktató" />
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
          name="lastname"
          placeholder="Vezetéknév"
          className="bg-gray-50 block w-full pl-3 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
        />
        <Field
          type="text"
          name="firstname"
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
    </>
  );
};

export default BasicInfo;
