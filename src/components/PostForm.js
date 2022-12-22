import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId: 0,
         title: "",
         body: ""
      }
    }

    changeHandler = (event) => {        
        this.setState({[event.target.name]: event.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then((response) => {
            console.log(response, "success http response");
        })
        .error((error) => {
            console.log(error, "Error http response");
        })
    }


    render() {
        const {userId, title, body } = this.state;
            return (
            <React.Fragment>
            <h2>PostForm</h2>
            <form onSubmit={this.submitHandler}>
                    <div className='form-row'>
                        <label>User ID</label>
                        <input type="number" value={userId} name="userId" onChange={this.changeHandler} />
                    </div>

                    <div className='form-row'>
                        <label>Title</label>
                        <input type="text" value={title} name="title" onChange={this.changeHandler}  />
                    </div>

                    <div className='form-row'>
                        <label>Post content</label>
                        <textarea name="body" value={body} onChange={this.changeHandler} ></textarea>
                    </div>

                    <div className='form-row'>
                        <button type='submit'>Save Post</button>
                    </div>
            </form>
            </React.Fragment>
            )
    }
}

export default PostForm