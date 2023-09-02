
function Pizza({ pizzaObj }) {

  if(pizzaObj.soldOut){
    return null;
  }

  return (
    <li className="pizza">
      <img alt={pizzaObj.name} src={pizzaObj.photoName} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
}

export default Pizza;
