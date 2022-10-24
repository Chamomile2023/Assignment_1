import "./App.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Loading from "./components/Loading/Loading";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import Users from "./components/Users/User";
import Unknown from "./components/Unknown/Unknown";

function App() {
  //Sidebar
  const [show, setShow] = useState(false);
  const toggle = () => {
    return setShow((e) => !e);
  };
  //Fetch
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
      <Header show={show} setShow={setShow} />
      <Sidebar show={show} setShow={setShow} />
      <Routes>
        <Route path="/" element={loading ? <Main /> : <Loading />} />
        <Route path="/profile" element={loading ? <Profile /> : <Loading />} />
        <Route path="/users" element={loading ? <Users /> : <Loading />} />
        <Route path="/unknown" element={loading ? <Unknown /> : <Loading />} />
      </Routes>
    </>
  );
}

export default App;
