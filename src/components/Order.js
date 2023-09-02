function Order({name}){

    return(
        <div className="order">
          <p>
          We're open until {name}:00pm! Come visit us or order online.
          </p>
          <button className="btn">Order</button>          
        </div>
    )
}

export default Order;