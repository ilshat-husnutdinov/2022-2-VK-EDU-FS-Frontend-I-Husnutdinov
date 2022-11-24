import React, { useState } from 'react';
import styles from './input.module.css';
import AttachmentIcon from '@mui/icons-material/Attachment';


export function InputMessage(props) {

    const [value, setValue] = useState('');

    const sendMessage = () => {
        const new_msg = {
            id: Date.now(),
            text:value,
            author:'ilshat',
            time:new Date()
        }
        props.add(new_msg);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === '') {
            setValue('');
            return;
        }
        sendMessage();
        setValue('');
    }

    return (
        <div className={styles.footer}>
                <form className={styles.form} onSubmit={handleSubmit} >
                    <input
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        className={styles.form_input}
                        name="message-text"
                        placeholder='Сообщение'
                        type="text"
                    />
                    <span className={styles.attachment}>
                        <AttachmentIcon></AttachmentIcon>
                    </span>
                </form>
        </div>
    )
}