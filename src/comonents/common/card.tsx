import { Card } from "antd";
import { DataType } from "../../interfaces/dataInterface";

interface PropsType {
    item: DataType
}
const Cardcommon = (props: PropsType) => {
    const { item } = props
    const { Meta } = Card


    return (
        <Card hoverable
        style={{ width: '50vw' }}
        cover={<img alt="example" src={item.img_url} />}>
        <Meta title={item.title} description={item.description} />
    </Card>
    )
}
export default Cardcommon