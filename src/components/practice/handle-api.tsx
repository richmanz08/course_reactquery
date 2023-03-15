import { notification, Spin } from "antd";
import { isEmpty } from "lodash"
import { useParams } from "react-router-dom";
import { useFetchLocationByID } from "../../api/services/hook-handle"
import Cardcommon from "../common/card"
export type NotificationType = 'success' | 'info' | 'warning' | 'error';

const HandlePractice: React.FC = () => {
    const params = useParams()
    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (type: NotificationType) => {

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

    }

    const { data,
        // isSuccess, isError,
        isLoading } = useFetchLocationByID(Number(params.id), openNotificationWithIcon)


    return <div className="container-justify" >
        {contextHolder}
        <h1>Practice :: Handle onSuccess vs onError vs onSettled</h1>
        {isLoading && <Spin size="large" />}
        {!isEmpty(data) && <Cardcommon item={data} />}

    </div>
}
export default HandlePractice