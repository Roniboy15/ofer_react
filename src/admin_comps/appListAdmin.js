import React, { useEffect, useState } from 'react'
import { API_URL, doApiGet, doApiMethod } from '../services/apiServices';
import AuthAdmin from './authAdmin'

export default function AppListAdmin() {

  const [ar, setAr] = useState([]);

  useEffect(() => {
    doApi();
  }, [])

  const doApi = async () => {
    let url = API_URL + "/games";
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

  const onXClick = async(_delId) => {
    if(!window.confirm("Delete app?")){
      return ;
    }
    let url = API_URL + "/games/"+_delId;
    try{
      let data = await doApiMethod(url, "DELETE");
      if(data.deletedCount){
        alert("app/game deleted");
        doApi();
      }
    }
    catch(err){
      console.log(err)
      alert("There problem , come back late")
    }
    
  }

  return (
    <div className='container'>
      <AuthAdmin />
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
          {ar.map((item,i) => {
            let myDate = item.date.substring(0,10);
            // myDate = myDate.replaceAll("T"," ")
            return (
              <tr key={item._id}>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td title={item.info}>{item.info.substring(0,15)}...</td>
                <td>{item.category_url}</td>
                <td>{myDate}</td>
                <td>
                  <button onClick={() => {
                    onXClick(item._id);
                  }} className='bg-danger'>X</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
