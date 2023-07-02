import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allDataofCart, removefromCart } from "../Redux/CartSlice";
import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Loader } from "./Loader/Loader";
import { increaseQty, decreaseQty } from "../Redux/CartSlice";
import EmptyCart from "./Loader/EmptyCart.gif"
import {  useNavigate } from "react-router-dom";

export default function Cart() {
  const [loading, setloading] = useState(false);
  // const navigate=useNavigate()
  let selector = useSelector((state) => state);
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let userid = localStorage.getItem("_id");

  if (userid != null) {
    //login
    let reduxdata = selector.CartSliceName.CartData;
    if (reduxdata.length == 0) {
      let takingDatafromDb = async () => {
        await axios.post("/alladdcartdata", { user: userid }).then((e) => {
          // dispatch(allDataofCart(e.data.data))//////////// need to send data in form of object because in eary program it taking data in object
          //and when sending it like this is not workinf fine   so i updated the code in in slice also added  ARRAY.SOME-------
          let c = e.data.data;
          // console.log("c",c)
          c.map((e) => dispatch(allDataofCart(e)));
        });
      };
      takingDatafromDb();
    }
  }

  //////Remove from cart
  const handleRmoveItem = async (e) => {
    dispatch(removefromCart(e));
    setloading(true);
    await axios.post("/delete", { id: e }).then((e) => {
      setloading(false);
    });
  };
  let reduxdata = selector.CartSliceName.CartData;

  const Grides = styled(Grid)({
    marginTop: "80px",
    padding: "30px 135px",

    "@media (max-width: 908px)": {
      padding: "5px !important",
      marginLeft: "3px",
    },
  });
  const Header = styled(Box)({
    padding: "15px 24px",
    minWidth: "100px",
    fontWeight: "600",
  });
  const Headers = styled(Typography)({
    padding: "15px 24px",
    minWidth: "100px",
    fontWeight: "600",
    fontSize: "18px",
  });
  const Component = styled(Box)({
    borderTop: "3px solid #f0f0f0",
    display: "flex",
    marginBottom: "3px",
    "@media (max-width: 900px)": {
      padding: "5px !important",
      marginLeft: "3px",
      flexDirection: "column",
    },
  });
  const LeftComponent = styled(Box)({
    margin: "20px",
  });
  const SmallText = styled(Typography)({
    color: "#878787",
    marginTop: "10px",
  });
  const Image = styled("img")({
    maxWidth: "200px",
    minWidth: "200px",
  });
  const Buttons = styled(Button)({
    marginTop: "25px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#000",
  });
  const FinalButton = styled(Box)({
    width: "100%",
  });
  const PadindinRight = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "50px",
  });
  const BtnFinal = styled(Button)({
    display: "flex",
    marginLeft: "auto",
    padding: "10px 50px",
    fontWeight: "600",
    boxShadow: "0px 0px 8px 12px rgb(0 0 0/10%);",
    background: "#fb641b",
    color: "#fff",
    height: "51px",
  });
  const DetailBox = styled(Box)({
    margin: "0px 10px",
    minHeight: "500px",

    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    "&>p": {
      marginBottom: "20px",
    },
  });
  const Flote = styled(Box)({
    float: "right",
  });

  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  //final sum============================
  console.log(selector.CartSliceName.CartData);
  let array = selector.CartSliceName.CartData;
  let sum = 0;
  let originalprice = 0;
  let price = 0;
  array.map((e) => {
    {
      (sum = sum + e.quantity * e.price.cost),
        (originalprice = originalprice + e.quantity * e.price.mrp),
        (price = price + e.quantity * e.price.cost);
    }
  });

  const handlePlus = (e) => {
    console.log(e);
    dispatch(increaseQty(e));
  };
  const handleMinus = (e) => {
    console.log(e);
    dispatch(decreaseQty(e));
  };

  //final sum============================
  return (
    <>
      {reduxdata[0] ? (
        <Grides container spacing={3}>
          {loading ? (
            <Grid style={{ position: "absolute" }}>
              <Loader></Loader>
            </Grid>
          ) : (
            ""
          )}
          <Grid item lg={8} md={9} sm={12} xs={12}>
            <Header>
              <Box
                style={{
                  maxWidth: "100px",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                My Cart({reduxdata.length}){" "}
              </Box>
            </Header>
            {reduxdata.map((e) => (
              <Component>
                <LeftComponent>
                  <Image src={e.url} alt="products" />
                  <Box style={{ marginTop: "10px" }}>
                    <ButtonGroup aria-label="outlined primary button group">
                      <Button
                        onClick={() => handleMinus(e._id)}
                        style={{ color: "#000", fontWeight: "600" }}
                      >
                        -
                      </Button>
                      <Button style={{ color: "#000", fontWeight: "600" }}>
                        {e.quantity}
                      </Button>
                      <Button
                        onClick={() => handlePlus(e._id)}
                        style={{ color: "#000", fontWeight: "600" }}
                      >
                        +
                      </Button>
                    </ButtonGroup>
                    {console.log(e)}
                  </Box>
                </LeftComponent>
                <Box>
                  <Typography>{e.title.longTitle}</Typography>
                  <SmallText>
                    seller:RetailNet
                    <Box component="span">
                      <img
                        src={fassured}
                        alt="fassured"
                        style={{ width: 60, marginLeft: "10px" }}
                      />
                    </Box>
                  </SmallText>

                  <Typography sty>
                    <Box
                      component={"span"}
                      style={{
                        fontWeight: 600,
                        marginLeft: "4px",
                        fontSize: "18px",
                      }}
                    >
                      ₹{e.price.cost}
                    </Box>
                    <Box
                      component={"span"}
                      style={{ color: "#878787", marginLeft: "4px" }}
                    >
                      <strike>₹{e.price.mrp}</strike>
                    </Box>
                    <Box
                      component={"span"}
                      style={{ color: "green", marginLeft: "4px" }}
                    >
                      {e.price.discount}
                    </Box>
                  </Typography>

                  <Buttons onClick={() => handleRmoveItem(e._id)}>
                    Remove
                  </Buttons>
                </Box>
              </Component>
            ))}
            <FinalButton>
              <BtnFinal>Place Order</BtnFinal>
            </FinalButton>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            {
              <DetailBox>
                <Headers>
                  <Typography
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "#878787",
                    }}
                  >
                    Price Details
                  </Typography>
                </Headers>
                <PadindinRight>
                  <Typography style={{ fontWeight: "600" }}>
                    Price({reduxdata.length} items)
                    <Flote component="span">₹{originalprice}</Flote>
                  </Typography>
                  <Typography style={{ fontWeight: "600" }}>
                    Price
                    <Flote component="span"> ₹{sum} </Flote>
                  </Typography>
                  <Typography style={{ fontWeight: "600" }}>
                    Discount
                    <Flote style={{ color: "green" }} component="span">
                      ₹{originalprice - sum}
                    </Flote>
                  </Typography>
                  <Typography style={{ fontWeight: "600" }}>
                    Delivery Charge
                    <Flote component="span">+ ₹40</Flote>
                  </Typography>
                  <Typography style={{ fontWeight: "600", fontSize: "20px" }}>
                    Total Amount
                    <Flote component="span">₹{sum + 40}</Flote>
                  </Typography>
                  <Box
                    style={{
                      fontWeight: "600",
                      fontSize: "19px",
                      color: "green",
                    }}
                  >
                    You will save ₹{originalprice - sum} on this Order
                  </Box>
                </PadindinRight>
              </DetailBox>
            }
          </Grid>
        </Grides>
      ):(<Box style={{display:"flex",margin:"auto",flexDirection:"column",  justifyContent:"center",alignItems:"center" }} >
      <img style={{display:"flex",margin:"auto"}} src={EmptyCart} alt="" srcset="" />
      <Box  style={{fontSize:"30px",fontWeight:"600",color:"#40e0d0"}} >Empty Cart ...</Box>
      </Box>)}
    </>
  );
}
