import React from 'react'
import { useForm } from "react-hook-form"
import { API_URL, doApiMethod, TOKEN_KEY } from '../../services/apiService';
import {useNavigate} from 'react-router-dom';

export default function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const nav = useNavigate();
    const onSubForm = (bodyData) => {
        console.log(bodyData);
        doApi(bodyData);
    }

    const doApi = async (bodyData) => {
        try {
            let url = API_URL + "/users";
            let data = await doApiMethod(url, "POST", bodyData);
            console.log(data);
            // save local of token
            localStorage.setItem(TOKEN_KEY, data.token);
            // navigate to categoriesList.js
            nav("/")
        }
        catch (err) {
            console.log(err);
            alert("Email or password wrong!");
        }

    }
    return (
        <div className='container'>
            <h1 className='text-center display-4'>Sign up to our site</h1>
            <p className='lead text-center'>Allow you to add your app to our site!</p>
            <form className='col-md-6 mx-auto p-2 shadow' onSubmit={handleSubmit(onSubForm)} id="id_form" >
                <label>name</label>
                <input {...register("name", { required: true, minLength: 2 })} className="form-control" type="text" />
                {errors.name && <div className="text-danger">* Enter valid name</div>}
                <label>email</label>
                <input {...register("email", { required: true, minLength: 2 })} className="form-control" type="email" />
                {errors.email && <div className="text-danger">* Enter valid email</div>}
                <label>password</label>
                <input {...register("password", { required: true, minLength: 2 })} className="form-control" type="password" />
                {errors.password && <div className="text-danger">* Enter valid password</div>}
                <button className='btn btn-info mt-3'>Sign up</button>
            </form>
        </div>
    )
}