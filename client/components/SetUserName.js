import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

export const SetUserName = () => {
  const { currentUser } = useAuth();

 

  try {
    api.get(`users/?_id=${currentUser.uid}`).then((resp) => {
      localStorage.setItem('username', resp.data.username)
    });
    // currentUser.getIdToken(true).then((idToken) => {
    //   axios
    //     .get(`/api/users`, {
    //       headers: {
    //         Authorization: 'Bearer ' + idToken,
    //       },
    //       params:{
    //         _id:currentUser.uid,
    //         username:''
    //       }
    //     })
    //     .then((resp) => {
    //         console.log("verga")
    //         console.log(resp.data.username);
    //         localStorage.setItem('username', resp.data.username)
    //     });
    // });
  } catch (error) {
    console.log("user not logged in");
  }
};
