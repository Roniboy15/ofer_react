import React, { useEffect, useState,} from 'react'
import { useSearchParams, Link, useNavigate  } from 'react-router-dom';
import Loading from '../../comps_general/loading';
import { API_URL, doApiGet, doApiMethod } from '../../services/apiService';

export default function UserGameAddedList() {
    const [getQuery] = useSearchParams();
    const [ar, setAr] = useState([]);
    const [loading, setLoading] = useState(false);
    const nav = useNavigate();

    useEffect(() => {
        setLoading(true);
        doApi();
    }, [getQuery])


    const doApi = async () => {
        // שאילתא בשביל לקבל מידע על המשתשש
        let userDataUrl = API_URL + "/users/checkToken";
        let userData = await doApiGet(userDataUrl);
        console.log(userData);

        let perPage = getQuery.get("perPage") || 5;
        let page = getQuery.get("page") || 1;

        let url = `${API_URL}/gamesApps?page=${page}&perPage=${perPage}&userId=${userData._id}`;
        // let url = API_URL + "/gamesApps";
        try {
            let data = await doApiGet(url);
            console.log(data);
            setAr(data);
            setLoading(false)
        }
        catch (err) {
            console.log(err)
            alert("There problem , come back late")
        }
    }

    const onXClick = async (_delId) => {
        if (!window.confirm("Delete app?")) {
            return;
        }
        let url = API_URL + "/gamesApps/" + _delId;
        try {
            let data = await doApiMethod(url, "DELETE");
            if (data.deletedCount) {
                alert("app/game deleted");
                doApi();
            }
        }
        catch (err) {
            console.log(err)
            alert("There problem , come back later")
        }

    }

    return (
        <div className='container mt-3'>
            <h2>List of apps/games that add by your user</h2>

            <Link to="/userGameList/add" className='btn btn-dark'>Add new App or Game</Link>
            {!loading && ar.length == 0 && <h4 className='mt-5'>You not added any app yet !</h4>}
            {/* apiPages-> בקשה כדי שיחזיר כמות ומספר עמודים */}
            {/* <PagesComp apiPages={API_URL+"/gamesApps/count?perPage=5"} linkTo={"/admin/apps?page="} linkCss={"btn btn-warning me-2"} /> */}
            {loading && <Loading />}
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
                        let myDate = item.date.substring(0, 10);
                        // myDate = myDate.replaceAll("T"," ")
                        return (
                            <tr key={item._id}>
                                <td>{i + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td title={item.info}>{item.info.substring(0, 15)}...</td>
                                <td>{item.category_url}</td>
                                <td>{myDate}</td>
                                <td>
                                    <button onClick={() => {
                                        onXClick(item._id)
                                    }} className='btn btn-danger'>X</button>
                                </td>
                                <td>
                                    <button onClick={() => {
                                        nav(`/userGameList/edit/${item._id}`)
                                    }} className='btn btn-warning'>Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}