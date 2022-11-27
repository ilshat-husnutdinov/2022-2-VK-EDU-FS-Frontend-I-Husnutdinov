import React from "react";
import { useState } from "react";
import styles from './EditField.module.css';


export function EditField(props) {
    const [value, setValue] = useState('')

    const renderField = () => {
        if (props.typeField === 'input') {
            return <input value={value} onChange={e => setValue(e.target.value)} className={styles.input} type='text'></input>
        }
        return <textarea value={value} onChange={e => setValue(e.target.value)} rows={3} className={styles.input}></textarea>
    }

    return(
        <div className={styles.edit_field}>
            <div className={styles.field_name}>{props.field_name}</div>
            {renderField()}
            <span className={styles.description}>{props.description}</span>
        </div>
    )
}