import { Outlet } from "react-router";
import withTemplate from "../template/wrapper/withTemplate";

const RouteTemplate: React.FC = () => {
    return withTemplate(<Outlet />);
}

export default RouteTemplate;
