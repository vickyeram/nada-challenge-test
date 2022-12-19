import React, { Fragment, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { MainLayout } from 'layout'
import { HeadTitle, Loader, ShowCard, IShowType } from 'components'
import Head from 'next/head'
import InfiniteScroll from 'react-infinite-scroll-component'

function HomePage() {
  const { isLoading, error, data: shows } = useQuery('scheduleShow', () =>
    axios.get('schedule').then(res =>
      res.data
    )
  )
  const [showslist, setShowslist] = useState<IShowType[]>([])


  useEffect(() => {
    if (Array.isArray(shows) && showslist.length == 0) {
      setShowslist(shows.filter((_, index) => index < 12))
    }
    return () => {

    };
  }, [shows])

  const [hasMore, setHasMore] = useState<boolean>(true)
  const fetchMoreData = () => {
    if (showslist.length === shows.length) {
      setHasMore(false)
      return;
    }
    setShowslist((old) => shows.filter((_: any, index: number) => index < old.length + 10))
  }
  return (
    <MainLayout>
      <Head>
        <title>TV Bland | TV Show and web series database.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content='TV Show and web series database.' />
        <meta name="keywords" content={'TV Bland'} />
      </Head>
      <HeadTitle />
      <div className="container position-relative">
        {isLoading &&
          <Loader />
        }
        {(Array.isArray(shows) && shows.length > 0) &&
          <Fragment>
            <InfiniteScroll
              dataLength={showslist.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
              style={{ overflowX: 'hidden' }}
            >
              <div className='row'>
                {showslist.map((episode, index) => (
                  <ShowCard episode={episode} key={'show_' + index} />
                ))}
              </div>
            </InfiniteScroll>
          </Fragment>
        }
      </div>
    </MainLayout>
  )
}

export default HomePage