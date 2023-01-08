import React from 'react'
import { doApiGet } from '../services/apiServices';
import AuthAdmin from './authAdmin'

const AppListAdmin = () => {

    const [ar, setAr] = useState([]);

    useEffect(() => {
        doApi();
    }, [])

    const doApi = async () => {
        let url = API_URL + "/gamesApps";
        try {
            let data = await doApiGet(url);
            console.log(data);
            setAr(data)
        }
        catch (err) {
            console.log(err)
            alert("There problem , come back late")
        }
    }

    return (
        <div>
            <h1>List of apps/games in the system</h1>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Info</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Del</th>
                    </tr>
                </thead>
                <tbody>
                    {ar.map((item, i) => {
                        return (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td title={item.info}>{item.info.substring(0, 15)}...</td>
                                <td>{item.category_url}</td>
                                <td>{item.date}</td>
                                <td>
                                    <button className='bg-danger'>X</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AppListAdmin