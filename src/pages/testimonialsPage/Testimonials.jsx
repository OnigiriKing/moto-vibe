import AllPagesStart from "../navBar/AllPagesStart"
import AllPagesFooter from "../footerPage/AllPagesFooter";
import Reviews from "../homePage/components/Reviews"

export default function Testimonials() {

    return (
      <div id="testimonials-page">
        <AllPagesStart page="Testimonials" />
        <Reviews />
        <AllPagesFooter />
      </div>
    );
}