import { notification, Spin } from "antd";
import { isEmpty } from "lodash"
import {
    useCallback,
    // useEffect 
} from "react";
import { useParams } from "react-router-dom";
import { useFetchLocationByID } from "../../api/services/hook-handle"
import Cardcommon from "../common/card"
export type NotificationType = 'success' | 'info' | 'warning' | 'error';

const HandlePractice = () => {
    const params = useParams()
    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = useCallback((type: NotificationType) => {

        if (type === 'success') {
            api[type]({
                message: 'API Connection success',
                description:
                    '',
            });
        } else if (type === 'warning') {
            api[type]({
                message: ' Oop! Something went wrong',
                description:
                    'No data ',
            });
        } else {
            api[type]({
                message: 'API Connection failed',
                description:
                    'Please check server is running ',
            });
        }

    }, [api])

    const { data,
        // isSuccess, isError,
        isLoading } = useFetchLocationByID(Number(params.id), openNotificationWithIcon)


    // useEffect(() => {
    //     if (isSuccess) openNotificationWithIcon('success')
    //     if (isError) openNotificationWithIcon('error')
    // }, [data, isError, isSuccess, openNotificationWithIcon])


    return <div className="App-header">
        {contextHolder}
        <h1>Practice :: Handle onSuccess vs onError vs onSettled</h1>
        {isLoading && <Spin size="large" />}
        {!isEmpty(data) && <Cardcommon item={data} />}

    </div>
}
export default HandlePractice