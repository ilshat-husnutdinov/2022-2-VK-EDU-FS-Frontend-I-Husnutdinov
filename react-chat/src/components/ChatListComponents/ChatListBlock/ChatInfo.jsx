import React, { useState, useEffect } from "react";
import classes from './ChatInfo.module.css';
import { parseTime } from "../../../utils";

export function ChatInfo({lastMessage}) {
    const [text, setText] = useState()
    const [time, setTime] = useState()
    const [condition,setCondition] = useState()

    useEffect(() => {
        if (lastMessage) {
            setText(lastMessage.text);
            setTime(lastMessage.time);
            setCondition('done_all')
        }
    }, [lastMessage])

    return (
        <div className={classes.chatInfo}>
            <div className={classes.nameText}>
                <div className={classes.name}>Дженниффер</div>
                <div className={classes.text}>{text}</div>
            </div>
            <div className={classes.info}>
                <div className={classes.time}>{parseTime(time)}</div>
                <div className={classes.condition}>
                    <span className="material-icons">{condition}</span>
                </div>
            </div>
        </div>
    )
}