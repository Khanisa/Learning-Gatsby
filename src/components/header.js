import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Icon from "./icon";

const Header = ({ siteTitle }) => (
  <header className="siteHeader">
    <div className="siteHeader__container">
      <Link className="navbar-brand" to="/" >
        <Icon id="logo" width="64px" height="25px" />
      </Link>
      <div className="nav-links">
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link">Contact</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
