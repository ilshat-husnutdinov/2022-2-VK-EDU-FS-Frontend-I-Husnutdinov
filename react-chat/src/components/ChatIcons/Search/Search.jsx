import React from "react";
import styles from './Search.module.css';
import SearchIcon from '@mui/icons-material/Search';

export function Search() {
    return (
        <div className={styles.search}>
            <SearchIcon></SearchIcon>
        </div>
    )
}