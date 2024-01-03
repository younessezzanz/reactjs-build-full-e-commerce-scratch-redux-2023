import React, { useEffect } from "react";
import { Navbar, Container, FormControl, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";

import logo from "../../assets/images/logo.png";
import login from "../../assets/images/login.png";
import cart from "../../assets/images/cart.png";
import { Link } from "react-router-dom";

const lngs = {
  en: { nativeName: "EN" },
  ar: { nativeName: "AR" },
};

const NavBarLogin = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n, i18n.language]);

  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} className="logo" alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="nav-cart-login">
            <Link
              to="/login"
              className="nav-text d-flex mt-3 justify-content-center"
              style={{ color: "white", textDecoration: "none" }}
            >
              <img src={login} className="login-img" alt="Login" />
              <p style={{ color: "white" }}>
                <span className="p-1"></span>
                {t("login")}
              </p>
            </Link>
            <Link
              to="/cart"
              className="nav-text d-flex mt-3 justify-content-center"
              style={{ color: "white", textDecoration: "none" }}
            >
              <img src={cart} className="login-img" alt="Cart" />
              <p style={{ color: "white" }}>
                <span className="p-1"></span>
                {t("cart")}
              </p>
            </Link>
          </Nav>
        </Navbar.Collapse>

        <div className="select-languages">
          {Object.keys(lngs).map((lng) => (
            <Button
              variant="dark"
              key={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
              }}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              {lngs[lng].nativeName}
            </Button>
          ))}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
