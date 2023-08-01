import {homeSvg} from "../../../svg/homeSvg"
import React from "react";

export default function Questions() {
  const [faq, setQ] = React.useState("Q1")

  return (
    <div id="questions-screen">
      <div className="questions-wrapper">
        <div className="questions-des">
          <h2>FAQ</h2>
          <h1>Frequently Asked Questions</h1>
          <p>
            Welcome to our Frequently Asked Questions section! Here, we've
            compiled a comprehensive list of the most common queries we receive
            from our valued customers.
          </p>
        </div>
        <div className="all-questions">
          <div className="faq-question">
            <div  className={faq==="Q1"?"active-question":""} onClick={() => faq !=="Q1"?setQ("Q1"):setQ("Q0")}>
              <h3>1. What are the requirements for renting a motorbike?</h3> {homeSvg(20).arrow}
            </div>
            <div 
            className={`questions-slide ${faq==="Q1"?"active-answer":""}`}>

            </div>
          </div>
          <div className="faq-question">
            <div 
            className={faq==="Q2"?"active-question":""} 
            onClick={() => faq !=="Q2"?setQ("Q2"):setQ("Q0")}>
              <h3>2. Is insurance included in the rental cost?</h3>{homeSvg(20).arrow}
            </div>
            <div 
            className={`questions-slide ${faq==="Q1"?"active-answer":""}`}></div>
          </div>
          <div className="faq-question">
            <div 
            className={faq==="Q3"?"active-question":""} onClick={() => faq !=="Q3"?setQ("Q3"):setQ("Q0")}>
              <h3>3. Can I rent a motorbike for an extended period?</h3> {homeSvg(20).arrow}
            </div>
            <div className={`questions-slide ${faq==="Q1"?"active-answer":""}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
