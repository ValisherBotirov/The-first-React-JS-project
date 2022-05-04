// import React from "react";
const Redux = require("Redux");


const signUpContract = (name, money) => {
  return {
    type: "SIGN_UP",
    payload: {
      name: name,
      amount: money,
    },
  };
};

const getMoney = (name, amount) => {
  return {
    type: "GET_MONEY",
    payload: {
      name: name,
      amount: amount,
    },
  };
};

const cancelContract = (name) => {
  return {
    type: "CANCEL",
    payload: {
      name: name,
    },
  };
};

const clainHistory = (history = [], form) => {
  if (form.type === "GET_MONEY") {
    return (history = [...history, form.payload]);
  }
  return history;
};

const accounting = (allMoney = 100, form) => {
  if (form.type === "SIGN_UP") {
    return (allMoney = allMoney + form.payload.amount);
  } else if (form.type === "GET_MONEY") {
    return (allMoney = allMoney - form.payload.amount);
  }
  return allMoney;
};

const policies = (history = [], form) => {
  if (form.type === "SIGN_UP") {
    return (history = [...history, form.payload]);
  }
  return history;
};

const { createStore, combineReducers } = Redux;

const departaments = combineReducers({
  clainHistory: clainHistory,
  accounting: accounting,
  policies: policies,
});

const store = createStore(departaments);
store.dispatch(getMoney("Umid", 200));
store.dispatch(getMoney("Umid", 40));
store.dispatch(signUpContract("Umid", 200));

console.log(store.getState());
