import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { ReactComponent as Image } from "../../Images/bluesessions.svg";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const Navbar = ({ toggle, toggleNav }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 90) {
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
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <Image
              id="imagem"
              style={toggleNav ? { filter: "invert(100%)" } : null}
            />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="next"
                smooth={true}
                duration={800}
                spy={true}
                exact="true"
                offsett={0}
                style={toggleNav ? { color: "#fff" } : null}
              >
                Próxima Sessão
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="previous"
                smooth={true}
                duration={800}
                spy={true}
                exact="true"
                offsett={0}
                style={toggleNav ? { color: "#fff" } : null}
              >
                Edições Passadas
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={800}
                spy={true}
                exact="true"
                offsett={0}
                style={toggleNav ? { color: "#fff" } : null}
              >
                Sobre
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>
                <Link
                  to={"/Calendario"}
                  style={
                    toggleNav ? { color: "#fff", textDecoration: "none" } : null
                  }
                >
                  Calendário
                </Link>
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

Navbar.propTypes = {
  toggleNav: PropTypes.bool,
};

export default Navbar;
