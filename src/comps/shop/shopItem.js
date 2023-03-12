import React from 'react'

export default function ShopItem(props) {
  const item = props.item;
  return (
    <div className='col-md-7 border p-2 my-2'>
      <button className='bg-danger float-end'>X</button>
      <h4>{item.name} - {item.amount}</h4>
    </div>
  )
}
