import { useMutation, useQueryClient } from 'react-query';
import { DataType } from '../../interfaces/dataInterface';
import { clientAPI } from "../setting"

export const useCreateLocationInvalidate = () => {
    const queryClient = useQueryClient();

    const method = useMutation(['add-data'], async (params: DataType) => {
        const post = await clientAPI.post('location', params)
        return post
    }, {
        onSuccess: async () => {
            await queryClient.invalidateQueries(['location-list'])
        }
    })
    return method

}