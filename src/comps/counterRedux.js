import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {add1} from '../../features/counterSlice'

export default function CounterRedux() {
    const dispatch = useDispatch();
    const {counter} = useSelector(myStore => myStore.counterSlice)

    const onAdd1 = () => {
        dispatch(add1());
    }
  return (
    <div className='container'>
      <h2>Redux: {''}</h2>
      <button>Add</button>
    </div>
  )
}