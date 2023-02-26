import React, { useRef } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import AuthClient from '../../comps_general/authClient';
import { API_URL, doApiGet, doApiMethod } from '../../services/apiService';

export default function AddGame() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [catgories_ar,setCategoriesAr] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    doApiGetCategories();
  },[])

  const onSubForm = (_bodyData) => {
    console.log(_bodyData);
    doApiPost(_bodyData)
  }

   

  const doApiGetCategories = async() => {
    let url = API_URL+"/categories";
    let data = await doApiGet(url);
    console.log(data);
    setCategoriesAr(data); 
  }


  const doApiPost = async(_bodyData) => {
    try{
      let url = API_URL+"/gamesApps"
      let data = await doApiMethod(url,"POST",_bodyData);
      if(data._id){
        toast.success("You added new app/games!");
        nav("/userGameList")
      }
    }
    catch(err){
      alert("There problem");
      console.log(err);
      
    }
  }




  return (
    <div className='container mt-3'>
    <AuthClient/>
      <h1>Add new App/Games form</h1>
      

      <form className='col-md-6' onSubmit={handleSubmit(onSubForm)} id="id_form" >
        <label>name</label>
        <input {...register("name", { required: true, minLength: 2 })} className="form-control" type="text" />
        {errors.name && <div className="text-danger">* Enter valid name</div>}
        <label>info</label>
        {/* row -> גובה הטקסט אריאה לפי שורות */}
        <textarea rows={3} {...register("info", { required: true, minLength: 2 })} className="form-control" type="textarea"></textarea>
        {errors.info && <div className="text-danger">* Enter valid info</div>}
        <label>price</label>
        <input {...register("price", { required: true, min: 1 })} className="form-control" type="number" />
        {errors.price && <div className="text-danger">* Enter valid price</div>}
        <label>img_url</label>
        <input {...register("img_url", { required: false, minLength: 2 })} className="form-control" type="text" />
        {errors.img_url && <div className="text-danger">* Enter valid img_url</div>}
        <label>link_url</label>
        <input {...register("link_url", { required: true, minLength: 2 })} className="form-control" type="text" />
        {errors.link_url && <div className="text-danger">* Enter valid link_url</div>}
        <label>category_url</label>

        <select {...register("category_url", { required: true, minLength: 2 })} className="form-select" type="select" >
          {catgories_ar.map(item => {
            return (
              <option key={item._id} value={item.url_code}>{item.name}</option>
            )
          })}
        </select>

        <button className='btn btn-success mt-3'>Add new</button>
        <Link to="/userGameList" className='btn btn-danger mt-3 ms-5' >Cancel</Link>
      </form>
    </div >
  )
}