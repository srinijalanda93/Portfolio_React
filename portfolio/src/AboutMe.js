import React from "react";
import { Profile as Left } from "./Components/profile.js";
import { Experience as Right } from "./Components/experience.js";

// It is a functional component which always starts with an upper case letter
// Export as a named function
/**
 * The AboutMe component contains ->container of left and right
 * here left is static and right contains all my experiences
 *
 */
export const AboutMe = () => {
  return (
    <>
      <div id="container">
        <Left />
        <Right />
      </div>
    </>
  );
};
