import { useCreateLocationInvalidate } from "../../api/services/hook-invalidate"
import { useFetchLocationList } from "../../api/services/hook-usequery"
import { DataType } from "../../interfaces/dataInterface"
import { Alert, Button, Form, Input, Row, Spin } from "antd"

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


    return <div >
        <Row>
            <Form onFinish={onFinish} layout="vertical">
                <Form.Item name="title" label={<h2 style={{ color: '#fff' }}>title</h2>} >
                    <Input placeholder="Title" />
                </Form.Item>
                <Form.Item name="img_url" label={<h2 style={{ color: '#fff' }}>Image URL</h2>}>
                    <Input.TextArea placeholder="Image URL" />
                </Form.Item>
                <Form.Item name="description" label={<h2 style={{ color: '#fff' }}>description</h2>}>
                    <Input.TextArea placeholder="description" />
                </Form.Item>
                <Button type="primary" htmlType="submit" >Create</Button>
            </Form>
            <Spin tip="Loading" size="large" spinning={isUpdate} >
                <div className="list-box">
                    {data?.map((item: DataType) => {
                        return <Alert message={item.title} type="success" closable />
                    })}
                </div>
            </Spin>
        </Row>
    </div>
}
export default InvalidatePractice