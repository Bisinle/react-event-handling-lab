// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
  function focusHandle(e) {
    console.log("Good!");
  }
  function blurHandle(e) {
    let button = e.target;
    button.removeEventListener("focus", focusHandle);
    console.log("Hey! Eyes on me!");
  }
  return (
    <div>
      <button onFocus={focusHandle} onBlur={blurHandle}>
        Eyes on me
      </button>
    </div>
  );
}

export default EyesOnMe;
