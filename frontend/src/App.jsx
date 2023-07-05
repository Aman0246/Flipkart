import { Header } from "./components/Header";
import "./App.css";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import {Login} from "./components/LoginDialog";
import axios from "axios";
import React, { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentuser } from "./Redux/currentUserSlice";
import { Routes, Route} from "react-router-dom";
import { Loader } from "./components/Loader/Loader";
import Dataentry from "./components/Admin/Dataentry";
const Home =lazy(() => import("./components/home/Home"));
const Main =lazy(() => import("./components/Pagination/Main"));
const Cart =lazy(() => import("./components/Cart"));
// const Login =lazy(() => import("./components/LoginDialog"));

const DetailView = lazy(() => import("./components/Details/DetailView"))

axios.defaults.baseURL = import.meta.env.VITE_PORT;
axios.defaults.withCredentials = true;
function App() {
  const dispatchUser = useDispatch();
  //--------------------------------Checkuser that  he is logined  from local storage-------------------------------------------------
  useEffect(() => {
    const getuser = async () => {
      let id = localStorage.getItem("_id");
      if (id) {
        await axios.post("/singleuser", { id: id }).then((a) => {
          dispatchUser(currentuser(a.data.user));
        });
      }
    };
    getuser();
  });
  //--------------------------------Checkuser that  he is logined  from local storage-------------------------------------------------

  const Homemargin = styled(Box)({
    marginTop: "55px",
    Width: "50rem",
  });

  return (
    <>

      <Header />
              <Homemargin>
                    <Routes>
                  
                        <Route path="/" element={  <Suspense fallback={<div><Loader></Loader></div>}><Home/></Suspense>}/>
                        <Route path="/cart" element={  <Suspense fallback={<div><Loader></Loader></div>}><Cart/></Suspense>}/>
                        <Route path="/addProduct" element={  <Suspense fallback={<div><Loader></Loader></div>}><Dataentry/></Suspense>}/>
                        <Route path="/perpage" element={  <Suspense fallback={<div><Loader></Loader></div>}><Main/></Suspense>}/>
                        <Route path="/produt/:id" element={<Suspense fallback={<div><Loader></Loader></div>}><DetailView /></Suspense>}/>
                  </Routes> 
            </Homemargin>
        <Login />

 
    </>
  );
}

export default App;
