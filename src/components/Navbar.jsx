import { Link } from "react-router-dom";
import "./navbar.css";


const Navbar = () => {


  return (
    <>
      <header>
        <nav>
          <Link to="/" className="link-do-nav">
            Home
          </Link>
          <Link to="/useContextLearn/contact" className="link-do-nav">
            Contato
          </Link>
        </nav>
      </header>


    </>
  );
};

export default Navbar;
