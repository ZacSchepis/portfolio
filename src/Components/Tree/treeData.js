import About from "../About/About"
import Projects from "../Projects/Projects"
import Form from "../Projects/1-signup-form/Form"
import Dashboard from "../Projects/2-admin-dashboard/Dashboard"
export const treeData = [
    {
        name: "About",
        path: "/",
        element: <About/>,
        children: []
    },
    {
        name: "Projects",
        path: "/projects",
        element: <Projects/>,
        children: [
            {
                name: "Signup Form",
                path: "/projects/1",
                element: <Form/>,
                children: []
            },
            {
                name: "Admin Dashboard",
                path: "/projects/2",
                element: <Dashboard/>,
                children: []
            }
        ]
    }
]