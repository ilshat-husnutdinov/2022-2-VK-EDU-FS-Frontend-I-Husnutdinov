import React from "react";
import { EditField } from "./EditField";
import { EditPhoto } from "./EditPhoto";
import styles from './ProfileBody.module.css';


export function ProfileBody() {
    return(
        <div className={styles.edit_area}>
            <EditPhoto></EditPhoto>
            <EditField typeField={'input'} field_name={'Full name'}/>
            <EditField
                typeField={'input'}
                field_name={'Username'}
                description={'Minimum length is 5 characters'}
            />
            <EditField
                typeField={'textArea'}
                field_name={'Bio'}
                description={'Any details about you'}
            />
        </div>
    )
}