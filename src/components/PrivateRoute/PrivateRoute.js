import { Redirect, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function PrivateRoute({ children, ...rest }) {
  const { users, isLoading } = useAuth();
  return (
    !isLoading && (
      <Route
        {...rest}
        render={({ location }) =>
          users.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        }
      />
    )
  );
}
export default PrivateRoute;
