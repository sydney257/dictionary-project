import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="definitionHeader">Definition: </p>
            <div className="definition">{definition.definition}</div>
            <br />
            <p className="exampleHeader">Example: </p>
            <div className="example">{definition.example}</div>
            <br />
            <Synonyms synonyms={props.meaning.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
