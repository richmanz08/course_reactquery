import { useFetchdata } from '../api/services/example';
import '../App.css';
import { allDataType } from '../interfaces/dataInterface';

export const ExampleQuery = () => {

    const { data, isLoading } = useFetchdata()


    const loading = <h4>Loading</h4>
    const showData = data?.map((item: allDataType) => {
        return (<div key={`key-${item.id}`}>
            <h4>{item.title}</h4>
            <img style={{ width: 100 }} src={item.image_url} alt='empty' />
        </div>)
    })

    return <div className="App">
        <header className="App-header">
            <h1>Example </h1>
            {!isLoading ? showData : loading}
        </header>
    </div>
}