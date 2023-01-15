import {BrowserRouter,Routes,Route} from "react-router-dom"
import { ToastContainer } from "react-toastify";

import AddCategory from "./admin_comps/addCategory";
import AdminHeader from "./admin_comps/adminHeader";
import AppListAdmin from "./admin_comps/appsListAdmin";
import CategoriesList from "./admin_comps/categoriesList";
import EditCategory from "./admin_comps/editCategory";
import LoginAdmin from "./admin_comps/loginAdmin";
import UsersList from "./admin_comps/usersList";

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <AdminHeader />
      <Routes>

        {/* admin */}
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/admin/categories" element={<CategoriesList />} />
        <Route path="/admin/categories/new" element={<AddCategory />} />
        <Route path="/admin/categories/edit/:id" element={<EditCategory />} />
        <Route path="/admin/apps" element={<AppListAdmin />} />
        <Route path="/admin/users" element={<UsersList />} />
      </Routes>
      {/* The toast messages added here */}
      <ToastContainer theme="colored" />
    </BrowserRouter>
  );
}

export default App;
