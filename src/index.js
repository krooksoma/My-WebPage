import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"
import Header from "./components/Header";
import Card from "./components/Card"
import person_data from "./person_data";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {" "}
      <Header/>
      <Card cardInfo={person_data}/>
    {" "}
  </React.StrictMode>
);
