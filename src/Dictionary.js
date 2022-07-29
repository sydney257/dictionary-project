import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [value, setValue] = useState("null");
  let [results, setResults] = useState(null);

  function updateValueChange(event) {
    setValue(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          onChange={updateValueChange}
          placeHolder="Search for a word"
        />
        <input type="submit" />
      </form>
      <Results results={results} />
    </div>
  );
}
