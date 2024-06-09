import { AppBar, Toolbar, Typography} from "@mui/material";
import NavItem from './NavItem';

export default function Navbar() {
    const paths = [
        {to: "/", label: "Home"},
        {to: "/projects", label: "Projects"},
    ]
    const items = paths.map((path, index) => {
        return <NavItem key={index} to={path.to} label={path.label} />
    })
    return (
        <AppBar position="static" className="root">
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Portfolio
                </Typography>
                <ul className="navList">
                    {items}
                </ul>
            </Toolbar>
        </AppBar>
    )
}
