import React from 'react';
import Subjects from '../components/Subject';
import axios from 'axios';
import {connect} from 'react-redux';
import CustomForm from '../components/CustomForm';

class SubjectList extends React.Component {

    state = {
        subjects: []
    };

    componentDidMount() {
        console.log();
        if (this.props.token){
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`
        };
        axios.get('http://127.0.0.1:8000/api/')
        .then(res => {
            this.setState({subjects: res.data});
            console.log(res.data);
        })
    }};

    componentWillReceiveProps(newProps) {
        console.log(newProps);
        if (newProps.token){
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${newProps.token}`
        };
        axios.get('http://127.0.0.1:8000/api/')
        .then(res => {
            this.setState({subjects: res.data});
            console.log(res.data);
        })
    }}

    render() {
        return (
            <div>
                <Subjects data={this.state.subjects} />
                <br />
                <h2>Create a subject</h2>
                <CustomForm
                    requestType="post"
                    articleID={null}
                    btnText="Add"
                ></CustomForm>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
      token: state.token
    }
  }
export default connect(mapStateToProps)(SubjectList);