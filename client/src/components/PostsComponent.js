import React, { Component } from 'react'
import axios from 'axios'

class PostsComponent extends Component {
  constructor(props) {
  	super(props)
  	this.state = {
  		posts: []	
  	}
  }

  componentDidMount() {
	  axios.get('http://localhost:3001/api/v1/posts')
	  .then(response => {
	    console.log(response)
	    this.setState({posts: response.data})
	  })
	  .catch(error => console.log(error))
	}

  render() {
	  return (
	    <div>
	      {this.state.posts.map((post) => {
	        return(
	          <div className="tile" key={post.id} >
	            <h4>{post.title}</h4>
	            <p>{post.body}</p>
	          </div>
	        )       
	      })}
	    </div>
	  );
	}
}

export default PostsComponent