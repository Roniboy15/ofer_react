import {BrowserRouter,Routes,Route} from "react-router-dom"
import { ToastContainer } from "react-toastify";

import AddCategory from "./admin_comps/addCategory";
import AdminHeader from "./admin_comps/adminHeader";
import AppListAdmin from "./admin_comps/appsListAdmin";
import CategoriesList from "./admin_comps/categoriesList";
import EditCategory from "./admin_comps/editCategory";
import LoginAdmin from "./admin_comps/loginAdmin";
import UsersList from "./admin_comps/usersList";
import Home from "./client_comps/home";
import HeaderClient from "./client_comps/misc/headerClient";
import PageGamesList from "./client_comps/pageGamesList/pageGamesList";
import GameInfo from "./client_comps/gameInfo/gameInfo";

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./client_comps/userPages/login";
import Signup from "./client_comps/userPages/signup";

function App() {
  return (
    <BrowserRouter>
    {/* Routes of header what to show client or admin header... */}
      <Routes>
        <Route path="/admin/*" element={<AdminHeader />}/>
        <Route path="/*" element={<HeaderClient />} />
      </Routes>
      <Routes>  
        {/* client */}
        <Route path="/" element={<Home />} />
        <Route path="/category/:catName" element={<PageGamesList />} />
        <Route path="/info/:id" element={<GameInfo />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* admin */}
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/admin/categories" element={<CategoriesList />} />
        <Route path="/admin/categories/new" element={<AddCategory />} />
        <Route path="/admin/categories/edit/:id" element={<EditCategory />} />
        <Route path="/admin/apps" element={<AppListAdmin />} />
        <Route path="/admin/users" element={<UsersList />} />
      </Routes>
      {/* The toast messages added here */}
      <ToastContainer position="top-left" theme="colored" />
    </BrowserRouter>
  );
}

export default App;
