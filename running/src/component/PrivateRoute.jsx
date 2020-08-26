import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, isAuth, ...rest }) {
  console.log(Component);
  console.log(isAuth);
  console.log(rest);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
