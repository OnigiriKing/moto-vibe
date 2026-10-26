import { Link } from "react-router-dom";

export default function AllPagesFooter() {
  return (
    <section id="all-pages-footer" aria-labelledby="booking-banner-heading">
      <div className="all-pages-footer-wrapper">
        <div className="all-pages-footer-text">
          <h2 id="booking-banner-heading">Explore Bangkok by bike</h2>
          <Link to="/#home-request">Try booking demo</Link>
        </div>
      </div>
    </section>
  );
}
