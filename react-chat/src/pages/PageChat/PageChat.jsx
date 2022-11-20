import styles from './PageChat.module.css';
import React, { useState, useEffect } from 'react';
import { setInfoMessagesToLocStore, getInfoMessagesFromLocStore} from '../../utils';
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


	const addMessage = (newMsg) => {
		setChatMessages([...chatMessages,newMsg]);
		setInfoMessagesToLocStore(chatMessages,newMsg);
	}

	return (
		<div className={styles.page_chat} style={{display:props.PageChatDisplay}}>
			<Header ChangeDisplay={props.ChangeDisplay}></Header>
			<Messages chatMessages={chatMessages} ></Messages>
			<InputMessage add={addMessage}></InputMessage>
		</div>
	);
}





