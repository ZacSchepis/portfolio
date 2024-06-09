import React from "react";
import { Route } from "react-router-dom";

const generateRoutes = (data) => {
    const routes = [];
    const createRoutes = (items) => {
        items.forEach((item) => {
            routes.push(<Route path={item.path} key={item.path} element={item.element}></Route>);
            if (item.children) {
                createRoutes(item.children);
            }
        })
    }
    createRoutes(data);
    return routes;
}

export default generateRoutes;