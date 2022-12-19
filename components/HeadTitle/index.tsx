import React from 'react'
import styles from "./headtitle.styles.module.scss"

function HeadTitle() {
    return (
        <div className={styles.headtitle}>
            <div className="container">
                <div className={styles.subtext}>
                    <p>TV Show and web series database.</p>
                    <p>
                        Create personalised schedules. Episode guide, cast, crew and
                        character information.
                    </p>
                </div>
                <h3>Last Added Shows</h3>
            </div>
        </div>
    )
}

export default HeadTitle