import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AboutMe } from "./AboutMe";

const obj = document.getElementById("root");
const root = ReactDOM.createRoot(obj);
root.render(
  <>
    <AboutMe />
  </>
);
