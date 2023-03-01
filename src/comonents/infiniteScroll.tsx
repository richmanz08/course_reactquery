import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteNews } from '../api/services/example'


const InfiniteScrollQuery = () => {
    const { ref, inView } = useInView()

    const {
        status,
        data,
        isFetching,
        isFetchingNextPage,
        isFetchingPreviousPage,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        hasPreviousPage,
    } = useInfiniteNews()

    React.useEffect(() => {
        if (inView) {
            console.log(inView)

            fetchNextPage()
        }
    }, [fetchNextPage, inView])
    console.log(data)

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
                        <div>
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
                        </div>


                                {/* {data?.pages.map(page => (
                                    <React.Fragment key={page.id}>
                                        {page.data.map((project: any) => (
                                            <p
                                                style={{
                                                    border: '1px solid gray',
                                                    borderRadius: '5px',
                                                    padding: '10rem 1rem',
                                                    background: `hsla(${project.id * 30}, 60%, 80%, 1)`,
                                                }}
                                                key={project.id}
                                            >
                                        {project.title}
                                    </p>
                                ))}
                                    </React.Fragment>
                                ))} */}
                                <div>
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
                                </div>

                        <div>
                            {isFetching && !isFetchingNextPage
                                ? 'Background Updating...'
                                : null}
                        </div>
                    </>
                )}
                <hr />
            </header>
        </div>
    )
}
export default InfiniteScrollQuery
