import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from "./mainlayout.styles.module.scss"

function Header() {
    const router = useRouter()

    return (
        <section className={styles.header}>
            <header className='container'>
                <div className="row">
                    <Link href="/">
                        {router.pathname != "/" && <i className="fa fa-caret-left" aria-hidden="true"></i>}
                        <h2>TV Bland</h2>
                    </Link>
                </div>
            </header>
        </section>
    )
}

export default Header