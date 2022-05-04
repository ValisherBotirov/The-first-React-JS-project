import React, { useRef, useState } from "react";

const initionalState = {
  ism: "",
  parol: "",
};

const Search = (props) => {
  const [inputVal, setInputVal] = useState(initionalState);
  const divRef = useRef();

  const getInputValue = (e) => {
    setInputVal(e.target.value);
  };
  console.log(inputVal);

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (!inputVal) {
      divRef.current.focus();
    } else {
      console.log(divRef.current);
    }
    props.request(inputVal);
  };

  return (
    <div ref={divRef}>
      <form onSubmit={onSubmitForm}>
        <input onChange={getInputValue} placeholder="Input name" />
        <input
          onChange={getInputValue}
          type="password"
          placeholder="Input parol"
        />
        <button onClick={onSubmitForm}>Send</button>
      </form>
    </div>
  );
};

export default Search;
