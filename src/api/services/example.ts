
import { useQueryClient, useMutation, useQuery, useInfiniteQuery, QueryClient } from 'react-query';
import { allDataType } from '../../interfaces/dataInterface';
import { clientAPI } from "../axios"
const mockup = [{
    id: 0,
    title: "asdas",
    image_url: "asd"
}]

export const useFetchdata = () => {
    const method = useQuery(['all'], async ({ signal }) => {
        const res = await clientAPI.get('all', { signal });
        return res.data;
    }, {
        // initialData: mockup,
        staleTime: 1000
    })
    return method
}
export const useFetchdataById = (id: number) => {
    const method = useQuery(['getbyid', id], async () => {
        const res = await clientAPI.get(`all?id=${id}`);
        return res.data;
    }, {
        keepPreviousData: true,

    })
    return method
}

export const useAdddata = () => {

    const queryClient = useQueryClient();
    const method = useMutation(['add-data'], async (params: allDataType) => {
        const post = await clientAPI.post('all', params)
        return post
    }, {
        onSuccess: async () => { await queryClient.invalidateQueries(['all']) }
    })
    return method

}


export const useInfiniteNews = (limit: number) => {

    const method = useInfiniteQuery(
        ['projects'],
        async ({ pageParam = 1 }) => {
            const res = await clientAPI.get(`news?_page=${pageParam}&_limit=${limit}`)
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

export const useQueryAllofNews = () => {
    const method = useQuery(['news-key'], async ({ signal }) => {
        const res = await clientAPI.get('news', { signal });
        return res.data;
    }, {
        placeholderData: [{

            id: 1,
            title: "test",
            detail: "detail sasa"

        }]
    })
    return method
}
export const useQueryByIDofNews = (id: number) => {

    const method = useQuery(['news-byId', id], async () => {
        const res = await clientAPI.get(`news?id=${id}`);
        return res.data[0];
    }, {
        enabled: false
    })
    return method
}
