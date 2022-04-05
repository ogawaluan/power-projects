import { Routes as Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Home } from '../screens/Home';
import { Projects } from '../screens/Projects';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { Profile } from '../screens/Profile';

const Routes = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/profile" element={<Profile />} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;