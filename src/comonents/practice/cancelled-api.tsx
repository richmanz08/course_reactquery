import { Input, } from "antd"
import { isEmpty } from "lodash"
import { useState } from "react"
import { useQueryClient } from "react-query"
import { useFetchCancelled } from "../../api/services/hook-cancelled"
import { DataType } from "../../interfaces/dataInterface"
import Tagcommon from "../common/tag"

const CancelledApiPractice = () => {
    const [search, setSearch] = useState('')
    const { data, isLoading } = useFetchCancelled(search)
    const queryClient = useQueryClient()



    const SearchLocationList = (e: any) => {
        const value = e.target.value
        if (isLoading) {
            queryClient.cancelQueries('search')
        }
        setSearch(value)
    }





    return <div className="App-header">
        <h1>Practice :: Cancelled Api </h1>
        <Input.Search loading={isLoading} onChange={(e) => SearchLocationList(e)} style={{ margin: '10px 0px' }} size='large' />
        <div className="list-box-warp">
            {isEmpty(data) && <span>No data</span>}
            {data?.map((item: DataType) => {
                return <Tagcommon item={item} key={item.id} />
            })}
        </div>
    </div>
}
export default CancelledApiPractice