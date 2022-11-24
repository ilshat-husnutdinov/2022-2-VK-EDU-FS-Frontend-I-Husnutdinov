import React from "react";
import styles from './UserInfo.module.css';


export function UserInfo() {
    return(
        <div className={styles.info}>
            <div className={styles.name}>
                Дженниффер
            </div>
            <div className={styles.last_visit}>
                была 2 часа назад
            </div>
        </div>
    )
}