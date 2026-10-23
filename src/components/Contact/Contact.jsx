import AllPagesStart from "components/AllPagesStart";
import AllPagesFooter from "components/AllPagesFooter";
import { footerSvg } from "svg/footerSvg";
import { requestSvg } from "svg/requestFormSvg";
import { useState } from "react";

export default function Contact() {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsCompleted(true);
  }

  return (
    <div>
      <AllPagesStart page="Contact" />
      <div id="contact-page">
        <div className="contact-page-bg-color">
          <div className="contact-page-wrapper">
            <div className="contact-page-text">
              <h1>Try the contact form</h1>
              <p>
                Use sample details to try this contact form. This demo does not
                send messages. The contact details shown here are examples.
              </p>
              <div className="footer-number-email">
                <a href="tel:09999999" rel="noreferrer">
                  {footerSvg(20).phone} (09)-999-999
                </a>
                <a href="mailto: motovibe@gmail.com" rel="noreferrer">
                  {footerSvg(20).email} motovibe@gmail.com
                </a>
                <a
                  href="https://www.google.com/maps/place/Bangkok"
                  target="_blank"
                  rel="noreferrer"
                >
                  {requestSvg(20).location}Bangkok, Thailand
                </a>
              </div>
            </div>
            <div className="contact-page-contact-form">
              <form onSubmit={handleSubmit} onChange={() => setIsCompleted(false)}>
                <label htmlFor="contact-form-name">Full Name</label>
                <input
                  id="contact-form-name"
                  name="name"
                  placeholder="E.g. 'Mark Simmons'"
                  required
                ></input>
                <label htmlFor="contact-form-email">Email</label>
                <input
                  id="contact-form-email"
                  name="email"
                  type="email"
                  placeholder="youremail@example.com"
                  required
                ></input>
                <label htmlFor="contact-form-des">Tell us about it</label>
                <textarea
                  id="contact-form-des"
                  name="message"
                  placeholder="Write Here..."
                  required
                ></textarea>
                <button type="submit">{requestSvg(30).message}Complete demo</button>
                <p role="status">
                  {isCompleted ? "Demo completed. No message was sent." : ""}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <AllPagesFooter />
    </div>
  );
}
