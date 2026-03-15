import React from "react";

function Movie(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        width: "250px",
      }}
    >
      <h2>{props.title}</h2>
      <img src={props.poster} alt={props.title} width="200" />
      <p>
        <b>Режисер:</b> {props.director}
      </p>
      <p>
        <b>Рік:</b> {props.year}
      </p>
      <p>
        <b>Кіностудія:</b> {props.studio}
      </p>
    </div>
  );
}

export default Movie;
