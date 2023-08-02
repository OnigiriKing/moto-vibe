import { Link } from "react-router-dom";


export default function AllPagesStart({page}) {

   return (
     <div className="all-pages-start-screen">
       <div className="all-pages-start-wrapper">
         <div className="all-pages-start-text">
           <h3>{page}</h3>
           <h4>
             <Link to={"/"} children="Home" /> / {page}
           </h4>
         </div>
       </div>
     </div>
   );
}