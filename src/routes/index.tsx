import { RootLayout } from "@/layouts";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { SampleRoutes } from "./sample-routes";
import { DashboardRoutes } from "./dashboard-routes";


const RootRoute:RouteObject[] = [{
    path: "",
    element: <RootLayout />,
    children: [...SampleRoutes, ...DashboardRoutes]
}]

export const router = createBrowserRouter(RootRoute);