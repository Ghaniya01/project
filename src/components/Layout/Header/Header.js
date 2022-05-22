import React, { useState, useEffect } from "react";

import { SAttribute, Nav, NavbarContainer, NavLogo } from "./styles";
import { animateScroll as scroll } from "react-scroll";

const Header = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo>Form Component </NavLogo>
        <SAttribute
          href={"https://www.youtube.com/channel/UCQo_1uyUB4wf-5u7OsVIGHg"}
          target="_blank"
        >
          CodeFocus
        </SAttribute>
      </NavbarContainer>
    </Nav>
  );
};

export default Header;
