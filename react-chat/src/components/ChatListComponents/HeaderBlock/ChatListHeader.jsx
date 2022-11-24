import styles from './ChatListHeader.module.css';
import React from "react";
import {
    Search,
    Menu,
    Headline,
} from '../..';

export function ChatListHeader() {
    return (
        <div className={styles.header}>
            <Menu></Menu>
            <Headline></Headline>
            <Search></Search>
        </div>
    )
}