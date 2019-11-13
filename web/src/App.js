import React,{ Suspense, lazy } from 'react';
import './App.css';
import { hot } from 'react-hot-loader/root'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Loading from './utils/loading'
const Home = lazy(() => import(/* webpackChunkName: "home" */'./pages/home'));
const Err = lazy(() => import(/* webpackChunkName: "err" */'./pages/err'));
const Login = lazy(() => import(/* webpackChunkName: "login" */'./pages/login'));
function App() {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
        <Switch>
          <Route path='/login' exact component={Login}/>
          <Route path='/err' exact component={Err}/>
          <Route path='/' component={Home}/>
        </Switch>
      </Suspense>
    </Router>
  );
}
export default process.env.NODE_ENV === "development" ? hot(App) : App
