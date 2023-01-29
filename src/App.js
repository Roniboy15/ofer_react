import { BrowserRouter, Routes, Route } from "react-router-dom"
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
import { adminRoutes, clientRoutes } from "./routesPath/routesPath";
import CheckIp from "./comps_general/checkIp";
import { AppContext } from "./context/context";
import { useContext, useState } from "react";
import FetchLocation from "./comps_general/checkIp";

function App() {
  const [flag, setFlag] = useState()
  return (
    <div>
      <FetchLocation setFlag={flag}/>
      {console.log("app flag: "+flag)}
      {!flag ?
        <BrowserRouter>
          {/* Routes of header what to show client or admin header... */}
          <Routes>

            <Route path="/admin/*" element={<AdminHeader />} />
            <Route path="/*" element={<HeaderClient />} />
          </Routes>
          <Routes>
            {/* client */}
            {/* לא יכלנו לזמן כקומפנינטה מכיוון שראוטס
        מצפה שבתוכו יגיע ישירות ריאקט פרגמט או ראוט
        אבל כן אפשר לעשות פונקציה שמחזיר קומפנינטות */}
            {clientRoutes()}
            {adminRoutes()}

          </Routes>
          {/* The toast messages added here */}
          <ToastContainer position="top-left" theme="colored" />
        </BrowserRouter>
        : <div>Not allowed in this country</div>}
        
    </div>
  );
}

export default App;
