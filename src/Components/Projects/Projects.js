import Form from './1-signup-form/Form';
import Dashboard from "./2-admin-dashboard/Dashboard";
import { Route, Routes} from 'react-router-dom';
import NavItem from "../Navbar/NavItem";
const routes = [
    {path: "projects/1", label: "Signup Form",element: <Form/>},
    {path: "projects/2", label: "Admin Dashboard",element: <Dashboard/>},
]

export default function Projects() {
    const items = routes.map(({path, element}, i) => {
        return <Route path={path} key={`${path}/i`} element={element}></Route>
    });
    const navs = routes.map(({path, label}, i) => {
        return <NavItem to={path} key={`${path}-${i}`} label={label}></NavItem>
    });
    return (
        <>
            {/* <h1>Projects</h1>
            <p>Here are some projects I have worked on</p> */}
            {/* <ol>
                {navs}
            </ol> 
            <Routes>
                {items}
            </Routes> */}
            {/* <Form/> */}
        </>
    )
}