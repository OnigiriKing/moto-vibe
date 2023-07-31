
export default function Reviews() {
  return (
    <div id="reviews-screen">
      <div className="review-screen-wrapper">
        <div className="reviews-screen-des">
          <h2>Unfiltered Testimonials</h2>
          <h1>Your Words, Our Pride</h1>
          <p>
            We take pride in showcasing the voices of our clients, providing a
            platform for their honest feedback and testimonials. Join us in
            celebrating the joy of exceptional customer experiences that have
            made a lasting impact.
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
              <div>svg</div>
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
              <div>svg</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
