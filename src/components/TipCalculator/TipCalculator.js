import React, { useState } from 'react';
import Bill from '../Bill/Bill';
import Percentage from '../Percentage/Percentage';
import Output from '../Output/Output';




const TipCalculator = () => { 
  
  const [billAmount, setBillAmount] = useState("");
  console.log(billAmount);
  const [customer1, setCustomer1] = useState(0);
  const [customer2, setCustomer2] = useState(0);
  
  
  let totalTip = billAmount * ((customer1 + customer2)/ 2 / 100);
  
  function handleReset(){
    setBillAmount('');
    setCustomer1(0);
    setCustomer2(0);
  }

  return (
  <div className="container col">
    <Bill billAmount={billAmount} onSetBillAmount={setBillAmount}>What is the Bill Amount?</Bill>
    <Percentage percentage={customer1} onSelect={setCustomer1}>Customer 1</Percentage>
    <Percentage percentage={customer2} onSelect={setCustomer2}>Customer 2</Percentage>
    <Output totalTip={totalTip} totalBill={billAmount}/>
    <Reset onReset={handleReset}/>
  </div>
);
}

function Reset ({ onReset }) {

  return (
    <div>
      <button className="btn btn-danger" onClick={onReset}>Reset values</button>
    </div>

  )
}



TipCalculator.defaultProps = {};

export default TipCalculator;
