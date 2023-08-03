import AllPagesStart from "../navBar/AllPagesStart"
import Reviews from "../homePage/components/Reviews"

export default function Testimonials() {

    return (
      <div id="testimonials-page">
        <AllPagesStart page="Testimonials" />
        <Reviews />
      </div>
    );
}