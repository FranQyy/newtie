import React from 'react';

import { Route } from 'react-router-dom';

import SubjectList from './containers/SubjectListView';
import SubjectDetail from './containers/SubjectDetailView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={SubjectList}/>
        <Route exact path='/:subjectID' component={SubjectDetail}/>

    </div>
);

export default BaseRouter;