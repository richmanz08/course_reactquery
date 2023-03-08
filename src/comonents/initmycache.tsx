import { useEffect, useState } from "react"
import { useQueryClient, useIsFetching } from "react-query"
import { useQueryAllofNews, useQueryByIDofNews } from "../api/services/example"

const InitmyCache = () => {
    const { data } = useQueryAllofNews()
    const queryClient = useQueryClient()

    const [id, setId] = useState(1)
    const { data: dataItem } = useQueryByIDofNews(id)
    // const isFetchingByidNews = useIsFetching()
    // console.log({ isFetchingByidNews })

    const handle = (id: number) => {
        // console.log({ id })
        setId(id)
        // refetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps

    // console.log({ dataItem });
    // console.log(queryClient.getQueryData(['news-byId', id]))
    // console.log(queryClient.getQueriesData(['news-byId']))
    // console.log(queryClient.getQueryCache())
    //     const dataInCache = queryClient.getQueryCache(["queriesMap"])
    // console.log(dataInCache?.queriesMap)


    return <div className="App">
        <header className="App-header">
            {/* <button onClick={async () => {
                // queryClient.clear()

            }}>reset cache all</button> */}

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                {
                        data?.map((item: any) => {
                            const cache = queryClient.getQueryData(['news-byId', item.id])
                            return <div key={item.id} >
                                <span style={{ color: cache ? 'green' : '' }} onClick={() => handle(item.id)}>
                                    {item?.title}
                                </span>
                        </div>
                    })
                }</div>
                <div>
                    {dataItem?.id}{dataItem?.title}
                </div>
            </div>
        </header>
    </div>
}

export default InitmyCache