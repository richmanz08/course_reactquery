import { useQuery, } from 'react-query';
import { clientAPI } from "../setting"

export const useFetchCancelled = (search: string) => {
    const method = useQuery(['search', search], async ({ signal }) => {
        const res = await clientAPI.get(`location?title_like=${search}`, { signal });
        return res.data;
    }, {
        staleTime: 5000,
        cacheTime: 10000
    })
    return method
}