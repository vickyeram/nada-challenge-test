import React, { Fragment } from 'react'
import Footer from './Footer'
import Header from './Header'

interface Props {
    children: React.ReactNode
}

function MainLayout({ children }: Props) {
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    )
}

export default MainLayout