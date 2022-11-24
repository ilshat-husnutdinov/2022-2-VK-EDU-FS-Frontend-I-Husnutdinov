import React from "react";
import styles from './ArrowBack.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function ArrowBack({ChangeDisplay}) {
    return (
        <div className={styles.back} onClick={ChangeDisplay}>
            <ArrowBackIcon></ArrowBackIcon>
        </div>
    )
}

