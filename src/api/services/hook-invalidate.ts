import { useMutation, useQuery, useQueryClient } from 'react-query';
import { DataType } from '../../interfaces/dataInterface';
import { clientAPI } from "../setting"

export const useCreateLocationInvalidate = () => {
    const queryClient = useQueryClient();

    const method = useMutation(['add-data'], async (params: DataType) => {
        const post = await clientAPI.post('location', params)
        return post
    }, {
        onSuccess: async () => {
            await queryClient.invalidateQueries(['location-list-invalidate'])
        },

    })
    return method

}

export const useFetchLocationListInvalidate = () => {
    const method = useQuery(['location-list-invalidate'], async () => {
        const res = await clientAPI.get('location',);
        return res.data;
    }, {
        staleTime: 3000,
        cacheTime: 3000,
    })
    return method
}

export const useFetchLocationByIDInvalidate = (id: number) => {

    const method = useQuery(['location-by-id-invalidate', id], async () => {
        if (id === 0) return
        const res = await clientAPI.get(`location?id=${id}`,);
        return res.data[0];
    }, {
        staleTime: Infinity,
        cacheTime: Infinity,
    }
    )
    return method
}