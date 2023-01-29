import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../../comps_general/loading';
import { API_URL, doApiGet } from '../../services/apiService';
import {BsArrowLeftCircle , BsStarFill} from "react-icons/bs"
import SimGames from './simGames';

export default function GameInfo() {
  const [info, setInfo] = useState({});
  const nav = useNavigate();
  const params = useParams();

  useEffect(() => {
    doApi();
  }, [params])

  const doApi = async () => {
    let url = `${API_URL}/gamesApps/single/${params["id"]}`;
    let data = await doApiGet(url);
    console.log(data);
    setInfo(data);
  }

  const onBackClick = () => {
    nav(-1);
  }

  return (
    <div className='container py-5'>
      {info._id ?
        <React.Fragment>
          <div className="row">
            <div className="col-md-4">
              <img src={info.img_url} className="img-fluid" alt="app image" />
            </div>
            <article className='col-md-8'>
              <h1 className='display-4'>
                {info.name} 
                <BsStarFill className='h3 ms-2' />
                
              </h1>
              <div className='lead'>Date added: {info.date}</div>
              <div className='lead'>info: {info.info}</div>
              <div className='lead'>Price: {info.price}</div>
              <a className='btn btn-warning' target="_blank" href={info.link_url}>App/game link</a>
            </article>
          </div>
          <div className='mt-4'>
            <button className='btn btn-dark' onClick={onBackClick}>
              <BsArrowLeftCircle style={{color:"gold",marginBottom:"1px"}} className='me-2' />
              Back</button>
          </div>
          <hr />
          <SimGames category_url={info.category_url} />

        </React.Fragment>
        : <Loading />
      }
    </div>
  )
}
