
import { useQuery, } from 'react-query';
import { NotificationType } from '../../components/practice/handle-api';
import { clientAPI } from "../setting"




export const useFetchLocationByID = (id: number, openNotificationWithIcon: (value: NotificationType) => void) => {
    const method = useQuery(['location-by-id'], async () => {
        const res = await clientAPI.get(`location?id=${id}`,);
        return res.data[0];
    }, {
        onSuccess(data) {
            if (data) openNotificationWithIcon('success')
            else {
                openNotificationWithIcon('warning')
            }

        },
        onError(err) {
            openNotificationWithIcon('error')
        },
        // onSettled(data, error) {
        //     console.log('onSettled', data, error)

        // },
        retry: 0
    })
    return method
}