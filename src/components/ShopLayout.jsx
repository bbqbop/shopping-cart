import { NavLink } from "react-router-dom"

export default function ShopLayout(){
    return (
        <div className="navBar">
            <NavLink to="/shop/cds/cote_de_cologne">Côte de Cologne</NavLink>
            <NavLink to="/shop/cds/rootville">Rootville</NavLink>
            <NavLink to="/shop/cds/preen">Preen</NavLink>

        </div>
    )
}