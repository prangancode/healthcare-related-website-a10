import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Components/Paths/About/About';
import Blog from './Components/Paths/Blog/Blog';
import Doctor from './Components/Paths/Doctor/Doctor';
import Home from './Components/Paths/Home/Home';
import Login from './Components/Paths/Login/Login';
import NotFound from './Components/Paths/NotFound/NotFound';

import Service from './Components/Paths/Service/Service';
import ServiceDetail from './Components/Paths/ServiceDetails/ServiceDetail';
import AuthProvider from './ContextApi/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/doctor">
            <Doctor></Doctor>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/serviceDetail/:serviceID">
            <ServiceDetail></ServiceDetail>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;