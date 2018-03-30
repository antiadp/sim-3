import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Auth from '../src/component/Auth/Auth';
import Dashboard from '../src/component/Dashboard/Dashboard';
import Form from '../src/component/Form/Form';
import Post from '../src/component/Post/Post';

export default (
    <HashRouter>
          <div>
          <Switch>
            <Route exact path='/' component={Auth} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/new' component= {Form} />
            <Route path='/Post/:postid' component={Post} />
          </Switch>
          </div>
        </HashRouter>
)