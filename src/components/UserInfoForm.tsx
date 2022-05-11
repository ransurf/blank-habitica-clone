import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo } from "../slices/userInfo";

import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  FormikProvider,
  ErrorMessage,
} from "formik";

interface MyFormValues {
  userID: string;
  apiKey: string;
}

const UserInfoForm: FC<{}> = () => {
  const dispatch = useDispatch();
  const initialValues: MyFormValues = {
    userID: "",
    apiKey: "",
  };


  const handleSubmit = (values: MyFormValues) => {
    console.log("values", values);

    const userInfo = {
      userID: values.userID,
      apiKey: values.apiKey,
    };

    dispatch(setUserInfo(userInfo));
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
            handleSubmit(values);
        }}
      >
        <Form>
          <Field type="text" name="userID" />
          <ErrorMessage name="userID" component="div" />
          <Field type="text" name="apiKey" />
          <ErrorMessage name="apiKey" component="div" />
          <button type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default UserInfoForm;
