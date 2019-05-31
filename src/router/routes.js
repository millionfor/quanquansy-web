/*
   Root, Router 配置
*/
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import lazyLoad from './lazyLoad';
import App from '../containers/App';

const Index = lazyLoad(() => import(/* webpackChunkName: "Index" */ '../containers/Index'));
const About = lazyLoad(() => import(/* webpackChunkName: "About" */ '../containers/About'));
const ThreeYears = lazyLoad(() => import(/* webpackChunkName: "ThreeYears" */ '../containers/ThreeYears'));
const AboutToShoot = lazyLoad(() => import(/* webpackChunkName: "AboutToShoot" */ '../containers/AboutToShoot'));
const Landscapes = lazyLoad(() => import(/* webpackChunkName: "Landscapes" */ '../containers/Landscapes'));
const Night = lazyLoad(() => import(/* webpackChunkName: "Night" */ '../containers/Night'));
const Deliciousfood = lazyLoad(() => import(/* webpackChunkName: "Deliciousfood" */ '../containers/Deliciousfood'));
const Stilllife = lazyLoad(() => import(/* webpackChunkName: "Stilllife" */ '../containers/Stilllife'));
const Animal = lazyLoad(() => import(/* webpackChunkName: "Animal" */ '../containers/Animal'));
const People = lazyLoad(() => import(/* webpackChunkName: "People" */ '../containers/People'));
const Root = () => (
   <div>
      <Switch>
         <Route
            path="/"
            render={props => (
               <App>
                  <Switch>
                     <Route path="/" exact component={Index} />
                     <Route path="/index" component={Index} />
                     <Route path="/about" component={About} />
                     <Route path="/three-years" component={ThreeYears} />
                     <Route path="/about-to-shoot" component={AboutToShoot} />
                     <Route path="/landscapes" component={Landscapes} />
                     <Route path="/night" component={Night} />
                     <Route path="/deliciousfood" component={Deliciousfood} />
                     <Route path="/stilllife" component={Stilllife} />
                     <Route path="/animal" component={Animal} />
                     <Route path="/people" component={People} />
                     <Route render={() => <Redirect to="/" />} />
                  </Switch>
               </App>
            )}
         />
         <Route render={() => <Redirect to="/" />} />
      </Switch>
   </div>
);

export default hot(module)(Root);
