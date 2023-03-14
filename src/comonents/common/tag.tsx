import { Tag } from "antd";
import { DataType } from "../../interfaces/dataInterface";

interface PropsType {
    item: DataType
}
const Tagcommon = (props: PropsType) => {
    const { item } = props



    return (
        < Tag style={{ color: 'white', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
            <img className="img-tag" src={item.img_url} alt="" />
            <h4> {item.title}</h4>
        </Tag>
    )
}
export default Tagcommon