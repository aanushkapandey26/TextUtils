import React, { useState } from "react";

export default function About(props) {
  //const [myStyle, setMyStyle] = useState({
  // color: "black",
  //backgroundColor: "white",
  //});

  let myStyle = {
    color: props.mode==="dark"?"white":"#042743",
    backgroundColor: props.mode==="dark"?"rgb(36 74 104)":"white"
  }

  return (
    <div classnameName="container" style={{color: props.mode==="dark"?"white":"#042743"}}>
      <h1 classnamename="my-3">About Us</h1>
      <div classname="accordion" id="accordionExample">
        <div classname="accordion-item">
          <h2 classname="accordion-header" id="headingOne">
            <button
              classname="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyse your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            classname="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div classname="accordion-body" style={myStyle}>
              TextUtils gives you a way to analyse your text quickly and efficiently. Be it word count,character count or reading time. 
            </div>
          </div>
        </div>
        <div classname="accordion-item">
          <h2 classname="accordion-header" id="headingTwo">
            <button
              classname="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            classname="accordion-collapse collapse"
            style={myStyle}
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div classname="accordion-body" style={myStyle}>
              TextUtils is a free character counter too that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus, it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div classname="accordion-item">
          <h2 classname="accordion-header" id="headingThree">
            <button
              classname="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            classname="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div classname="accordion-body" style={myStyle}>
              This word counter software works in any web browers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
