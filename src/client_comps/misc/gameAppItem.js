import React from 'react'
import { Link } from 'react-router-dom';

export default function GameAppItem(props) {
  let item = props.item;
  return (
    <div className='col-md-3'>
      <div className='p-2 shadow'>
        <div style={{backgroundImage:`url(${item.img_url})`}} className='bg-item-app'></div>
        <h3>{item.name}</h3>
        <div>Category: {item.category_url}</div>
        <Link className='text-info' to={'/info/'+item._id}>More info</Link>
      </div>
    </div>
  )
}
