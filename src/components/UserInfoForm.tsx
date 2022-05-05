import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserID, setApiKey } from "../slices/userInfo/userInfo";
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
import { RootState } from "../app/store";
import store from "../app/store";

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
    dispatch(setUserID(values.userID));
    dispatch(setApiKey(values.apiKey));
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
