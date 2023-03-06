import React from 'react'
import styles from './Body.module.css';
export default function () {
  return (
    <div className = {styles.main}>
        <div className={styles.bodyTitle}>
            HOME
        </div>
        <div className = {styles.bottomPic}>
            <img className = {styles.gardenImage} src = {'/src/assets/garden.jpg'} alt = "garden" />
        </div>
    </div>
  )
}
