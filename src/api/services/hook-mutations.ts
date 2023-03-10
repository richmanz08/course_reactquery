import { useMutation } from 'react-query';
import { DataType } from '../../interfaces/dataInterface';
import { clientAPI } from "../setting"

export const useCreateLocation = () => {

    const method = useMutation(['add-data'], async (params: DataType) => {
        const post = await clientAPI.post('location', params)
        return post
    })
    return method

}