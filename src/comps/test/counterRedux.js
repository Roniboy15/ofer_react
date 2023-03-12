import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add1,addCustom } from '../../features/counterSlice'

export default function CounterRedux() {
  const dispatch = useDispatch();
  const {counter} = useSelector(myStore => myStore.counterSlice)

  const onAdd1 = () => {
    dispatch(add1());
  }

  return (
    <div className='container'>
      <h2>Redux: {counter}</h2>
      <button onClick={onAdd1}>Add</button>
      <button onClick={() => {
        dispatch(addCustom({number:5}))
      }}>Add 5</button>
      <button onClick={() => {
        dispatch(addCustom({number:-2}))
      }}>reduce 2</button>
    </div>
  )
}
