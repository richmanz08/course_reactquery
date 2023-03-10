import { useQuery, } from 'react-query';
import { clientAPI } from "../setting"

export const useFetchLocationList = () => {
    const method = useQuery(['location-list'], async () => {
        const res = await clientAPI.get('location',);
        return res.data;
    })
    return method
}