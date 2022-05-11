import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import UserInfoForm from './components/UserInfoForm';
import UserProfileForm from './components/UserProfileForm';
//import useSelector
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './app/store';
import userProfile, { userProfileSelectors, setUserToDisplay } from './slices/userProfile';

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

function App() {

  const userInfo = useSelector((state: RootState) => state.userInfo);
  const userProfile = useSelector(userProfileSelectors.selectAll);
  const userToDisplay = useSelector((state: RootState) => state.userProfile.userToDisplay);
  const dispatch = useDispatch();

  useEffect(() => {
  }, [userProfile]);

  useEffect(() => {
    return () => {
      console.log("unmounting");
    }
  }, []);

  const handleSubmit = (values: any) => {
    console.log("Setting userToDisplay to ", values.username);
    dispatch(setUserToDisplay(values.username));
  };

  const initialValues: any = {
    username: "",
  };

  return (
    <div className="App">
      <UserInfoForm/>
      <p>userID = {userInfo.userID}</p>
      <p>apiKey = {userInfo.apiKey}</p>
      <p>Displaying user: {userToDisplay}</p>
      <UserProfileForm/>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
            handleSubmit(values);
        }}
      >
        <Form>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="div" />
          <button type="submit">
            Show User
          </button>
        </Form>
      </Formik>
      
    </div>
  );
}

export default App;
