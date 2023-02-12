import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import AdminHeader from "./admin_comps/adminHeader";
import HeaderClient from "./client_comps/misc/headerClient";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { adminRoutes, clientRoutes } from "./routesPath/routesPath";
import ForbiddenCountryChecker from "./comps_general/checkIp";
import { Provider } from "react-redux";
import {createStore} from 'redux'
import reducer from "./redux/reducer";
import ReduxComp from "./comps_general/reduxComp";

function App() {
  const store = createStore(reducer);
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          {/* Routes of header what to show client or admin header... */}
          <Routes>

            <Route path="/admin/*" element={<AdminHeader />} />
            <Route path="/*" element={<HeaderClient />} />
          </Routes>
          {/*<ForbiddenCountryChecker>*/}
            <ReduxComp/>
            <Routes>
              {/* client */}
              {/* לא יכלנו לזמן כקומפנינטה מכיוון שראוטס
        מצפה שבתוכו יגיע ישירות ריאקט פרגמט או ראוט
        אבל כן אפשר לעשות פונקציה שמחזיר קומפנינטות */}
              {clientRoutes()}
              {adminRoutes()}

            </Routes>
         {/*</ForbiddenCountryChecker>*/}
          {/* The toast messages added here */}
          <ToastContainer position="top-left" theme="colored" />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
