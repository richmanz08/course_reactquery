import { Input, } from "antd"
import { isEmpty } from "lodash"
import React, { useState } from "react"
import { useQueryClient } from "react-query"
import { useFetchCancelled } from "../../api/services/hook-cancelled"
import { DataType } from "../../interfaces/dataInterface"
import Tagcommon from "../common/tag"

const CancelledApiPractice: React.FC = () => {
    const [search, setSearch] = useState('')
    const { data, isLoading, refetch } = useFetchCancelled(search)
    const queryClient = useQueryClient()



    const SearchLocationList = (e: any) => {
        const value = e.target.value
        if (isLoading) {
            queryClient.cancelQueries('search')
        }
        setSearch(value)
    }


    return <div className="container-justify" >
        <Input.Search
            onKeyUp={(e) => {
                if (isLoading) {
                    queryClient.cancelQueries('search')
                }
                refetch()
            }}
            enterButton
            loading={isLoading}
            onChange={(e) => SearchLocationList(e)}
            style={{ margin: '10px 0px' }} size='large' />
        <div className="list-box-warp">
            {isEmpty(data) && <span>No data</span>}
            {data?.map((item: DataType) => {
                return <Tagcommon item={item} key={item.id} />
            })}
        </div>
    </div>
}
export default CancelledApiPractice