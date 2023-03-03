import { useQueryAllofNews } from "../api/services/example"

const InitmyCache = () => {
    const { data } = useQueryAllofNews()
    console.log(data)

    return <div className="App">
        <header className="App-header">
            <div>
                {
                    data.map((item: any) => {
                        return <div>
                            {item?.title}
                        </div>
                    })
                }</div>
        </header>
    </div>
}

export default InitmyCache