import React, { Component } from 'react';
import axios from "axios";

class PostList extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
         posts: [],
         error: ""
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            (response) => {                
                this.setState({ posts: response['data']})
            }
        ).catch((error) => {            
            this.setState({error: "Error Retrieving Data"});
        });

    }

  render() {
    const {posts, error} = this.state;
    return (<React.Fragment>
            <h2>Posts List</h2>
            {
                posts.length ? posts.map((item) => <h2 key={item.id}>{item.title}</h2>) : null
            }
            { error ? <p>{ error } </p> : null }
      </React.Fragment>
    )
  }
}

export default PostList;