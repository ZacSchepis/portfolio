import { NavLink } from 'react-router-dom';

export default function NavItem({to, label}){
    return (
        <li className="listItem">
            <NavLink to={to} className="link">{label}</NavLink>
        </li>
    )
}