import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import {
    Form, Input, Button,
  } from 'antd';
  
  const FormItem = Form.Item;
  
  class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, subjectID) => {
        // event.preventDefault();
        const title = event.target.elements.title.value;
        const slug = event.target.elements.slug.value;

        // axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        // axios.defaults.xsrfCookieName = "csrftoken";
        axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${this.props.token}`,
        };

        switch ( requestType ){

          case "post":
            return axios
                .post('http://127.0.0.1:8000/api/', {
                  title: title,
                  slug: slug
                })
                .then(res => console.log(res))
                .catch(error => console.error(error));
          case 'put':
          return axios
            .put(`http://127.0.0.1:8000/api/${subjectID}/`, {
              title: title,
              slug: slug
            })
            .then(res => console.log(res))
            .catch(error => console.error(error));
        }
    };
  
    render(){
      return (
        <div>
            <Form onSubmit={(event) => this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.subjectID
              )}>
              <FormItem label="Title">
                <Input name="title" placeholder="Put a title here" />
              </FormItem>
              <FormItem label="Content">
                <Input name="slug" placeholder="Enter the slug" />
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
              </FormItem>
            </Form>
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return{
      token: state.token
    };
  };

export default connect(mapStateToProps)(CustomForm);