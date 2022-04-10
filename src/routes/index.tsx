import { Routes as Switch, Route, useNavigate, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Home } from '../screens/Home';
import { Projects } from '../screens/Projects';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { Profile } from '../screens/Profile';
import { RequireAuth } from './RequireAuth';

const Routes = () => {
  const login = localStorage.getItem('@PowerProjects:token');
  const navigation = useNavigate();
  console.log(login);

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route path="/" element={login ? <Navigate to='/home' /> : <SignIn />} />
        <Route path="/sign-up" element={login ? <Navigate to='/home' /> : <SignUp />} />
        <Route 
          path="/home" 
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          } 
        />
        <Route 
          path="/projects" 
          element={
            <RequireAuth>
              <Projects />
            </RequireAuth>
          } 
        />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;