import { Button, Col, Row } from "antd"
import { useEffect, useState } from "react"
import { useQueryClient } from "react-query"
import { useFetchLocationByIDandCaching, useFetchLocationListandCaching } from "../../api/services/hook-caching"
import Cardcommon from "../common/card"
import Listcommon from "../common/list"


const CachePractice = () => {
    const queryClient = useQueryClient()
    const [selected, setSelected] = useState(0)
    const { data: ListData } = useFetchLocationListandCaching()
    const { data: UnitData } = useFetchLocationByIDandCaching(selected)


    const onSelect = (id: number) => {
        setSelected(id)
    }

    useEffect(() => {
        if (ListData && selected === 0) {
            const firstIndexId = ListData[0]?.id || 0
            setSelected(firstIndexId)
        }

    }, [ListData, selected])

    return <div className="App-header">
        <h1>Practice :: Caching data </h1>
        <Row gutter={22}>
            <Col span={6} >
                {ListData && <Listcommon list={ListData} onSelect={onSelect} selected={selected} />}
                <Button type="primary" danger onClick={() => queryClient.clear()}>Clear cache</Button>
            </Col>
            <Col span={18} >
                {UnitData && <Cardcommon item={UnitData} />}
            </Col>
        </Row>

    </div>
}
export default CachePractice