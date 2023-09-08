import React from 'react';
import Item from '../Item/Item';


function PackingList ({items, onDeleteItem, onToggleItem}) {

   return (
    <div className="list" data-testid="PackingList">
      <ul>
      {items.map((X)=>
        <Item item={X} key={X.id} onDeleteItem={onDeleteItem}
        onToggleItem={onToggleItem}/>
      )}
      </ul>
    </div>
  );

} 



export default PackingList;
