import { Pagination } from "antd";
import { useState } from "react";
import { useFetchLocationPagination } from "../../api/services/hook-pagination"
import { DataType } from "../../interfaces/dataInterface";

const initialState = {
    pagination: {
        limit: 2,
        page: 1
    }
}


const PaginationPractice = () => {
    const [pagination, setPagination] = useState(initialState.pagination)
    const { data: dataPagination } = useFetchLocationPagination(pagination.limit, pagination.page)


    const onChangedPagination = (currentPage: number) => {
        setPagination(prev => {
            return {
                ...prev,
                page: currentPage
            }
        })
    }

    return <div className="App-header">
        <h1>Practice :: Pagination </h1>
        {
            dataPagination?.list?.map((item: DataType, idx: number) => {
                return <div key={item.id}>
                    <h2>{idx + 1}. {item.title}</h2>
                    <div style={{ display: "flex", aspectRatio: '16/9' }}>
                        <img alt="" style={{ width: '100%', height: '100%' }} src={item.img_url} />
                    </div>

                </div>
            })
        }
        <Pagination
            current={pagination.page}
            pageSize={pagination?.limit}
            total={dataPagination?.total}
            onChange={onChangedPagination}
        />
    </div>
}
export default PaginationPractice