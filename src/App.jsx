import "./App.scss";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ButtonCircle from "./components/ButtonCircle/ButtonCircle";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Loading from "./components/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(false);
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
