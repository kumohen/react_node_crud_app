import React, { Component } from 'react';
import axios from 'axios';

import PostItem from './PostItem'

class Crud extends Component {
    state ={
        posts:[]
    }
    componentDidMount(){
        axios.get('/getPost')
            .then(response => this.setState({posts:response.data}) )
    }
   
    render() {
        const {posts} = this.state;
        
        return (
            <div className="container">
               
                <hr/>
                <h2 className="mt-4 mb-4 text-center">Node and React base Crud App</h2>
                {posts && posts.map((post,i) => 
                  
                    <PostItem post={post} key={i}/>
                    
                  
                )}
            </div>
        );
    }
}

export default Crud;