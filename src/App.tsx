import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import UserInfoForm from './components/UserInfoForm';
//import useSelector
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
function App() {

  const userID = useSelector((state: RootState) => state.userInfo.userID);
  const apiKey = useSelector((state: RootState) => state.userInfo.apiKey);

  return (
    <div className="App">
      <UserInfoForm/>
      <p>userID = {userID}</p>
      <p>apiKey = {apiKey}</p>
    </div>
  );
}

export default App;
