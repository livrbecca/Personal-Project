import React from "react";
import { Link } from "react-router-dom"
import Nav from "react-bootstrap/Nav";
import "../css/Nav.css";

const Navbar = () => {
  return (
    <div className="navbar">
          
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Home</Nav.Link>
        <Link to="/loading2">
        <Nav.Link href="/quiz">Personalised Skin Quiz</Nav.Link>
        </Link>
        <Nav.Link href="/shop">Shop</Nav.Link>
        <Nav.Link href="/wishlist">Wishlist</Nav.Link>
        <Nav.Link href="/product"></Nav.Link>
      </Nav>
    </div>
  );
};

export default Navbar;

// import { Link } from "react-router-dom";
// import React from "react";

// const Header = (props) => {
//   return (
//     <React.Fragment>
//       <div className="navbar">
//       <Link to="/" className="navlink">
//       </Link>
//       <br />
//       <Link to="/home" className="navlink">
//         Home
//       </Link>
//       <br />
//       <Link to="/loading" className="navlink">
//       </Link>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Header;
