import "./App.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Loading from "./components/Loading/Loading";
import Profile from "./components/Profile/Profile";

function App() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const getUserData = async () => {
    setLoading(false);
    const request = await fetch("https://reqres.in/api/users?page");
    const response = await request.json();
    setUserData(response.data);
    setLoading(true);
  };
  useEffect(() => {
    getUserData();
  }, []);
  console.log(userData);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={loading ? <Main /> : <Loading />} />
        <Route path="/profile" element={loading ? <Profile /> : <Loading />} />
      </Routes>
    </>
  );
}

export default App;
