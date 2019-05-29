import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {hot} from 'react-hot-loader';
import Store from '../redux';
import DevTools from '../redux/DevTools';
import App from '../containers/app';
import About from '../containers/about';
import Index from '../containers/index';
import ThreeYears from '../containers/threeYears';
import AboutToShoot from '../containers/aboutToShoot';
import Landscapes from '../containers/landscapes';
import Night from '../containers/night';
import Deliciousfood from '../containers/deliciousfood';
import Stilllife from '../containers/stilllife';
import Animal from '../containers/animal';
import People from '../containers/people';

const Router = ({component: Component, children, ...rest}) => (
  <Route
    {...rest}
    render={props => (
      <Component {...props} ><Switch>{children}</Switch></Component>
    )}
  />
);

const Root = () => (
  <BrowserRouter>
    <Provider store={Store}>
      <div className="router-content">
        {__DEVELOPMENT__ && <DevTools />}
        <Switch>
          <Router path="/" component={App} >
            <Router exact path="/about" component={About} />
            <Router exact path="/index" component={Index} />
            <Router exact path="/three-years" component={ThreeYears} />
            <Router exact path="/about-to-shoot" component={AboutToShoot} />
            <Router exact path="/landscapes" component={Landscapes} />
            <Router exact path="/night" component={Night} />
            <Router exact path="/deliciousfood" component={Deliciousfood} />
            <Router exact path="/stilllife" component={Stilllife} />
            <Router exact path="/animal" component={Animal} />
            <Router exact path="/people" component={People} />
          </Router>
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default hot(module)(Root);
