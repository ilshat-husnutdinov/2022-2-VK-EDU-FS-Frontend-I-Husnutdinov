import React, { useState, useEffect } from "react";
import styles from './ChatInfo.module.css';
import { parseTime } from "../../../utils";
import DoneAllIcon from '@mui/icons-material/DoneAll';


export function ChatInfo({lastMessage}) {
    const [text, setText] = useState()
    const [time, setTime] = useState()
    const [condition,setCondition] = useState()

    useEffect(() => {
        if (lastMessage) {
            setText(lastMessage.text);
            setTime(lastMessage.time);
            setCondition(<DoneAllIcon></DoneAllIcon>)
        }
    }, [lastMessage])

    return (
        <div className={styles.chatInfo}>
            <div className={styles.nameText}>
                <div className={styles.name}>Дженниффер</div>
                <div className={styles.text}>{text}</div>
            </div>
            <div className={styles.info}>
                <div className={styles.time}>{parseTime(time)}</div>
                <div className={styles.condition}>
                    {condition}
                </div>
            </div>
        </div>
    )
}