import { Header } from "./components/Header";
import "./App.css";
import { Home } from "./components/home/Home";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { Login } from "./components/LoginDialog";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentuser } from "./Redux/currentUserSlice";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import { DetailView } from "./components/Details/DetailView";
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
                        <Route path="/" element={<Home />}/>
                        <Route path="/produt/:id" element={<DetailView />}/>
                  </Routes> 
            </Homemargin>
        <Login />
 
    </>
  );
}

export default App;
