import styles from './ChatListHeader.module.css';
import React from "react";
import { Link } from 'react-router-dom';
import {
    Search,
    Menu,
    Headline,
} from '../..';

export function ChatListHeader() {
    return (
        <div className={styles.header}>
            <Link to='/profile' style={{color:'inherit', textDecoration:'inherit'}}>
                <Menu></Menu>
            </Link>
            <Headline></Headline>
            <Search></Search>
        </div>
    )
}