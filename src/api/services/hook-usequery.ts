import { useQuery, } from 'react-query';
import { clientAPI } from "../setting"

export const useFetchLocationList = () => {
    const method = useQuery(['location-list'], async () => {
        const res = await clientAPI.get('location',);
        return res.data;
    })
    return method
}



export const getDataLocationList = async () => {

    return await clientAPI
        .get('location').then((response) => {
            console.log(response)

            return response
        }).catch((error) => {
            return error
        })

}