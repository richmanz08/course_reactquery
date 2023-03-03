/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
// import { useParams, useRoutes, useSearchParams } from 'react-router-dom'
import { useInfiniteNews } from '../api/services/example'


const InfiniteScrollQuery = () => {
    // const params = useParams()
    // const [QueryURL] = useSearchParams()

    // const params = useParams()
    // console.log(params)
    // const ser

    const { ref, inView } = useInView()
    const [limit] = useState(5)
    const {
        status,
        data,
        // isFetching,
        isFetchingNextPage,
        // isFetchingPreviousPage,
        fetchNextPage,
        // fetchPreviousPage,

        refetch,
        hasNextPage,
        // hasPreviousPage,
    } = useInfiniteNews(limit)

    React.useEffect(() => {
        if (inView && !isFetchingNextPage) {
            fetchNextPage()
        }
    }, [inView])
    console.log(data)
    // console.log({ hasNextPage })

    return (
        <div className="App">
            <header className="App-header">

                <h1>Infinite Loading</h1>
                {status === 'loading' ? (
                    <p>Loading...</p>
                ) : status === 'error' ? (
                    <span>Error: error page loading</span>
                ) : (
                    <>
                                {/* <div>
                            <button
                                onClick={() => fetchPreviousPage()}
                                disabled={!hasPreviousPage || isFetchingPreviousPage}
                            >
                                {isFetchingPreviousPage
                                    ? 'Loading more...'
                                    : hasPreviousPage
                                        ? 'Load Older'
                                        : 'Nothing more to load'}
                            </button>
                        </div> */}


                                {data?.pages?.map((page, idx) => (
                                    <React.Fragment key={`master-${idx}`}>
                                        {page?.map((item: any) => (
                                            <p
                                                style={{
                                                    border: '1px solid gray',
                                                    borderRadius: '5px',
                                                    padding: '5rem 10rem',
                                                    color: '#000',
                                                    background: `hsla(${item.id * 30}, 60%, 80%, 1)`,
                                                }}
                                                key={item.id}
                                            >
                                                {item.title}
                                            </p>
                                        ))}
                                    </React.Fragment>
                                ))}
                                {/* <div>
                                    <button
                                        ref={ref}
                                        onClick={() => fetchNextPage()}
                                        disabled={!hasNextPage || isFetchingNextPage}
                                    >
                                        {isFetchingNextPage
                                            ? 'Loading more...'
                                            : hasNextPage
                                                ? 'Load Newer'
                                                : 'Nothing more to load'}
                                    </button>
                                </div> */}
                                {!hasNextPage && <span style={{ color: 'red', cursor: 'pointer' }}
                                    onClick={() => refetch()
                                    } >No more to load and click to refresh</span>}

                        <div>
                                    {isFetchingNextPage
                                        ? <span >Loading ...</span>
                                : null}
                        </div>
                                {hasNextPage && <div ref={ref} />}  
                    </>
                )}
                <hr />
            </header>
        </div>
    )
}
export default InfiniteScrollQuery
