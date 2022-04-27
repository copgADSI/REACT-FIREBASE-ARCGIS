import DashboardView from "../Views/Dashboard/DashboardView";
import NotificationsView from "../Views/User/Notifications/NotificationsView";

export const userRoutes = [
    {
        id:1,
        path:"notifications",
        view:<NotificationsView/>
    },
    {
        id:2,
        path:"newRoute",
        view:<DashboardView/>
    },
    {
        id:2,
        path:"routes",
        view:<DashboardView/>
    }
]