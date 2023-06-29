import { Header } from "./components/Header";
import "./App.css";
import { Home } from "./components/home/Home";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { Login } from "./components/LoginDialog";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { currentuser } from "./Redux/currentUserSlice";

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
  });

  return (
    <>
      <Header />
      <Homemargin>
        <Home />
      </Homemargin>
      <Login />
    </>
  );
}

export default App;
