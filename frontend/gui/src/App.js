import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';
import BaseRouter from './routes';

import './App.css';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import CustomLayout from './containers/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <CustomLayout>
                <BaseRouter />
            </CustomLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
