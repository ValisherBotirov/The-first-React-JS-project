import React from "react";
import ReactDOM from "react-dom";
import faker from "@faker-js/faker";
import CommentComponent from "./CommentComponent.js";
import CardComponent from "./CardComponent.js";
//const nowTime = function () {
//   const weeks = [
//     "Yanvar",
//     "Fevral",
//     "Mart",
//     "April",
//     "May",
//     "Iyun",
//     "Iyul",
//     "Avgust",
//     "Sentabr",
//     "Oktabr",
//     "Noyabr",
//     "Dekabr",
//   ];

//   const getTime = new Date();
//   const soat = getTime.getHours();
//   const minut = getTime.getMinutes();
//   const kun = getTime.getDate();
//   const oy = getTime.getMonth();
//   const yil = getTime.getFullYear();
//   const sec = getTime.getSeconds();
//   let str =
//     soat + ":" + minut + ":" + sec + " " + kun + "-" + weeks[oy] + " " + yil;
//   return str;
// };
// console.log(nowTime());

// const App = function () {
//   const inputText = "Emailni kiriting";
//   return (
//     <div>
//       <label htmlFor="name">Enter labe name</label>
//       <input id="name" type="text" placeholder={inputText}></input>
//       <button className="btn">Submit</button>
//       <p></p>
//     </div>
//   );

//   // return (
//   //   <div>
//   //     <h1>Hozirgi vaqt {nowTime()}</h1>
//   //   </div>
//   // );
// };

// setInterval(() => {
// ReactDOM.render(<App />, document.querySelector("#root"));
// }, 1000);

// ====================================================
// Yangi project

const App = function () {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CardComponent>
        <CommentComponent
          name="Valisher"
          img={faker.image.avatar()}
          commit="Hi my names Valisher "
        />
      </CardComponent>
      <CardComponent>
        <CommentComponent
          name="Umid"
          img={faker.image.avatar()}
          commit="Hi my names Umid "
        />
      </CardComponent>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
