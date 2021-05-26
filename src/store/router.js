import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Home from "../pages/Home"
import PendingCard from "../pages/Home/PendingCard"
const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => (isLoggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: `${process.env.PUBLIC_URL}/signin`,
          state: { from: props.location },
        }}
      />
    ))
    }
  />
);
const PublicRoutes = ({ history, isLoggedIn }) => (
  <ConnectedRouter history={history}>
    <div>
      <Route
        exact
        path='/'
        component={ Home }
      />
      <Route
        exact
        path='/pending'
        component={ PendingCard }
      />
      
    </div>
  </ConnectedRouter>
);

// export default connect(state => ({
//   isLoggedIn: state.auth.idToken !== null,
// }))(PublicRoutes);
export default PublicRoutes