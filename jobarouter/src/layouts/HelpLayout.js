import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Help and Contact</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        velit minus assumenda, ut voluptas temporibus accusamus praesentium
        blanditiis.
      </p>
      <nav>
        <NavLink to="faq">Faq</NavLink>
        <NavLink to="contact">Contact us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default HelpLayout;
