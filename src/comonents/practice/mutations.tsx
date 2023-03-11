import { Alert, Button, Form, Input, Row } from "antd"
import { useCreateLocation } from "../../api/services/hook-mutations"
import { useFetchLocationList } from "../../api/services/hook-usequery"
import { DataType } from "../../interfaces/dataInterface"

const MutationsPractice = () => {

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


    return <div className="App-header">
        <h1>Practice :: Mutations </h1>
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
            <div className="list-box">
                {data?.map((item: DataType) => {
                    return <Alert message={item.title} type="success" closable />
                })}
            </div>
        </Row>
    </div>
}
export default MutationsPractice