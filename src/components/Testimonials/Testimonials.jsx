import AllPagesStart from "components/AllPagesStart";
import AllPagesFooter from "components/AllPagesFooter";
import Reviews from "components/HomeComp/HomeComp.Reviews/Reviews";

export default function Testimonials() {
  return (
    <div id="testimonials-page">
      <AllPagesStart page="Testimonials" />
      <Reviews />
      <AllPagesFooter />
    </div>
  );
}
