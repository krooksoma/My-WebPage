import React, { useState } from 'react';
import Bill from '../Bill/Bill';
import Percentage from '../Percentage/Percentage';
import Output from '../Output/Output';



const TipCalculator = () => { 
  
  const [billAmount, setBillAmount] = useState("");
  console.log(billAmount);
  const [customer1, setCustomer1] = useState("");
  const [customer2, setCustomer2] = useState("");
  let totalTip;
  //calculate tip amount

  function calculateTipAmount(){
    let totalTip = billAmount * ((customer1 + customer2) /2 /100);
  }
  
  //calculate total bill amount
  function calculateBillWithTip () {
    return billAmount + totalTip;
  }  


  return (
  <div className="container col">
    <Bill billAmount={billAmount} onSetBillAmount={setBillAmount}>What is the Bill Amount?</Bill>
    <Percentage percentage={customer1} onSetPercentage={setCustomer1}/>
    <Percentage percentage={customer2} onSetPercentage={setCustomer2}/>
    <Output totalBill={calculateBillWithTip}/>
  </div>
);
}



TipCalculator.defaultProps = {};

export default TipCalculator;
