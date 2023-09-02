function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark" style={{opacity: 1}}>
      <div>
        <a href="#/" className="navbar-brand">
          <img src="resources/images/mario-pizza.jpg" width="120" height="80" alt="logo"></img>
          Mamma Mia Pizza Co.</a>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      
    </nav>
  );
}

export default Header;
