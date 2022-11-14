import './PageChatList.css';
import React from 'react';
import {
    ChatListHeader,
    ChatList,
    CreateChat
} from '../../components';


export function PageChatList(props) {
    return (
        <div className='PageChatList'  style={{display:props.PageChatListDisplay}}>
            <ChatListHeader></ChatListHeader>
            <ChatList ChangeDisplay={props.ChangeDisplay}></ChatList>
            <CreateChat></CreateChat>
        </div>
    )
}