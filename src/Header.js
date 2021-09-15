import React from 'react';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());

        });

    };
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                  <MenuIcon />

                </IconButton>
                <img 
                src="data:image/jpeg;base64,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" alt=""/>
               

            </div>

            <div className="header__middle">
                <SearchIcon />
                <input type="text" placeholder="search mail"/>
                <ArrowDropDownIcon className="header__inputCaret" />

            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl}/>


            </div>
        </div>
    )
}

export default Header
