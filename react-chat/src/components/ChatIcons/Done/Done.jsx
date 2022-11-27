import React from "react";
import styles from './Done.module.css';
import DoneIcon from '@mui/icons-material/Done';

export function Done() {
    return (
        <div className={styles.done} >
            <DoneIcon></DoneIcon>
        </div>
    )
}