import axios from 'axios';
import { useQueryClient, useMutation, useQuery } from 'react-query';
import { allDataType } from '../../interfaces/dataInterface';
import { clientAPI } from "../axios"


export const useFetchdata = () => {
    // const CancelToken = axios.CancelToken
    // const source = CancelToken.source()
    const method = useQuery(['all'], async ({ signal }) => {
        const res = await clientAPI.get('all', { signal });
        return res.data;
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