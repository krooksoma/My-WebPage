import React from "react";

const Bill = ({ billAmount, children, onSetBillAmount }) => {


    return <div>
      <p> {children}</p>
      <input type="text" value={billAmount} onChange={e=> onSetBillAmount(Number(e.target.value))} placeholder="Bill Amount in USD">        
      </input>
    </div>;
};

Bill.defaultProps = {};

export default Bill;
