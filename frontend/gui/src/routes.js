import React from 'react';

import { Route } from 'react-router-dom';

import SubjectList from './containers/SubjectListView';
import SubjectDetail from './containers/SubjectDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup'


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={SubjectList}/>
        <Route exact path='/subjects/:subjectID' component={SubjectDetail}/>
        <Route exact path='/login/' component={Login}/>
        <Route exact path='/signup/' component={Signup}/>


    </div>
);

export default BaseRouter;