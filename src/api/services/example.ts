import { useQuery } from 'react-query';
import { allDataType } from '../../interfaces/dataInterface';
import { clientAPI } from "../axios"

export const useFetchdata = () => {
    const data = useQuery(['all'], async () => {
        const res = await clientAPI.get('all');
        return res.data;
    }, {
        enabled: false
    })
    return data
}
export const useFetchdataById = (id: number) => {
    const data = useQuery<allDataType[]>(['getbyid', id], async () => {
        const res = await clientAPI.get(`all?id=${id}`);
        return res.data;
    })
    return data
}