import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [value, setValue] = useState("null");

  function updateValueChange(event) {
    setValue(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0].word);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={updateValueChange} />
        <input type="submit" />
      </form>
    </div>
  );
}
