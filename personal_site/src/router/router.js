import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Page1 from '../pages/Page1/Page1';
import Community from '../pages/Community/Community';
import Blog from '../pages/Blog/Blog';

const getRouter = () => (
    <Router>
        <div>
            <div className="nav">
                <div className="navLeft">
                  <p><Link to="/">首页</Link></p>
                  <p><Link to="/page1">Page1</Link></p>
                  <p><Link to="/Community">社区</Link></p>
                  <p><Link to="/Blog">博客</Link></p>
                </div>
                <div className="navRight">
                  <p>搜索文档</p>
                  <p>v16.2.0</p>
                  <p><a href="https://github.com/facebook/react/" target="_blank">Github</a></p>
                </div>
            </div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/page1" component={Page1}/>
                <Route path="/Community" component={Community}/>
                <Route path="/Blog" component={Blog}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;