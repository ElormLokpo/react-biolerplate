import { DashboardLayout } from "@/layouts/dashboard-layout";
import { SideNav } from "@/pages/dashboard/components/side-nav";
import { HomePage } from "@/pages/dashboard/home";
import { ReactHookFormPage } from "@/pages/dashboard/react-hook-form";
import { RouteObject } from "react-router-dom";

export const DashboardRoutes: RouteObject[] = [{
    path: "dashboard",
    element: <DashboardLayout sideNav={<SideNav />} />,
    children: [
        {
            path: "",
            element: <HomePage />
        },
        {
            path: "rhf",
            element: <ReactHookFormPage />
        }
    ]
}]