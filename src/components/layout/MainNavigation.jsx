import React from 'react';
import styles from './MainNavigation.module.css';

export default function MainNavigation() {
  return (
    <div className={styles.header}>
        <div className = {styles.navBar}>
            <div className = {styles.logo}>
                home
            </div>
            <div className = {styles.menu}>
                <i class="fa fa-bars"></i> <span>Menu</span>
            </div>
        </div>
        <div className = {styles.contactUs}>
            <i class="fa fa-message"></i> <span>Contact us</span>
        </div>
    </div>
  )
}
