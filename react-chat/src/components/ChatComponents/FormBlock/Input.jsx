import React, { useState } from 'react';
import './input.css'


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
        <div className="footer">
                <form className="form" onSubmit={handleSubmit} >
                    <input
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        className="form-input"
                        name="message-text"
                        placeholder='Сообщение'
                        type="text"
                    />
                    <span className="material-icons">attachment</span>
                </form>

        </div>
    )
}