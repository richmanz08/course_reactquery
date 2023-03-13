import { useInfiniteQuery } from "react-query"
import { clientAPI } from "../setting"

export const useFetchInfiniteScroll = (limit: number) => {

    const method = useInfiniteQuery(
        ['projects'],
        async ({ pageParam = 1 }) => {
            const res = await clientAPI.get(`location?_page=${pageParam}&_limit=${limit}`)
            return res.data
        },
        {
            getNextPageParam: (data, all) => {
                const currentData = data?.length
                if (currentData === 0 || currentData < limit) {
                    return
                }
                return all.length + 1 ?? undefined


            },

        }

    )
    return method
}