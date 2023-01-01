import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { API_URL, doApiMethod, TOKEN_KEY } from '../services/apiServices';

const LoginAdmin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const nav = useNavigate();

    const onSubmit = (bodyData) => {
        console.log(bodyData)
        doApi(bodyData)
    }

    const doApi = async(bodyData) => {
        try{
          let url = API_URL+"/users/login";
          let data = await doApiMethod(url,"POST",bodyData);
          console.log(data);
            localStorage.setItem(TOKEN_KEY, data.token);
            nav("/admin/categories")
        }
        catch(err){
          console.log(err);
          alert("Email or passwrod worng!");
        }
        
      }
    return (
        <div className='container'>
            <h1 className='text-center'>Login to admin</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='col-md-6 mx-auto p-2'>
                <label>Email:</label>
                <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} type="text" className='form-control' />
                <label>Password:</label>
                <input {...register("password", { required: true, minLength: 3 })} type="text" className='form-control' />
                <div className='mt-4'>
                    <button className='btn btn-info'>Log in</button>
                </div>
            </form>
        </div>)
}

export default LoginAdmin