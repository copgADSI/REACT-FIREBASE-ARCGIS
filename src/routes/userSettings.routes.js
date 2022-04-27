import AccountView from "../Views/User/Account/AccountView";
import DashboardView from "../Views/Dashboard/DashboardView";

export const userSettings = [
    {
        id:1,
        path:"account",
        view:<AccountView/>
    },
    {
        id:2,
        path:"dashboard",
        view:<DashboardView/>
    }
]