import React from 'react';
import axios from 'axios';

import { Button, Card } from 'antd';
import {connect} from 'react-redux';
import CustomForm from '../components/CustomForm';

class SubjectDetail extends React.Component {

    state = {
        subject: []
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps);
        if (newProps.token){
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${newProps.token}`
        };
        const subjectID = this.props.match.params.subjectID;

        axios.get(`http://127.0.0.1:8000/api/${subjectID}/`)
        .then(res => {
            this.setState({subject: res.data});
            console.log(res.data);
        })
    }}

    handleDelete = (event) => {
        if (this.props.token !== null) {
        const subjectID = this.props.match.params.subjectID;
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: this.props.token
        }
        axios.delete(`http://127.0.0.1:8000/api/${subjectID}/`)
        // this.props.history.push('/');
        // this.forceUpdate();
    } else {
        //show messege
    }
    }

    render() {
        return (
            <div>
                <Card title={this.state.subject.title}>
                    <p>{this.state.subject.created_at}</p>
                </Card>

                <br />
                <h2>Change a subject</h2>
                <CustomForm
                    requestType="put"
                    subjectID={this.props.match.params.subjectID}
                    btnText="Update"
                ></CustomForm>
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">Delete</Button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
      token: state.token
    }
  }
export default connect(mapStateToProps)(SubjectDetail);