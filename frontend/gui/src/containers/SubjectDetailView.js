import React from 'react';
import axios from 'axios';

import { Button, Card } from 'antd';

import CustomForm from '../components/CustomForm';

class SubjectDetail extends React.Component {

    state = {
        subject: []
    }

    componentDidMount() {
        const subjectID = this.props.match.params.subjectID;

        axios.get(`http://127.0.0.1:8000/api/${subjectID}`)
        .then(res => {
            this.setState({subject: res.data});
            console.log(res.data);
        })
    }

    handleDelete = (event) => {
        const subjectID = this.props.match.params.subjectID;
        axios.delete(`http://127.0.0.1:8000/api/${subjectID}`)
        // this.props.history.push('/');
        // this.forceUpdate();
        
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

export default SubjectDetail;