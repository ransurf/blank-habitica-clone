import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInfoForm from './components/UserInfoForm';
//import useSelector
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
function App() {

  const userID = useSelector((state: RootState) => state.userID.userID);

  return (
    <div className="App">
      <UserInfoForm/>
      <p>userID = {userID}</p>
    </div>
  );
}

export default App;
