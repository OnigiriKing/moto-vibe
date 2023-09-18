import AllPagesStart from "../navBar/AllPagesStart";
import AllPagesFooter from "../footerPage/AllPagesFooter";
import { footerSvg } from "svg/footerSvg";
import { requestSvg } from "svg/requestFormSvg";

export default function Contact() {
  return (
    <div>
      <AllPagesStart page="Contact" />
      <div id="contact-page">
        <div className="contact-page-bg-color">
          <div className="contact-page-wrapper">
            <div className="contact-page-text">
              <h1>Need additional information?</h1>
              <p>
                Feel free to reach out to us through the contact form below, and
                we will get back to you as soon as possible. You can also reach
                us via phone or email at the provided contact details.
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
              <form>
                <label for="contact-form-name">Full Name</label>
                <input
                  id="contact-form-name"
                  placeholder="E.g. 'Mark Simmons'"
                ></input>
                <label for="contact-form-email">Email</label>
                <input
                  id="contact-form-email"
                  placeholder="youremail@example.com"
                ></input>
                <label for="contact-form-des">Tell us about it</label>
                <textarea
                  id="contact-form-des"
                  placeholder="Write Here..."
                ></textarea>
                <button>{requestSvg(30).message}Send message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <AllPagesFooter />
    </div>
  );
}
