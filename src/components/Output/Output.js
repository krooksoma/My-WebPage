import React from 'react';
import PropTypes from 'prop-types';


const Output = ({ totalTip, totalBill }) =>{ 
  
  console.log("Bill amount:"  + totalBill + " total tip: " + totalTip);
  
  return (
  <div>
    The total amount is ${totalBill} with ${totalTip} tip. Sums up to: ${Number(totalTip + totalBill)}
  </div>
)
}
Output.propTypes = {};

Output.defaultProps = {};

export default Output;
