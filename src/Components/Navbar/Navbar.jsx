// import React from "react";
// import "./Navbar.css";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="navbar-main-component">
//       <div className="navbar-component">
//         <div className="nav-links">
//           <NavLink to="/" activeClassName="active" className="nav-name">
//             PK
//           </NavLink>
//         </div>

//         <div className="butcontact-container">
//           <div className="nav-links">
//             <NavLink to="/skills" activeClassName="active">
//               SKILLS
//             </NavLink>
//             <NavLink to="/projects" activeClassName="active">
//               PROJECTS
//             </NavLink>
//             <NavLink to="/about" activeClassName="active">
//               ABOUT{" "}
//             </NavLink>

//             <NavLink to="/contact" activeClassName="active">
//               CONTACT{" "}
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`navbar-main-component ${menuOpen ? "menu-open" : ""}`}>
      <div className="navbar-component">
        <div className="nav-link">
          <NavLink to="/" activeClassName="active" className="nav-name">
            PK
          </NavLink>
        </div>

        <div className="butcontact-container">
          <div className={`nav-links ${menuOpen ? "show" : ""}`}>
            <NavLink to="/skills" activeClassName="active" onClick={closeMenu}>
              SKILLS
            </NavLink>
            <NavLink to="/projects" activeClassName="active" onClick={closeMenu}>
              PROJECTS
            </NavLink>
            <NavLink to="/about" activeClassName="active" onClick={closeMenu}>
              ABOUT
            </NavLink>
            <NavLink to="/contact" activeClassName="active" onClick={closeMenu}>
              CONTACT
            </NavLink>
          </div>
          <button className="line-btn" onClick={toggleMenu}>☰</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

