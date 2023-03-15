import { Button, Col, Form, Input, Row } from "antd"
import { useCreateLocation } from "../../api/services/hook-mutations"
import { useFetchLocationList } from "../../api/services/hook-usequery"
import { DataType } from "../../interfaces/dataInterface"
import Tagcommon from "../common/tag"

const MutationsPractice: React.FC = () => {

    const { data } = useFetchLocationList()
    const { mutate } = useCreateLocation()
    // const { mutateAsync } = useCreateLocation()


    const onFinish = async (values: any) => {
        const params: DataType = {
            id: data.length + 1,
            img_url: values.img_url,
            title: values.title,
            description: values.description
        }
        // 1. mutate
        mutate(params)

        // 2. nutateAsync
        // const response = await mutateAsync(params)
        // console.log(response)


    }


    return <div className="container-justify" >
        <Row gutter={22}>
            <Col span={12}>
                <Form onFinish={onFinish} layout="vertical">
                    <Form.Item name="title" label={<h2 >title</h2>} >
                        <Input placeholder="Title" />
                    </Form.Item>
                    <Form.Item name="img_url" label={<h2 >Image URL</h2>}>
                        <Input.TextArea placeholder="Image URL" />
                    </Form.Item>
                    <Form.Item name="description" label={<h2 >description</h2>}>
                        <Input.TextArea placeholder="description" />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" >Create</Button>
                </Form></Col>
            <Col span={12}>
                <div >
                    {data?.map((item: DataType) => {
                        return <Tagcommon key={item.id} item={item} />
                    })}
                </div>
            </Col>


        </Row>
    </div>
}
export default MutationsPractice