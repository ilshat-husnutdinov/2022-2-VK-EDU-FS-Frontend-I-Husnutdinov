import React, {useEffect, useRef} from 'react';
import styles from './Messages.module.css';
import { Message } from '../../../components/Message';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export function Messages(props) {
    const  messagesEndRef = useRef(null);

    useEffect(() => {
		messagesEndRef.current.scrollIntoView({behavior: 'smooth'});
    },
    [props.chatMessages]);

    return (
            <div className={styles.message} >
                <TransitionGroup>
                    {props.chatMessages.map(chatMsg =>
                        <CSSTransition
                            key={chatMsg.id}
                            timeout={300}
                            classNames={{
                                enter: styles.msg_enter,
                                enterActive: styles.msg_enter_active,
                            }}
                        >
                            <Message text={chatMsg.text} time={chatMsg.time}/>
                        </CSSTransition>
                    )}
                </TransitionGroup>
                <div ref={messagesEndRef}></div>
            </div>
    )
}