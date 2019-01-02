
import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";

import '../Layout.css';

const {
  Header, Footer, Sider, Content,
} = Layout;

class CustomLayout extends React.Component {
  render() {
    return(
    <Layout>
      <Sider>
        <Link to="/">Home </Link>
        <Link to="/">List </Link>
      {
        this.props.isAuthenticated ?
        <Link to="/logout" onClick={this.props.logout}>Logout</Link>
        :
        <Link to="/login">Login </Link>


      }
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
            <div>{this.props.children}</div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    );
}
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(CustomLayout)
);
