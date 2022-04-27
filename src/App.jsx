import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoutes from './Components/PrivateRoutes';
import { userRoutes } from './routes/user.routes';
import Login from './Views/SignIn/SignInView';
import HomeView from './Views/Home/HomeView'
import { UserContext } from './Context/User/UserProvider';
import Navbar from './Components/CustomNavbar/Navbar';
import { userSettings } from './routes/userSettings.routes';
function App() {
  const { user } = useContext(UserContext)
  console.log(user);
  return (
    <Routes>

      <Route path='/' element={<Navbar />} >
        {!user
          ?
          <Route path='login' element={<Login />} />
          :
          <>
            <Route index element={<HomeView />} />
            {userSettings.map((route, index) => (
              <Route key={index} path={route.path} element={
                <PrivateRoutes >
                  {route.view}
                </PrivateRoutes>} />
            ))

            }
            {userRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={
                <PrivateRoutes >
                  {route.view}
                </PrivateRoutes>} />
            ))}
            <Route path='*' element={<Navigate to="/" />} />
          </>
        }
        <Route path='*' element={<Navigate to="/login" />} />

      </Route>
    </Routes>
  );
}

export default App;
