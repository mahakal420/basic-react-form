import React , {Component}from 'react';
import { Home}  from './Home';
import { Layout } from './layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Student from './Student';
import Teacher from './Teacher';

import {NavigationBar} from './Navbar';


class App extends Component {
  render() {
  return (



    <Router>
    <NavigationBar />
    <Layout>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/student' component={Student} />
    <Route exact path='/teacher' component={Teacher} />





    </Switch>
    </Layout>
    </Router>






  );
}
}

export default App;
