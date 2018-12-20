import React from 'react';
import Subjects from '../components/Subject';
import axios from 'axios';

import CustomForm from '../components/CustomForm';

class SubjectList extends React.Component {

    state = {
        subjects: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
        .then(res => {
            this.setState({subjects: res.data});
            console.log(res.data);
        })
    }

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

export default SubjectList;