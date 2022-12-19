import React from 'react'
import styles from "./loader.styles.module.scss"

function Loader() {
    return (
        <div className={styles.loaderWrap}>
            <div className={styles.ldsRipple}><div></div><div></div></div>
        </div>
    )
}

export default Loader