import Link from 'next/link'
import React from 'react'
import { IShowCardProps } from './types'
import styles from "./showcard.styles.module.scss"
import Image from 'next/image'
import ShowRating from '@components/ShowRating'

function ShowCard({ episode }: IShowCardProps) {
    let img = `/images/placeholder.png`
    if (episode.image) {
        img = episode.image.medium
    } else if (episode.show.image) {
        img = episode.show.image.medium
    }
    return (
        <div className={`${styles.showCardWrap} col-xl-2 col-lg-3 col-md-4 col-sm-6 my-3`}>
            <Link href={`show/${episode.show.id}`}>
                <Image
                    src={img}
                    alt=""
                    width={210}
                    height={295} />
                <ShowRating rating={episode.rating?.average || 0}/>
                <p className='mt-1'> {episode?.show?.name} </p>
            </Link>
        </div>
    )
}

export default ShowCard