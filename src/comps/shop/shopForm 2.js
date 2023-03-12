import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct,resetProducts } from '../../features/shopSlice';

export default function ShopForm() {
  const dispatch = useDispatch();

  const nameRef = useRef();
  const amountRef = useRef();

  const onResetClick = () => {
    dispatch(resetProducts());
  }

  const onSub = (e) => {
    e.preventDefault();
    let newItem = {
      name:nameRef.current.value,
      amount:amountRef.current.value,
      id:Date.now()
    }
    console.log(newItem);
    dispatch(addProduct({item:newItem}))
  } 

  return (
    <div className='container mt-4'>
      <form onSubmit={onSub} className='col-md-6'>
        <h2>Add new product form:</h2>
        <label>Product name:</label>
        <input ref={nameRef} type="text" className='form-control' />
        <label>Product amount:</label>
        <input ref={amountRef} defaultValue={1} type="number" className='form-control' />
        <button className='mt-3'>Add product</button>
        <button onClick={onResetClick} type="button" className='mt-3'>Reset products list</button>
      </form>
    </div>
  )
}
