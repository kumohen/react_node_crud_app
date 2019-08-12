import React from 'react';

const UserList = ({user}) => {
    return (
        <div>
            <li>{user.email}</li>
        </div>
    );
};

export default UserList;