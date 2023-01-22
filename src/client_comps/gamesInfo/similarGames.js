import React,{ useEffect, useState } from 'react'
import { API_URL, doApiGet } from '../../services/apiService';
import GameAppItem from '../misc/gameAppItem';
import {useLocation} from 'react-router-dom'


// Similair game - משחקים דומים
export default function SimGames(props) {
  const [ar,setAr] = useState([]);
  const {category_url} = props;
  const location = useLocation();

  useEffect(() => {
   doApi();
  },[location])

  const doApi = async() => {
    console.log(category_url);
    
    let urlCat = `${API_URL}/gamesApps/?cat=${category_url}`;
    let dataCat = await doApiGet(urlCat);
    // console.log(dataCat);
    setAr(dataCat);
  }

  return (
    <div className='row'>
      {ar.map(item => {
        return(
        <GameAppItem key={item._id} item={item} />
        )
      })}
    </div> 
  )
}