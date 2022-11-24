import React from 'react';
import styles from './Menu.module.css';
import MenuIcon from '@mui/icons-material/Menu';

export function Menu() {
    return (
        <div className={styles.menu}>
            <MenuIcon></MenuIcon>
        </div>
    )
}