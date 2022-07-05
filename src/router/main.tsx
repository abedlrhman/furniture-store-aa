import { PageRouterType } from "../interfaces/router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";


const Pages: Array<PageRouterType> = [
    {
        hasAuth: false,
        layout: MainLayout,
        component: Home,
        path: "/",
    }
]

export default Pages