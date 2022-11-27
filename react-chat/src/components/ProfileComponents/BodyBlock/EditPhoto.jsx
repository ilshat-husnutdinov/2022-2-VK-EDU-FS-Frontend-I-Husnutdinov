import React from "react";
import styles from './EditPhoto.module.css';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

export function EditPhoto() {
    const boxRef = React.createRef()

    const handleMouseEnter = () => {
        boxRef.current.style.display = 'flex';
    }

    const handleMouseLeave = () => {
        boxRef.current.style.display = 'none';
    }

    return (
        <div className={styles.photo}>
            <img
                onMouseEnter={handleMouseEnter}
                className={styles.image}
                src="https://simg.nicepng.com/png/small/356-3568165_blank-profile-picture-female.png"
                alt='UserPhoto'
            />
            <div onMouseLeave={handleMouseLeave} ref={boxRef} className={styles.icon}>
                <PhotoCameraIcon ></PhotoCameraIcon>
            </div>
        </div>
    )
}
