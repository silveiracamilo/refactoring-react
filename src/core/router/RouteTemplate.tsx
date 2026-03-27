import { Outlet } from "react-router";
import Template from "../template/Template";

const RouteTemplate = () => {
    return (
        <Template>
            <Outlet />
        </Template>
    );
}

export default RouteTemplate;
