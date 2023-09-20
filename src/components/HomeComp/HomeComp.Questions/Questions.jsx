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
            <div
              className={faq === "Q1" ? "active-question" : ""}
              onClick={() => (faq !== "Q1" ? setQ("Q1") : setQ("Q0"))}
            >
              <h3>1. What are the requirements for renting a motorbike?</h3>{" "}
              {homeSvg(20).arrowDown}
            </div>
            <div
              className={`questions-slide ${
                faq === "Q1" ? "active-answer" : ""
              }`}
            >
              To rent a motorbike, you must be at least 18 years old and possess
              a valid motorcycle driver's license from your home country or an
              international driver's license. Prior experience in riding
              motorcycles is recommended. Additionally, a security deposit will
              be required, which can be in cash or a pre-authorization on your
              credit card. This deposit will be refunded upon returning the
              motorbike in good condition.
            </div>
          </div>
          <div className="faq-question">
            <div
              className={faq === "Q2" ? "active-question" : ""}
              onClick={() => (faq !== "Q2" ? setQ("Q2") : setQ("Q0"))}
            >
              <h3>2. Is insurance included in the rental cost?</h3>
              {homeSvg(20).arrowDown}
            </div>
            <div
              className={`questions-slide ${
                faq === "Q2" ? "active-answer" : ""
              }`}
            >
              Yes, our rental packages include basic insurance coverage. This
              coverage typically includes damage to the motorbike and
              third-party liability insurance. However, please note that the
              insurance might have certain limitations and exclusions.
            </div>
          </div>
          <div className="faq-question">
            <div
              className={faq === "Q3" ? "active-question" : ""}
              onClick={() => (faq !== "Q3" ? setQ("Q3") : setQ("Q0"))}
            >
              <h3>3. Can I rent a motorbike for an extended period?</h3>
              {homeSvg(20).arrowDown}
            </div>
            <div
              className={`questions-slide ${
                faq === "Q3" ? "active-answer" : ""
              }`}
            >
              Absolutely! We offer long-term motorbike rental options for your
              convenience. Whether you need it for a few weeks or months, we
              have flexible rental plans to suit your requirements. For extended
              rentals, we provide attractive discounts, making it a
              cost-effective choice for your stay in Bangkok.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
