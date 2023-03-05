import { useState } from "react"
import { useQueryClient } from "react-query"
import { useQueryAllofNews, useQueryByIDofNews } from "../api/services/example"

const InitmyCache = () => {
    const { data } = useQueryAllofNews()
    const queryClient = useQueryClient()

    const [id, setId] = useState(0)
    const { data: dataItem } = useQueryByIDofNews(id)
    const handle = (id: number) => {
        // console.log({ id })
        setId(id)

    }
    // console.log({ dataItem });
    // console.log(queryClient.getQueryData(['news-byId', id]))
    // console.log(queryClient.getQueriesData(['news-byId']))
    // console.log(queryClient.getQueryCache())
    //     const dataInCache = queryClient.getQueryCache(["queriesMap"])
    // console.log(dataInCache?.queriesMap)

    const a = queryClient.getQueryCache().get('news-byId')
    console.log(a)


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