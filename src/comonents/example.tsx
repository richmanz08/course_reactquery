
import { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';

import { useAdddata, useFetchdataById, useFetchdata } from '../api/services/example';
import '../App.css';
import { allDataType } from '../interfaces/dataInterface';

export const ExampleQuery = () => {

    const queryClient = useQueryClient()
    const { data, isLoading } = useFetchdata()
    console.log(data)

    const { mutateAsync: mutateAsyncAddDataList } = useAdddata()
    // const [page, setPage] = useState(1)
    // const { data, isLoading, isFetching } = useFetchdataById(page)
    // console.log(page, isLoading, isFetching)

    const addItems = async () => {
        const params: allDataType = {
            id: data.length + 1,
            image_url: 'asdsa',
            title: 'asd'
        }
        // const response1 = mutateAddDataList(params)
        // console.log('mutate', response1)
        const response = await mutateAsyncAddDataList(params)
        console.log('mutate', response)


    }

    useEffect(() => {
        return () => {
            queryClient.cancelQueries('all')
            console.log('leave this page and cancel api')
        }
    }, [])

    const loading = <h4>Loading</h4>
    const showData = data?.map((item: allDataType) => {
        return (<div key={`key-${item.id}`}>
            <h4>{item.title}</h4>
            <img style={{ width: 100 }} src={item.image_url} alt='empty' />
        </div>)
    })
    // default
    return <div className="App">
        <header className="App-header">
            {/* <button onClick={(e) => {
                e.preventDefault()
                queryClient.cancelQueries('all')
            }}>Cancel</button> */}
            <button onClick={() => addItems()}>add</button>
            <h1>Example </h1>
            {!isLoading ? showData : loading}
        </header>
    </div>

    // for test pagination query
    // return <div className="App">

    //     <header className="App-header">
    //         <h1>Example </h1>
    //         <button onClick={() => setPage(page - 1)}>back pagination</button>
    //         <button onClick={() => setPage(page + 1)}>Next pagination</button>
    //         {!isFetching ? showData : loading}
    //     </header>
    // </div>

}


