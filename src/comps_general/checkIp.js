import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/context";
import Loading from "./loading";

const FetchLocation = () => {
const [location, setLocation] = useState(null);
const [flag, setFlag] = useState(null);
const restrictedCountries = ["IL", "CN", "RU"];

const fetchData = async () => {
try {
const ip = await axios.get("http://icanhazip.com").then(res => res.data);
const locationData = await axios
.get(`https://ipapi.co/${ip}/json/`)
.then(res => res.data);
setLocation(locationData);
} catch (error) {
console.error(error);
}
};

useEffect(() => {
fetchData();
}, []);

useEffect(() => {
if (location) {
if (restrictedCountries.includes(location.country_code)) {
setFlag(true);
} else {
setFlag(false);
}
}
}, [location]);

return (
<AppContext.Provider value={flag}>
</AppContext.Provider>
);
};

export default FetchLocation;