import './PageChat.css';
import React, { useState, useEffect } from 'react';
import { setInfoMessagesToLocStore, getInfoMessagesFromLocStore, scroll } from '../../utils';
import {
	Header,
	Messages,
	InputMessage
} from '../../components';


export function PageChat(props) {
	const [chatMessages, setChatMessages] = useState([])

	useEffect(() => {
		!getInfoMessagesFromLocStore()
		? setChatMessages([])
		: setChatMessages([...getInfoMessagesFromLocStore()])
    },
    []);

	useEffect(() => {
		scroll();
    },
    [chatMessages]);

	const addMessage = (newMsg) => {
		setChatMessages([...chatMessages,newMsg]);
		setInfoMessagesToLocStore(chatMessages,newMsg);
	}

	return (
		<div className='PageChat' style={{display:props.PageChatDisplay}}>
			<Header ChangeDisplay={props.ChangeDisplay}></Header>
			<Messages chatMessages={chatMessages} ></Messages>
			<InputMessage add={addMessage}></InputMessage>
		</div>
	);
}





