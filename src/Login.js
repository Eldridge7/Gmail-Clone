import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth, provider } from './firebase';
import "./Login.css";

function Login() {
    const dispatch = useDispatch();
    const signIn = () => {
       auth.signInWithPopup(provider)
       .then(({ user }) => {
           dispatch(login({
             displayName: user.displayName,
             email: user.email,
             photoUrl: user.photoURL
           }));
       }).catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__container">

                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABIFBMV
                EXy8vJgY2jrQzZDhfU0qFPGIiD8vAX29vb5+flcX2RXW2BSVly6vL3i4uL69/KCqfOTyJ88gvUopUzKy8yGiIxKifVqb
                HKytLXn5+jPz9Hh5/J3en7f6uIwfvQco0T8ugDy+vrDAADFFhTx9PrScHD40oTqOCjqMR+lpqiYmp3rSDrscmra2tzy7O3sug/Cw
                8UWplaLjZFKqk3qLxvr0tHw4+L07dz0583gq6vMSkfIKSfZkI740nn6xkT24LDJNzTEDAn32pr6ylbtV0n2473XhILwt7LvqaTtg3
                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" 
                
                alt=""/>
               <Button variant="contained" color="primary" onClick={signIn} >Login </Button>
            </div>
           
            
        </div>
    )
}

export default Login
