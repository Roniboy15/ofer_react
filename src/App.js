import './App.css';
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom'
import LoginAdmin from './admin_comps/loginAdmin';
import CategoriesList from './admin_comps/categories';

function App() {
  return (
    <BrowserRouter>
      <header>
        header
      </header>

      <Routes>
        {/* admin */}
        <Route path='/admin' element={<LoginAdmin />} />

        <Route path='/admin/categories' element={<CategoriesList/>}/>

      </Routes>


    </BrowserRouter >
  );
}

export default App;
