import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { API_KEY_IP } from '../services/apiService';


function ForbiddenCountryChecker({ children }) {
  const [allowed, setAllowed] = useState(false);
  const [loading, setLoading] = useState(false);
  const forbiddenCountries = ['US', 'PK', 'KP', 'CU'];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY_IP}`
        );
        const data = await response.json();
        if (!forbiddenCountries.includes(data.country_code2)) {
          setAllowed(true);
          toast.success("Access granted!", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        else{
          toast.error("Access denied! You are in a forbidden Country", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        setLoading(true)

      } catch (error) {
        console.error(error);
      }
    }
    fetchData();

  }, []);

  if (!allowed) return <div></div>;
  return children;
}

export default ForbiddenCountryChecker;