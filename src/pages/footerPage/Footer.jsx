import { nameLogo } from "../../svg/navSvg";
import { footerSvg } from "../../svg/footerSvg";

export default function FooterPage() {
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
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#home-page">Bangkok</a>
            </li>
            <li>
              <a href="#home-page">Mobile</a>
            </li>
            <li>
              <a href="#home-page">Careers</a>
            </li>
            <li>
              <a href="#home-page">Blog</a>
            </li>
          </ul>
        </li>
        <li className="footer-work-time">
          <h3>Working time</h3>
          <p>Mon - Fri: 9:00AM - 9:00PM</p>
          <p>Sat: 9:00AM - 19:00PM</p>
          <p></p>
        </li>
        <li className="footer-sub"></li>
      </ul>
    </footer>
  );
}
