import { useQuery } from "react-query";
import { DataType } from "../../interfaces/dataInterface";
import { clientAPI } from "../setting";

export const useFetchLocationByIDandCaching = (id: number) => {

    const method = useQuery(['location-by-id', id], async () => {
        if (id === 0) return
        const res = await clientAPI.get(`location?id=${id}`,);
        return res.data[0];
    }, {
        staleTime: Infinity,
        cacheTime: Infinity
    }
    )
    return method
}
export const useFetchLocationListandCaching = () => {
    const method = useQuery(['location-list'], async () => {
        const res = await clientAPI.get('location',);
        return res.data.map((item: DataType) => {
            return {
                id: item?.id || 0,
                title: item?.title || 'none'
            }
        });
    }, {
        staleTime: Infinity,
        cacheTime: Infinity
    })
    return method
}