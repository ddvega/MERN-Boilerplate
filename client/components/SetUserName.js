import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
import { set } from 'lodash';

export const SetUserName = () => {
  const { currentUser } = useAuth();

  try {
    currentUser.getIdToken(true).then((idToken) => {
      axios
        .get(`/api/users`, {
          headers: {
            Authorization: 'Bearer ' + idToken,
          },
          params:{
            _id:currentUser.uid,
            username:''
          }
        })
        .then((resp) => {
            console.log("verga")
            console.log(resp.data.username);
            localStorage.setItem('username', resp.data.username)
        });
    });
  } catch (error) {
    console.log("user not logged in");
  }
};
