import './App.css';
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom'
import LoginAdmin from './admin_comps/loginAdmin';
import CategoriesList from './admin_comps/categories';
import AddCategory from './admin_comps/addCat';
import EditCategory from './admin_comps/editCat';
import AdminHeader from './admin_comps/adminHeader';

function App() {
  return (
    <BrowserRouter>
      <AdminHeader/>

      <Routes>
        {/* admin */}
        <Route path='/admin' element={<LoginAdmin />} />

        <Route path='/admin/categories' element={<CategoriesList/>}/>

        <Route path='/admin/categories/new' element={<AddCategory/>}/>

        <Route path='/admin/categories/edit/:id' element={<EditCategory/>}/>

      </Routes>


    </BrowserRouter >
  );
}

export default App;
