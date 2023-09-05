import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

function Footer() {
let numberOfItems = 1;
let packedItems = 2;

  return (
    <footer className="stats">
      <em>{`🧳 You have ${numberOfItems} items on your list, and you already packed ${packedItems} (X%)`}</em>
    </footer>
  );
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
