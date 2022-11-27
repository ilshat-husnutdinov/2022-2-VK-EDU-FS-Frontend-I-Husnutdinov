import React from "react";
import styles from './ProfileHeader.module.css';
import { ArrowBack, Done } from "../../ChatIcons";
import { Link } from "react-router-dom";


export function ProfileHeader() {
    return(
        <div className={styles.header}>
            <Link to='/' style={{color:'inherit', textDecoration:'inherit'}}>
                <ArrowBack></ArrowBack>
            </Link>
            <div className={styles.edit_text}>Edit Profile</div>
            <Done></Done>
        </div>
    )
}