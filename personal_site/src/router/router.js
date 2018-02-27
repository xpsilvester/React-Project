import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!../pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!../pages/Page1/Page1';
import Community from 'bundle-loader?lazy&name=community!../pages/Community/Community';
import Blog from 'bundle-loader?lazy&name=blog!../pages/Blog/Blog';

const Loading = function () {
    return <div>Loading...</div>
};

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);

const getRouter = () => (
    <Router>
        <div>
            <div className="nav">
                <div className="navLeft">
                  <p><Link to="/">首页</Link></p>
                  <p><Link to="/page1">Page1</Link></p>
                  <p><Link to="/community">社区</Link></p>
                  <p><Link to="/blog">博客</Link></p>
                </div>
                <div className="navRight">
                  <p>搜索文档</p>
                  <p>v16.2.0</p>
                  <p><a href="https://github.com/facebook/react/" target="_blank">Github</a></p>
                </div>
            </div>
            <Switch>
                <Route exact path="/" component={createComponent(Home)}/>
                <Route path="/page1" component={createComponent(Page1)}/>
                <Route path="/community" component={createComponent(Community)}/>
                <Route path="/blog" component={createComponent(Blog)}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;