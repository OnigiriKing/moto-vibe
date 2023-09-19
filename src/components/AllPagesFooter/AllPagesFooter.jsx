import { footerSvg } from "../../svg/footerSvg";

export default function AllPagesFooter() {
  return (
    <div id="all-pages-footer">
      <div className="all-pages-footer-wrapper">
        <div className="all-pages-footer-text">
          <h1>Ride your adventure - Book a bike now!</h1>
          <a href="tel:09999999">
            <h1>{footerSvg(30).phone} (09)-999-999</h1>
          </a>
        </div>
      </div>
    </div>
  );
}
