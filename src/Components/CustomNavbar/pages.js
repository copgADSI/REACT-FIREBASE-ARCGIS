import { AddLocation, Home, Notifications, Route } from "@mui/icons-material";
export const pages = [
    {
        id: 1,
        text: "Inicio",
        path: "/",
        icon: <Home/>,
        notifications:false
    },
    {
        id: 2,
        text: "Ver Rutas",
        path: "/routes",
        icon: <Route/>,
        notifications:false
    },
    {
        id: 3,
        text: "Crear Ruta",
        path: "/newRoute",
        icon: <AddLocation />,
        notifications:false
    },
    {
        id: 4,
        text: "Notificaciones",
        path: "/notifications",
        icon: <Notifications />,
        notifications:true
    }
];
