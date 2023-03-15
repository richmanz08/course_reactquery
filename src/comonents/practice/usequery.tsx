import { useFetchLocationList } from "../../api/services/hook-usequery"
import { DataType } from "../../interfaces/dataInterface"

const UseQueryPractice: React.FC = () => {
    const { data } = useFetchLocationList()


    return <div >
        {data?.map((item: DataType) => {
            return <div key={item.id}>{item.title}</div>
        })}
    </div>
}
export default UseQueryPractice