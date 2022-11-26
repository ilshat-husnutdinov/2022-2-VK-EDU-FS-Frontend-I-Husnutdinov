import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import {
    ArrowBack,
    UserPhoto,
    UserInfo,
    Search,
    More,
} from '../../../components';

export function Header() {
    return (
        <div className={styles.header}>
            <Link to='/' style={{color: 'inherit', textDecoration: 'inherit'}}>
                <ArrowBack></ArrowBack>
            </Link>
            <UserPhoto></UserPhoto>
            <UserInfo></UserInfo>
            <Search></Search>
            <More></More>
        </div>
    )
}

