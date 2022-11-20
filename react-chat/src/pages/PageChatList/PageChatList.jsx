import styles from './PageChatList.module.css';
import React from 'react';
import {
    ChatListHeader,
    ChatList,
    CreateChat
} from '../../components';


export function PageChatList(props) {
    return (
        <div className={styles.page_chatList}  style={{display:props.PageChatListDisplay}}>
            <ChatListHeader></ChatListHeader>
            <ChatList ChangeDisplay={props.ChangeDisplay}></ChatList>
            <CreateChat></CreateChat>
        </div>
    )
}