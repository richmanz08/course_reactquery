import { Button, Col, Row, Select } from "antd"
import { useState } from "react"
import { useQueryClient } from "react-query"
import { useFetchLocationByIDInvalidate, useFetchLocationListInvalidate } from "../../api/services/hook-invalidate"
import { DataType } from "../../interfaces/dataInterface"
import Cardcommon from "../common/card"


const InvalidateVsRefetchPractice: React.FC = () => {
    const queryClient = useQueryClient()
    const [id, setId] = useState(1)
    const { data: list } = useFetchLocationListInvalidate()
    const { data: dataLocation } = useFetchLocationByIDInvalidate(id)
    console.log(dataLocation)

    const { Option } = Select


    const onSelect = (id: number) => {
        console.log(id)
        setId(id)
    }

    return <div>
        <Row gutter={22}>
            <Col span={8}>
                <Button
                    style={{ width: '100%' }}
                    type="primary"
                    ghost
                    onClick={() => queryClient.invalidateQueries(['location-by-id-invalidate', id])} >InvalidateQuery</Button>
            </Col>
            <Col span={8}>
                <Button
                    style={{ width: '100%' }}
                    type="dashed"
                    danger
                    onClick={() => queryClient.refetchQueries(['location-by-id-invalidate', id])}>RefetchQuery</Button>
            </Col>
            <Col span={8}>
                <Select onSelect={onSelect} defaultValue={1} style={{ width: '100%' }} >
                    {list?.map((item: DataType) => <Option key={item.id} value={item.id} >{item.id}. {item.title}</Option>)}
                </Select>
            </Col>

        </Row>
        <Row className="list-box-warp" style={{ marginTop: 30 }}>
            {dataLocation && <Cardcommon item={dataLocation} />}
        </Row>
    </div>
}
export default InvalidateVsRefetchPractice