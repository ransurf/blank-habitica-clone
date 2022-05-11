import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserProfile, UserProfileInterface } from "../slices/userProfile";
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
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { userProfileSelectors } from "../slices/userProfile";


const UserProfileForm: React.FC = () => {

  const userToDisplay = useSelector((state: RootState) => state.userProfile.userToDisplay);
  // const [initUserProfile, setInitUserProfile] = useState({
  //   username: "",
  //   description: "",
  // });
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect called");
    const state = store.getState();
    const userProfile = userProfileSelectors.selectById(state, userToDisplay);
    // if (userProfile) {
    //   console.log("userProfile found");
    //   setInitUserProfile(userProfile);
    // }
    console.log("userProfile", userProfile);
    // console.log("initUserProfile", initUserProfile);
    setText(userProfile?.description || "");
  }, [userToDisplay]);


  // stores quill value
  const [text, setText] = React.useState("");

  const onChange = (text: any) => {

    // console.log("onchange for username ", initUserProfile.username);

    //updates quill
    setText(text);
    //stores into state, should not rerender
    dispatch(setUserProfile({
      username: userToDisplay,
      description: text,
    }));
  };
  
  return (
    <div>
      <ReactQuill
        theme="snow"
        placeholder="Type here"
        value={text}
        onChange={onChange}
      />
    </div>
  );
};

export default UserProfileForm;


/*
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          handleSubmit(values);
        }}
      >
        <Form>
          <button type="submit">Update UserInfo</button>
        </Form>
      </Formik>
*/