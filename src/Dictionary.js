import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [value, setValue] = useState("null");

  function updateValueChange(event) {
    setValue(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${value} definition`);
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
