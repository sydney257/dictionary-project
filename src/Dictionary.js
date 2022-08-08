import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [value, setValue] = useState(props.defaultValue);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function updateValueChange(event) {
    setValue(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>Search for a word</h1>
          <form onSubmit={handleSubmit} className="container">
            <input
              type="search"
              autoFocus={true}
              onChange={updateValueChange}
              defaultValue={props.defaultValue}
              className="search"
            />
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading dictionary..";
  }
}
