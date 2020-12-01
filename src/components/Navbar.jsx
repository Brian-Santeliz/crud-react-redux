import {Link} from "react-router-dom"
const Navbar = () => {
    return ( 
      <nav className="bg-info p-3 mb-5 text-center text-white d-flex justify-content-between">
        <h3 className="text-uppercase"> <Link to="/" className="text-reset  text-decoration-none">Crud React-Redux</Link></h3>
       <Link to="/new" className="btn btn-success text-uppercase">Agregar Producto</Link>
      </nav>
     );
}
 
export default Navbar;