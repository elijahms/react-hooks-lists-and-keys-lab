import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const menuBar = links.map((link) => {
    return <a key={link} href={'#' +  link} >{link}</a>
  })

  return <nav>
      {menuBar}
  </nav>;
}

export default NavBar;
