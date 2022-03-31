import { Routes as Switch, Route } from 'react-router-dom';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Switch>
  );
};

export default Routes;