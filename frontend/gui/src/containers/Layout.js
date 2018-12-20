import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

import '../Layout.css';

const {
  Header, Footer, Sider, Content,
} = Layout;

const CustomLayout = (props) => {
    return(
    <Layout>
      <Sider>
        <Link to="/">Home</Link>
        <Link to="/">List</Link>
        <Link to="/login">Login</Link>

      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
            <div>{props.children}</div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    );
}

export default CustomLayout;