import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter ,Route} from 'react-router-dom';
import App from './App';
import Signup from './SignUp';
import SignIn from './Signin';
import Crud from './Crud'
import CreatePost from './Createpost';
import UpdatePost from './UpdatePost';
import Header from './Header';

const Main = ()=>{
   return (
       <div>

            <BrowserRouter>
          <Header/>  
        <Route exact path="/" component={Crud} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/app" component={App} />
        <Route exact path="/createPost" component={CreatePost} />
        <Route exact path="/post/:id" component={UpdatePost} />
    </BrowserRouter>
       </div>    
   )
}

ReactDOM.render(<Main />, document.getElementById('root'));

