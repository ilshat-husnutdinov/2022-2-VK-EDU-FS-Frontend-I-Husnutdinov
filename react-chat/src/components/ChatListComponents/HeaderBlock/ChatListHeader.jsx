import './ChatListHeader.css';
import React from "react";
import {
    Search,
    Menu,
    Headline,
} from '../..';

export function ChatListHeader() {
    return (
        <header>
                <Menu></Menu>
                <Headline></Headline>
                <Search></Search>
        </header>
    )
}