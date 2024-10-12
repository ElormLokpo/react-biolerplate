import { RootLayout } from "@/layouts";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { SampleRoutes } from "./sample-routes";
import { DashboardRoutes } from "./dashboard-routes";
import { ErrorPage, PageNotFoundPage } from "@/pages/error";


const RootRoute: RouteObject[] = [
    {
        path: "",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [...SampleRoutes, ...DashboardRoutes]
    },
    {
        path: "*",
        element: <PageNotFoundPage />
    }
]

export const router = createBrowserRouter(RootRoute);