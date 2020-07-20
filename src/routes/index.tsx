import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Project from '../pages/Project';
// import SignUp from '../pages/SignUp';
// import Dashboard from '../pages/Dashboard';
// import ForgotPassword from '../pages/ForgotPassword';
// import ResetPassword from '../pages/ResetPassword';
// import Profile from '../pages/Profile';

const routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/project/:id" component={Project} />
    </Switch>
  );
};

export default routes;
