import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import ServiceDetails from './components/serviceDetails/ServiceDetails';
import Login from './Authentication/Login/Login';
import Register from './Authentication/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header> </Header>
          <Switch>
            <Route exact path="/">
              <Home> </Home>{' '}
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/services">
              {' '}
              <Services> </Services>{' '}
            </PrivateRoute>
            <PrivateRoute exact path="/contact">
              {' '}
              <Contact> </Contact>{' '}
            </PrivateRoute>
            <Route exact path="/about">
              {' '}
              <About> </About>{' '}
            </Route>
            <PrivateRoute exact path="/service/:_id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound> </NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
