import React, { Component } from 'react'
import './App.css'
import PostsComponent from './components/PostsComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostsComponent />
      </div>
    );
  }
}

export default App