
function Pizza({ pizzaObj }) {

  //conditional rendering of the element
  // if(pizzaObj.soldOut){
  //   return null;
  // }

  return (
    // conditionally setting css property
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img alt={pizzaObj.name} src={pizzaObj.photoName} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

export default Pizza;
