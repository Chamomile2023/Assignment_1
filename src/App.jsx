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
import UserCard from "./components/UserCard/UserCard";
import UnknownCard from "./components/UnknownCard/UnknownCard";
import SingleUserCard from "./components/singleUserCard/singleUserCard";

function App() {
  //Sidebar
  const [show, setShow] = useState(false);
  //Fetch User
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const getUserData = async () => {
    setLoading(false);
    const request = await fetch("https://reqres.in/api/users?page=1/${id}");
    const response = await request.json();
    setUserData(response.data);
    setLoading(true);
  };
  useEffect(() => {
    getUserData();
  }, []);
  const [userTwoData, setUserTwoData] = useState([]);
  const getUserTwoData = async () => {
    const request = await fetch("https://reqres.in/api/users?page=2");
    const response = await request.json();
    setUserTwoData(response.data);
    setAllUsers([...userData, ...userTwoData]);
  };
  useEffect(() => {
    getUserTwoData();
  }, []);
  //Fetch Unknown
  const [unknownData, setUnknownData] = useState([]);
  const getUnknownData = async () => {
    const request = await fetch(`https://reqres.in/api/unknown`);
    const response = await request.json();
    setUnknownData(response.data);
  };
  useEffect(() => {
    getUnknownData();
  }, []);
  return (
    <>
      <Header show={show} setShow={setShow} />
      <Sidebar show={show} setShow={setShow} />
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <Main userData={userData} unknownData={unknownData} />
            ) : (
              <Loading />
            )
          }
        />
        <Route path="/profile" element={loading ? <Profile /> : <Loading />} />
        <Route
          path="/users"
          element={loading ? <Users userData={userData} /> : <Loading />}
        />
        <Route
          path="/unknown"
          element={
            loading ? <Unknown unknownData={unknownData} /> : <Loading />
          }
        />
        <Route
          path="/users/:id"
          element={<SingleUserCard allUsers={allUsers} />}
        />
      </Routes>
    </>
  );
}

export default App;
