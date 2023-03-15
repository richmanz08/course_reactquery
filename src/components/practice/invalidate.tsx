import { useCreateLocationInvalidate } from "../../api/services/hook-invalidate"
import { useFetchLocationList } from "../../api/services/hook-usequery"
import { DataType } from "../../interfaces/dataInterface"
import { Button, Col, Form, Input, Row, Spin } from "antd"
import Tagcommon from "../common/tag"

const InvalidatePractice: React.FC = () => {
    const { data } = useFetchLocationList()
    const { mutateAsync, isLoading: isUpdate } = useCreateLocationInvalidate()




    const onFinish = async (values: any) => {

        const params: DataType = {
            id: data.length + 1,
            img_url: values.img_url,
            title: values.title,
            description: values.description
        }


        const response = await mutateAsync(params)
        console.log(response)



    }


    return <div className="container-justify" >
        <Row gutter={22}>
            <Col span={12}>     <Form onFinish={onFinish} layout="vertical">
                <Form.Item name="title" label={<h2>title</h2>} >
                    <Input placeholder="Title" />
                </Form.Item>
                <Form.Item name="img_url" label={<h2>Image URL</h2>}>
                    <Input.TextArea placeholder="Image URL" />
                </Form.Item>
                <Form.Item name="description" label={<h2>description</h2>}>
                    <Input.TextArea placeholder="description" />
                </Form.Item>
                <Button type="primary" htmlType="submit" >Create</Button>
            </Form></Col>
            <Col span={12}>
                <Spin tip="Loading" size="large" spinning={isUpdate} >
                    <div >
                        {data?.map((item: DataType) => {
                            return <Tagcommon key={item.id} item={item} />
                        })}
                    </div>
                </Spin>
            </Col>


        </Row>
    </div>
}
export default InvalidatePractice