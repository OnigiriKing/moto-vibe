import { Link } from "react-router-dom";

export default function AllPagesStart({ page, children }) {
  return (
    <div id="all-pages-start-screen">
      <div className="all-pages-start-wrapper">
        <div className="all-pages-start-text">
          <h1>{page}</h1>
          <h3>
            {children ?? (
              <>
                <Link to="/">Home</Link> / {page}
              </>
            )}
          </h3>
        </div>
      </div>
    </div>
  );
}
