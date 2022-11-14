import React from 'react';
import './Messages.css'
import { Message } from '../../../components/Message';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export function Messages(props) {

    return (
            <div className='message'>
                <TransitionGroup>
                    {props.chatMessages.map(chatMsg =>
                        <CSSTransition key={chatMsg.id} timeout={300} classNames='msg'>
                            <Message text={chatMsg.text} time={chatMsg.time}  />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
    )
            // <div className='message'>

            //      {props.chatMessages.map(chatMsg =>

            //             <Message text={chatMsg.text} time={chatMsg.time}  />

            //         )}
            // </div>

}