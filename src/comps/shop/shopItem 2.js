import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteSingle } from '../../features/shopSlice';

export default function ShopItem(props) {
    const dispatch = useDispatch();
    const item = props.item;

    const onDelClick = () => {
        dispatch(deleteSingle({delId:item.id}))
    }
    return (
        <div className='col-md-7 border p-2 my-2'>
            <button onClick={onDelClick} className='bg-danger float-end'>X</button>
            <h4>{item.name} - {item.amount}</h4>
        </div>
    )
}
