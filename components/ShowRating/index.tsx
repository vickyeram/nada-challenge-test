import React, { Fragment } from 'react'
import StarRatings from 'react-star-ratings';
import styles from "./showrating.styles.module.scss"

interface IProps { rating: number, shownumber?: boolean | undefined, color?: string }

function ShowRating({ rating, shownumber, color }: IProps) {
    return (
        <div className='d-flex my-2'>
            <StarRatings
                rating={rating * 50 / 100}
                numberOfStars={5}
                starDimension="18px"
                starSpacing='0'
                starRatedColor={color || 'var(--main-bg-color)'}
                starEmptyColor='#cbcbcb'
            />
            {shownumber && <p className={`${styles.p} p-0 m-0`}>{rating}/10</p>}
        </div>
    )
}

export default ShowRating