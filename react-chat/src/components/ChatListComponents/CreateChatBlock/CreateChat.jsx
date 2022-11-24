import React from "react";
import styles from  './CreateChat.module.css';
import EditIcon from '@mui/icons-material/Edit';


export function CreateChat() {
    return (
        <div className={styles.create_chat}>
            <EditIcon></EditIcon>
        </div>
    )
}