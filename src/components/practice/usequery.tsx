import { Spin } from "antd"
import { useEffect, useState } from "react"
import { getDataLocationList, useFetchLocationList } from "../../api/services/hook-usequery"
import { DataType } from "../../interfaces/dataInterface"
import Tagcommon from "../common/tag"

const UseQueryPractice: React.FC = () => {
    // new practice
    const { data, isLoading } = useFetchLocationList()

    // old practice
    const [dataList, setDataList] = useState([])
    const [isLoadingList, setIsLoadingList] = useState(false)



    const fetchListLocation = async () => {
        setIsLoadingList(true)
        await getDataLocationList().then((response) => {
            const { status, data, error } = response
            console.log(status, data, error)
            if (status === 200) {
                setDataList(data)
                setIsLoadingList(false)
            } else {
                setIsLoadingList(false)
            }
        }).catch(() => {
            setDataList([])
            setIsLoadingList(false)
        })
    }

    useEffect(() => {
        fetchListLocation()
    }, [])


    return <div  >
        <h1>Get by React Query</h1>
        <Spin spinning={isLoading}>
        {data?.map((item: DataType) => {
            return <Tagcommon key={item.id} item={item} />
        })}
        </Spin >
        <h1>Get by default</h1>
        <Spin spinning={isLoadingList}>
            {dataList?.map((item: DataType) => {
                return <Tagcommon key={item.id} item={item} />
            })}
        </Spin>
    </div>
}
export default UseQueryPractice