import React, {useEffect} from 'react';
import styles from './Messages.module.css';
import { Message } from '../../../components/Message';
import { scroll } from '../../../utils';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export function Messages(props) {

    useEffect(() => {
		scroll(styles.message);
    },
    [props.chatMessages]);

    return (
            <div className={styles.message}>
                <TransitionGroup>
                    {props.chatMessages.map(chatMsg =>
                        <CSSTransition key={chatMsg.id} timeout={300} classNames={{
                            enter: styles.msg_enter,
                            enterActive: styles.msg_enter_active,
                        }}>
                            <Message text={chatMsg.text} time={chatMsg.time}/>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
    )
}