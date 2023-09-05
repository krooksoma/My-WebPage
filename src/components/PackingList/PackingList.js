import React, { useState } from 'react';
import Item from '../Item/Item';
import initialItems from "../../resources/data.js"

function PackingList () {

   return (
    <div className="list" data-testid="PackingList">
      <ul>
      {initialItems.map((X)=>
        <Item item={X}/>
      )}
      </ul>
    </div>
  );

} 



export default PackingList;
