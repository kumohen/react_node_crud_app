import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
 
  
  <div className="collapse navbar-collapse" >
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/createPost">CreatePost</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/app">Extra</Link>
      </li>
    </ul>
    
  </div>
</nav>
            
         
        
              
        </div>
    );
};

export default Header;