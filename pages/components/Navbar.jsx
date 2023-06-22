import Head from "next/head";
import Link from "next/link";

const Navbar = () => {
    return ( 
        <>
      
      <nav className="navbar navbar-expand-sm navbar-dark p-5" style={{backgroundColor: 'coral'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a href="/"  className="nav-link" >Home</a>
        </li>
        <li className="nav-item">
          <Link href="/about" className="nav-link" >About</Link>
        </li>
        <li className="nav-item">
          <Link href="/contact" className="nav-link" >Contact</Link>
        </li>
      </ul>
      <form className="d-flex">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <button className="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
     );
}
 
export default Navbar;