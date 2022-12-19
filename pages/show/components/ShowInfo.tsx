import React from 'react'
import styles from "../show.styles.module.scss"

interface IShowInfoProps {
    info: {
        genres: string[] | null,
        schedule: {
            days: string[]
            time: string
        } | null
        status: string,
        webChannel: { name: string | undefined }
        network: { name: string | undefined }
    }
}

function ShowInfo({ info }: IShowInfoProps) {
    return (
        <div className={`${styles.showInfo} col-md-6 col-sm-12`}>
            <h2>Show Info</h2>
            {info && <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <span className='col-4'> Streamed on </span>
                    <span className='col text-secondary'> {
                        info.webChannel?.name || info.network?.name
                    } </span>
                </li>
                <li className="list-group-item">
                    <span className='col-4'> Schedule </span>
                    <span className='col text-secondary'> {info.schedule?.days.join(", ")} </span>
                </li>
                <li className="list-group-item">
                    <span className='col-4'> Status </span>
                    <span className='col text-secondary'> {info.status} </span>
                </li>
                <li className="list-group-item">
                    <span className='col-4'> Genres </span>
                    <span className='col text-secondary'> {info?.genres?.join(", ") || 'N/A'} </span>
                </li>
            </ul>}
        </div>
    )
}

export default ShowInfo