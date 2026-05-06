import '../../../styles/navitem.css';
import { NavLink } from  "react-router-dom";


function NavItem({to, children, icon: Icon, variant ="primary"}){
    return(
            <NavLink 
                to={to}
                className={({ isActive }) =>
                                `navItem ${isActive ? "active" : ""}`}>
                
                <div className="iconContainer">
                    {Icon && <Icon className="navItemIcon"/>}
                </div>
                <div className="navItemTextContainer">
                    {children}
                </div>
            </NavLink>
    )
}

export default NavItem