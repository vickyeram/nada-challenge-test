import React, { Fragment, useState } from 'react'
import styles from "../show.styles.module.scss"
import Image from 'next/image'

interface IPersonProps {
    image: string,
    name: string,
    character: string
}

const viewSize = 5

function StarringList({ list }: any) {
    const [displyLength, setDisplyLength] = useState(5)
    const toggleList = () => {
        if (displyLength === viewSize) {
            setDisplyLength(list.length)
        } else {
            setDisplyLength(viewSize)
        }
    }
    return (
        <div className={`${styles.castInfo} col-md-6 col-sm-12`}>
            <h2>Starring</h2>
            <ul className="list-group list-group-flush">
                {(Array.isArray(list) && list.length > 0) ?
                    <Fragment>
                        {list.map((cast, index) => {
                            if (index < displyLength) {
                                return (
                                    <Person
                                        key={'Person_' + index}
                                        name={cast.person.name}
                                        character={cast.character.name}
                                        image={cast.person.image?.medium}
                                    />
                                )
                            }
                        })}
                        {list.length > 5 &&
                            <li>
                                <button className='btn btn-link' onClick={toggleList}>
                                    {displyLength === viewSize ? 'See more..' : 'See less..'}
                                </button>
                            </li>}
                    </Fragment>
                    :
                    <li className="list-group-item">
                        <span className='col'>
                            No Records.</span>
                    </li>
                }
            </ul>
        </div>
    )
}

export default StarringList

const Person = (props: IPersonProps) => {
    const { image, name, character } = props
    return (
        <li className="list-group-item">
            <div className={`${styles.avatar} col-3`}>
                <Image
                    src={image || `https://ui-avatars.com/api/?name=${name.split(' ').slice(0, 2).join(' ')}`}
                    alt="avatar"
                    width={52}
                    height={52}
                />
            </div>
            <span className='col-5'>{name}</span>
            <span className='col-4 text-secondary'>{character}</span>
        </li>
    )
}