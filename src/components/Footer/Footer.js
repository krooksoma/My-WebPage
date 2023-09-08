import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

function Footer({items}) {
  const totalItemsNumber = items.length;
  let packedItems = items.filter((item) => item.packed ? items.length - 1: null); 

  let percentage = Math.round(100 * packedItems.length/totalItemsNumber);

  
  return (
    <footer className="stats">
            <em>{`🧳 You have ${totalItemsNumber} items on your list, and you already packed ${packedItems.length} (${percentage} %)`}</em>
    </footer>
  );
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
