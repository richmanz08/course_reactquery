import { useFetchLocationList } from "../../api/services/hook-usequery"
import { DataType } from "../../interfaces/dataInterface"

const UseQueryPractice = () => {
    const { data } = useFetchLocationList()
    console.log(data)

    return <div className="App-header">
        <h1>Practice :: useQuery </h1>
        {data?.map((item: DataType) => {
            return <div key={item.id}>{item.title}</div>
        })}
    </div>
}
export default UseQueryPractice