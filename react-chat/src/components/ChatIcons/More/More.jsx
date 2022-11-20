import React, { useState } from "react";
import styles from './More.module.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export function More() {
    const [IsOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        IsOpen ? setIsOpen(false) : setIsOpen(true);
    }

    const changeDisplay = () => {
        return IsOpen ? 'block' : 'none'
    }

    React.useEffect(() => {
        window.addEventListener('click', function(e) {
            e.preventDefault();
            console.log(e.type)
            if (!e.target.closest('.'+styles.more_vert)) {
                setIsOpen(false);
                console.log(e.target)
            }
        })
    },
    []);


    return (
        <div>
            <button  className={styles.dropbtn} onClick={handleClick}>
                <span className={styles.more_vert}>
                    <MoreVertIcon></MoreVertIcon>
                </span>
            </button>
            <div className={styles.dropdown_content} style={{display:changeDisplay()}}>
              <a href="/#">Info</a>
              <a href="/#">Mute</a>
            </div>
        </div>
    )
}