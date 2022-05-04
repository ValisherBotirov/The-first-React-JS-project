// import React from "react";
// import ReactDOM from "react-dom";
// import faker from "@faker-js/faker";
// import CommentComponent from "./CommentComponent.js";
// import CardComponent from "./CardComponent.js";

// import MagicAccordion from "./MagicAccordion.jsx";
// import App from "./newPractes/App.jsx";

// //const nowTime = function () {
// //   const weeks = [
// //     "Yanvar",
// //     "Fevral",
// //     "Mart",
// //     "April",
// //     "May",
// //     "Iyun",
// //     "Iyul",
// //     "Avgust",
// //     "Sentabr",
// //     "Oktabr",
// //     "Noyabr",
// //     "Dekabr",
// //   ];

// //   const getTime = new Date();
// //   const soat = getTime.getHours();
// //   const minut = getTime.getMinutes();
// //   const kun = getTime.getDate();
// //   const oy = getTime.getMonth();
// //   const yil = getTime.getFullYear();
// //   const sec = getTime.getSeconds();
// //   let str =
// //     soat + ":" + minut + ":" + sec + " " + kun + "-" + weeks[oy] + " " + yil;
// //   return str;
// // };
// // console.log(nowTime());

// // const App = function () {
// //   const inputText = "Emailni kiriting";
// //   return (
// //     <div>
// //       <label htmlFor="name">Enter labe name</label>
// //       <input id="name" type="text" placeholder={inputText}></input>
// //       <button className="btn">Submit</button>
// //       <p></p>
// //     </div>
// //   );

// //   // return (
// //   //   <div>
// //   //     <h1>Hozirgi vaqt {nowTime()}</h1>
// //   //   </div>
// //   // );
// // };

// // setInterval(() => {
// // ReactDOM.render(<App />, document.querySelector("#root"));
// // }, 1000);

// // ====================================================
// // Yangi project

// // const App = function () {
// //   return (
// //     <div
// //       style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
// //     >
// //       <CardComponent>
// //         <CommentComponent
// //           name="Valisher"
// //           img={faker.image.avatar()}
// //           commit="Hi my names Valisher "
// //         />
// //       </CardComponent>
// //       <CardComponent>
// //         <CommentComponent
// //           name="Umid"
// //           img={faker.image.avatar()}
// //           commit="Hi my names Umid "
// //         />
// //       </CardComponent>
// //     </div>
// //   );
// // };

// // ReactDOM.render(<App />, document.querySelector("#root"));

// // Boshqa kichik projectcha HOOK bilan

// // const Hooks = function () {
// //   return (
// //     <div>
// //       <MagicAccordion />
// //       <App />
// //     </div>
// //   );
// // };

// // ReactDOM.render(<Hooks />, document.querySelector("#root"));

// ReactDOM.render(<App />, document.getElementById("root"));

const Redux = require("redux");
console.clear();

// creater fungsiyalar ikshin creatorlar

const addMusic = (name, time) => {
  return {
    type: "ADD",
    payload: {
      name: name,
      time: time,
    },
  };
};

const findLength = (info, name) => {
  return {
    type: "FIND_LENGTH",
    payload: {
      name: name,
      info: info,
    },
  };
};

const deleteMusic = (info, name) => {
  return {
    tupe: "DELETE",
    payload: {
      name: name,
      info: info,
    },
  };
};

// Reduserlar

const addReduser = (allMusic = [], form) => {
  if (form.type === "ADD") {
    return (allMusic = [...allMusic, form.payload]);
  }
  return allMusic;
};

const findReduser = (info, form) => {
  if (form.type === "FIND_LENGTH") {
    console.log(form.payload.info.add);
    const musicName = form.payload.name;
    const obj = form.payload.info.add.find((val) => val.name == musicName);
    return obj.time;
  }
  return 1;
};

const deleteReduser = (info, form) => {
  if (form.type === "DELETE") {
    console.log(music);
    const musicName = form.payload.name;
    const obj = form.payload.info.add.filter(
      (val) => val.payload.name !== musicName
    );
    return obj;
  }
  return 1;
};

const { createStore, combineReducers } = Redux;

const departaments = combineReducers({
  add: addReduser,
  find: findReduser,
  delete: deleteReduser,
});

const store = createStore(departaments);

store.dispatch(addMusic("Vatan", "5:21"));
store.dispatch(addMusic("Uzbegim", "2:35"));

store.dispatch(findLength(store.getState(), "Vatan"));

// store.dispatch(deleteMusic(store.getState(), "Uzbegim"));

console.log(store.getState());
