import pizzaData from "../data";
import Pizza from "./Pizza";

function Menu(){

    return (
        <main className="menu mt-3">
            <h2>Our Menu</h2>
            <p>Authentic Italian Cuisine brought to you by Mario.</p>
            <ul className="pizzas">
                {pizzaData.map((item) => (
                    <Pizza pizzaObj={item} key={item.id}/>                
                ))}
            </ul>
        </main>
    )
}

export default Menu;