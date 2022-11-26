import styles from './PageChat.module.css';
import React, { useState, useEffect } from 'react';
import { setInfoMessagesToLocStore, getInfoMessagesFromLocStore} from '../../utils';
import {
	Header,
	Messages,
	InputMessage
} from '../../components';


export function PageChat() {
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
		<div className={styles.page_chat}>
			<Header></Header>
			<Messages chatMessages={chatMessages} ></Messages>
			<InputMessage add={addMessage}></InputMessage>
		</div>
	);
}





