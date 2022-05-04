import React from "react";
import Search from "./Search";
import Redux from "./Redux";

const App = () => {
  const getSubmitForm = (inputValue) => {
    console.log(inputValue);
  };

  return (
    <div>
      <h1>This is App component ishladi</h1>
      <Search request={getSubmitForm} />
      <Redux />
    </div>
  );
};

export default App;
