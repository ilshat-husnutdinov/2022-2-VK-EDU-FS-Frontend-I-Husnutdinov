import styles from './PageProfile.module.css';
import React from "react";
import { ProfileHeader, ProfileBody} from '../../components';


export function PageProfile() {
        return(
            <div className={styles.page_profile}>
                <ProfileHeader/>
                <ProfileBody/>
            </div>
        )
}