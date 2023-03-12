import React from 'react'
import { useSelector } from 'react-redux'
import ShopItem from './shopItem';

export default function ShopList() {
  const {shop_ar} = useSelector(myStore => myStore.shopSlice);

  return (
    <div className='container'>
      <h2>List of products in your list</h2>
      <div className='row'>
        {shop_ar.map(item => {
          return(
            <ShopItem key={item.id} item={item} />
          )
        })}
      </div>
    </div>
  )
}