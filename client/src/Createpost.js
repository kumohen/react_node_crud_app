import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Createpost extends Component {
    state={
        title:'',
        description:'',
        success:false
    }
    onChangeTitle = e =>{
        this.setState({title:e.target.value})
    }
    onChangeDescription = e =>{
        this.setState({description:e.target.value})
    }
    onSubmit = (e)=>{
        e.preventDefault();
        const obj= {
            title:this.state.title,
            description:this.state.description
        }
        axios.post("/createPost",obj);
        this.setState({
            title:'',
            description:'',
            success:true
        })
    }
    render() {
        const {success}  = this.state;
        if(success){
            return <Redirect to="/" />
        }
        return (
            <div className="container">
                 <h3 className="mt-4">Create Post</h3>
                 <form onSubmit={this.onSubmit}>
                 <div className="form-group">
                    <label>Title:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.title}
                      onChange={this.onChangeTitle}
                      />
                </div>
                <div className="form-group">
                    <label>Description:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                      />
                </div>
                <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Createpost;