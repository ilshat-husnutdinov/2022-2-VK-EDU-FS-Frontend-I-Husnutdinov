import React from 'react';
import './Header.css'
import {
    ArrowBack,
    UserPhoto,
    UserInfo,
    Search,
    More,
} from '../../../components';

export function Header(props) {
    return (
        <div className="header">
            <ArrowBack ChangeDisplay={props.ChangeDisplay}></ArrowBack>
            <UserPhoto></UserPhoto>
            <UserInfo></UserInfo>
            <Search></Search>
            <More></More>
        </div>
    )
}

