import React from "react"
import { useInView } from "react-intersection-observer"
import { useFetchInfiniteScroll } from "../../api/services/hook-infiniteScroll"
import Cardcommon from "../common/card"

const InfiniteQuelyPractice: React.FC = () => {
    const limit = 3
    const { ref, inView } = useInView()
    const { data, isFetchingNextPage, hasNextPage, fetchNextPage } = useFetchInfiniteScroll(limit)

    React.useEffect(() => {
        if (inView && !isFetchingNextPage) {
            fetchNextPage()
        }
    }, [fetchNextPage, inView, isFetchingNextPage])


    return (<div className="container-justify">
        {data?.pages?.map((page, idx) => (
            <div className="list-box" key={`master-${idx}`} >
                {page?.map((item: any) => (
                    <Cardcommon key={item.id} item={item} />
                ))}
            </div>
        ))}
        {!hasNextPage && <span style={{ color: 'red', cursor: 'pointer', textAlign: 'center' }}
        >No more to load </span>}
        {isFetchingNextPage
            ? <span >Loading ...</span>
            : null}

        {hasNextPage && <div ref={ref} />}
    </div>)
}
export default InfiniteQuelyPractice