import React, { Component,Fragment } from 'react';
import { Link,Redirect } from 'react-router-dom';
import axios from 'axios';

class PostItem extends Component {
    state ={
        msg:"",
        success:false
    }
    delete = ()=>{
        axios.get("/post/" + this.props.post._id)
        .then(this.setState({success:true}))
            .catch(err => console.log(err))
    }
   
    render() {
        const {post} = this.props;
       const {success}  = this.state;
        if(success){
            return <Redirect to="/" />
        }
        return (
            <Fragment>
     
                <div className="container">
                    <div className="card mb-2">
                        <div className="card-body">
                            <h5 className="card-title">{post.title.substring(0,40)}</h5>
                            <p className="card-text">{post.description}</p>
                            <Link className="btn btn-outline-primary" to={`/post/${post._id}`}><i className="fa fa-pencil-square-o" aria-hidden="true"></i>Edit</Link>
                            <button onClick={this.delete} className="btn btn-outline-danger ml-3" >Delete</button>
                        </div>
                    </div>
            

                </div>
            </Fragment>

        
        );
    }
}

export default PostItem;