import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
class SignUp extends Component {
    state = {
        email:'',
        password:'',
        success:false,
        error:''
    }


    handleInputEmail = (event)=>{
        this.setState({email:event.target.value})
    } 
    handleInputPassword = (event)=>{
        this.setState({password:event.target.value})
    } 

    submitForm = e =>{
        e.preventDefault();
        const {email,password}=this.state ;
        const user ={
           
            email,
            password
        }
       this.signup(user).then((data,err) =>{
           if(err){
               this.setState({error:err})
           }else{
            this.setState({
              
                email:"",
                password:"",
                error:"",
                success:true
            })
           }
       })
    }

    signup = (user)=>{
       return axios.post('http://localhost:5000/signup',user);
     }
 


    render() {
        console.log(this.state)
        const {success} = this.state;
        if(success){
            return <Redirect to="/" />
        }
        return (
            <div>
                <h3>Register Form</h3>
                <form onSubmit={this.submitForm}>
                    
               
                        <input
                            type="text"
                            placeholder="name"
                            value = {this.state.email}
                            onChange={this.handleInputEmail}
                        />
                      

                       
                        <input
                            type="text"
                            placeholder="Enter lastname"
                            value = {this.state.password}
                            onChange={this.handleInputPassword}
                        />
                       
                        <button type="submit">Add User</button>
                 </form>   
            </div>
        );
    }
}

export default SignUp;