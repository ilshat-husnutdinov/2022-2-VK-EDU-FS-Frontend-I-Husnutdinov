import React from "react";
import styles from './Message.module.css';
import { parseTime } from "../../utils";
import DoneAllIcon from '@mui/icons-material/DoneAll';

export function Message(props) {
    return (
        <div className={styles.message_container}>
            <div className={styles.message_text}>
               {props.text}
            </div>
            <div className={styles.message_info}>
                <div className={styles.message_time}>
                    {parseTime(props.time)}
                </div>
                <div className={styles.message_status}>
                    <span className={styles.status}>
                        <DoneAllIcon fontSize="calc(10px + 16 * (100vw / 1280))"></DoneAllIcon>
                    </span>
                </div>
            </div>
        </div>
    )
}