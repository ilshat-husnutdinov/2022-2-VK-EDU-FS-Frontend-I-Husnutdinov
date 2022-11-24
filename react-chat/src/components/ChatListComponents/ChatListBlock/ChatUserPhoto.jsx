import React from "react";
import styles from './ChatUserPhoto.module.css'


export function ChatUserPhoto() {
    return (
        <div className={styles.photo}>
            <img className={styles.image} src="https://simg.nicepng.com/png/small/356-3568165_blank-profile-picture-female.png" alt='ChatPhoto' />
        </div>
    )
}