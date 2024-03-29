import { Tag } from "antd";
import { DataType } from "../../interfaces/dataInterface";

interface PropsType {
    item: DataType

}
const Tagcommon = (props: PropsType) => {
    const { item } = props



    return (
        <Tag style={{ fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            {item.img_url ?
                <img className="img-tag" src={item.img_url} alt="" /> : <></>
            }<h4> {item.title}</h4>
        </Tag>
    )
}
export default Tagcommon