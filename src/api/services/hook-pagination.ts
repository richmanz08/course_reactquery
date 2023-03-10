import { useQuery, } from 'react-query';
import { clientAPI } from "../setting"
import { get } from 'lodash'

export const useFetchLocationPagination = (limit: number, page: number) => {
    const method = useQuery(['location-list', page], async () => {
        const res = await clientAPI.get(`location?_page=${page}&_limit=${limit}`,);
        const newData = {
            total: Number(get(res, 'headers.x-total-count')),
            list: res.data

        }
        return newData;


    }, {
        keepPreviousData: true
    })
    return method
}