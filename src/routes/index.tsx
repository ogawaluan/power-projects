import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Home } from '../screens/Home';
import { Projects } from '../screens/Projects';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { Profile } from '../screens/Profile';
import { RequireAuth } from './RequireAuth';
import { AddProject } from '../screens/Projects/AddProject';
import { UpdateProject } from '../screens/Projects/UpdateProject';

const Routes = () => {
  const login = localStorage.getItem('@PowerProjects:token');

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
        <Route 
          path="/add-project" 
          element={
            <RequireAuth>
              <AddProject />
            </RequireAuth>
          } 
        />
        <Route 
          path="/update-project" 
          element={
            <RequireAuth>
              <UpdateProject />
            </RequireAuth>
          } 
        />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;