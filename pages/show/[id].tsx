import { useRouter } from 'next/router'
import React, { Fragment, useState } from 'react'
import { useQuery } from 'react-query'
import axios from "axios"
import { MainLayout } from 'layout'
import { Loader } from 'components'
import styles from "./show.styles.module.scss"
import ShowInfo from './components/ShowInfo'
import StarringList from './components/Starring'
import Head from 'next/head'
import Image from 'next/image'
import ShowRating from '@components/ShowRating'

function Show() {
    const router = useRouter()
    const { id } = router.query
    const { isLoading, error, data: show, isSuccess } = useQuery('scheduleShow', (() =>
        axios.get(`shows/${id}?embed=cast`).then(res =>
            res.data
        )),
        {
            enabled: !!id,
        }
    )
    const [LoadingComplete, setLoadingComplete] = useState(true)
    const ImageLoadingComplete = () => {
        setLoadingComplete(false)
    }

    return (
        <MainLayout>
            {(isLoading || LoadingComplete) &&
                <Loader />
            }
            {(id && isSuccess && show) &&
                <Fragment>
                    <Head>
                        <html lang={'en'} />
                        <title>TV Bland | {show.name}</title>
                        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                        <meta name="description" content={show.summary} />
                        <meta name="keywords" content={show.name} />
                    </Head>

                    <div className={`${styles.hero}`}>
                        <div className="container">
                            <div className={`row`}>
                                <div className="col-lg-3 col-md-4 col-sm-12 text-center my-3">
                                    <Image
                                        src={show?.image?.medium}
                                        alt=""
                                        width={210}
                                        height={295}
                                        onLoad={ImageLoadingComplete}
                                    />
                                </div>
                                <div className="col my-auto">
                                    <ShowRating color='#FFBF00' rating={show.rating?.average || 0} shownumber />
                                    <h2>
                                        {show.name}
                                    </h2>
                                    <p dangerouslySetInnerHTML={{ __html: show.summary }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className={styles.showWrap}>
                            <div className="row my-5">
                                <ShowInfo info={show} />
                                {show._embedded && <StarringList list={[...show._embedded.cast]} />}
                            </div>
                        </div>
                    </div>
                </Fragment>
            }
        </MainLayout>
    )
}

export default Show