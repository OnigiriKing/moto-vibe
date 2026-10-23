import { nameLogo } from "svg/navSvg";
import { footerSvg } from "svg/footerSvg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [isNewsletterComplete, setIsNewsletterComplete] = useState(false);

  function handleNewsletterSubmit(event) {
    event.preventDefault();
    setIsNewsletterComplete(true);
  }

  function handleNavigation() {
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  return (
    <footer id="footer-page">
      <ul className="footer-wrapper">
        <li className="footer-des">
          <div className="des-name">{nameLogo}</div>
          <p className="des-words">
            Experience the Thrill. Explore the open road with our
            high-performance motorcycles for rent.
          </p>
          <div className="footer-number-email">
            <a href="tel:09999999">{footerSvg(20).phone} (09)-999-999</a>
            <a href="mailto: motovibe@gmail.com">
              {footerSvg(20).email} motovibe@gmail.com
            </a>
          </div>
        </li>
        <li className="footer-about">
          <h3>EXPLORE</h3>
          <ul>
            <li>
              <Link to="/About" onClick={handleNavigation}>About</Link>
            </li>
            <li>
              <Link to="/Models" onClick={handleNavigation}>Bike Models</Link>
            </li>
            <li>
              <Link to="/Reviews" onClick={handleNavigation}>Testimonials</Link>
            </li>
            <li>
              <Link to="/Contact" onClick={handleNavigation}>Contact</Link>
            </li>
          </ul>
        </li>
        <li className="footer-work-time">
          <h3>WORKING HOURS</h3>
          <p>Mon - Fri: 9:00AM - 9:00PM</p>
          <p>Sat: 9:00AM - 3:00PM</p>
          <p>Sun: Closed</p>
        </li>
        <li className="footer-sub">
          <h3>NEWSLETTER</h3>
          <p id="newsletter-demo-note">
            Use a sample email to try this demo. No subscription is created.
          </p>
          <form
            className="footer-sub"
            aria-label="Newsletter demo"
            onSubmit={handleNewsletterSubmit}
            onChange={() => setIsNewsletterComplete(false)}
          >
            <input
              className="input-field-style"
              type="email"
              name="email"
              aria-label="Newsletter email"
              aria-describedby="newsletter-demo-note"
              placeholder="you@example.com"
              required
            />
            <button type="submit">Complete demo</button>
            <p className="newsletter-status" role="status">
              {isNewsletterComplete
                ? "Demo completed. No subscription was created."
                : ""}
            </p>
          </form>
        </li>
      </ul>
    </footer>
  );
}
