import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const ReduxComp = () => {
    const inputRef = useRef();

    const [data, setData] = useState(0);

    const numberIndex = useSelector((num) => num);
    const dispatch = useDispatch();

    useEffect(() => {
        setData(numberIndex);
    }, [numberIndex]);

    const plus = () => {
        const action = { type: "PLUS", payload: +inputRef.current.value }
        dispatch(action);
    }
    const minus = () => {
        const action = { type: "MINUS", payload: inputRef.current.value }
        dispatch(action);
    }

    return (
        <div className='container'>
            <div className='row text-center justify-content-around'>
                <div className='col-6'>
                    <h2>{data}</h2>
                    <input ref={inputRef} type="number" className='input'></input>
                    <button className='btn btn-success' onClick={plus}>Add</button>
                    <button className='btn btn-danger' onClick={minus}>Substract</button>
                </div>

            </div>

        </div>
    )
}

export default ReduxComp