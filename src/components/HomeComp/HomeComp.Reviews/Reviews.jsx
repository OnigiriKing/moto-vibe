import { homeSvg } from "svg/homeSvg";


export default function Reviews() {
  return (
    <div id="reviews-screen">
      <div className="review-screen-wrapper">
        <div className="reviews-screen-des">
          <h2>Sample testimonials</h2>
          <h1>Stories from the road</h1>
          <p>
            These fictional reviews show how rider feedback would look on Moto
            Vibe.
          </p>
        </div>
        <div className="review-screen-clients">
          <div className="review-screen-review">
            <h3>
              "The bikes were in excellent condition, and I enjoyed every moment
              of my ride. Highly recommend MotoVibe for an unforgettable
              adventure!"
            </h3>
            <div className="review-screen-client-info">
              <div className="review-screen-client-photo-des">
                <div className="review-screen-face cillian"></div>
                <div>
                  <h3>Cillian Shelby</h3>
                  <p>Britain</p>
                </div>
              </div>
              <div>{homeSvg(40).comment}</div>
            </div>
          </div>
          <div className="review-screen-review">
            <h3>
              "I had an incredible experience with MotoVibe, the leading
              motorbike rental service. The process was seamless, and their team
              was attentive to my needs."
            </h3>
            <div className="review-screen-client-info">
              <div className="review-screen-client-photo-des">
                <div className="review-screen-face minami"></div>
                <div>
                  <h3>Minami Tanaka</h3>
                  <p>Japan</p>
                </div>
              </div>
              <div>{homeSvg(40).comment}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
