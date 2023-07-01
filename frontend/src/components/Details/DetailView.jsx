import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { producttoview } from "../../Redux/DetailViewSlice";
import axios from "axios";
import { Box } from "@mui/system";
import { Loader } from "../Loader/Loader";
import { Actionitem } from "./Actionitems";
import styled from "@emotion/styled";
import { Grid, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Components = styled(Box)({
  background: "#f2f2f2",
  marginTop: "55px",
});
const Container = styled(Grid)({
  background: "#ffffff",
});
const RightContainer = styled(Grid)({
  marginTop: "55px",
  background: "#ffffff",
  paddingTop: "5px",
  paddingLeft: "10px",
});
const Badge = styled(LocalOfferIcon)({
 color:"Green",
 marginRight:"10px",
 fontSize:"16px"
});
const SmallText = styled(Box)({
fontSize:"14px",
verticalAlign:" baseline",
"&>p":{
  fontSize:"14px",
  marginTop:"10px"
}});

const ColumnText=styled(TableRow)({
  fontSize:"14px",
  verticalAlign:"baseline",
  "&>p":{
    fontSize:"14px",
    marginTop:"10px",
    border:"none"
  }
})



const LeftContainer = styled(Grid)({});

export const DetailView = () => {
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  let { id } = useParams();
  let useselector = useSelector((state) => state.ProductDetailSlice.data);
  let uses = useSelector((state) => state);
  let dispatch = useDispatch();

  useEffect(() => {
    // first checking data is present in Reduxtoolkit Slice
    let c = useselector.findIndex((e) => e.id === id);
    if (c == -1) {
      let findinginDB = async () => {
        setLoading(true);
        ///if data is not present in ReduxSlice than find data from mongodb and than add data in same slice
        await axios
          .get(`/oneproducts/${id}`)
          .then((data) => {
            setLoading(false);
            if (data.data.data == null) {
              navigate("/");
            }
            let finalData = data.data.data;
            // console.log(finalData)
            dispatch(producttoview(finalData));
          })
          .catch(() => {
            navigate("/");
          });
      };
      findinginDB();
      console.log(uses);
    }
    //================================================================================================
    let foundData = useselector[c];
    dispatch(producttoview(foundData));
  }, []);
  // use console.log(uses) in two ways  1)from home page select product and see the output of ProductDetailSlice.productviewinDetails
  //  2) refresh page anD THAN see the output
  let e = uses.ProductDetailSlice.productviewinDetails;
  console.log(e);
  // console.log(uses)
const date=new Date(new Date().getTime()+(5*24*60*60*1000))
  const fassured = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  return (
    <Components>
      {e && (
        <Container container spacing={1}>
          {loading ? <Loader /> : ""}
          <LeftContainer item lg={5} md={4} sm={6} xs={12}>
            <Actionitem e={e}></Actionitem>
          </LeftContainer>

          <RightContainer
            style={{ padding: "0px 15px" }}
            item
            lg={6}
            md={7}
            sm={5}
            xs={12}
          >
            {e.title && (
              <>
                <Typography>{e.title.longTitle}</Typography>
                <Typography
                  style={{ marginTop: 5, color: "#878787", fontSize: 14 }}
                >
                  {" "}
                  8 Rating & 2 Reviews
                  <Box component={"span"}>
                    {" "}
                    <img
                      src={fassured}
                      style={{ width: 77, marginLeft: 0 }}
                      alt=""
                    />
                  </Box>
                </Typography>
                <Typography>
                  <Box
                    component={"span"}
                    style={{ fontSize: 28, marginLeft: "4px" }}
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
                <Typography>Available Offers</Typography>
                <SmallText>
                  <Typography><Badge/>Special PriceGet extra 10% off (price inclusive of cashback/coupon)T&C</Typography>
                  <Typography><Badge/>Bank OfferFlat ₹1,250 Off on HDFC Bank Credit Card EMI on orders priced between ₹15,000 to ₹39,999T&C</Typography>
                  <Typography><Badge/>Bank OfferFlat ₹3,000 Off on HDFC Bank Credit Card EMI on orders priced between ₹40,000 to ₹49,999T&C</Typography>
                  <Typography><Badge/>Bank OfferFlat ₹4,000 Off on HDFC Bank Credit Card EMI on orders of ₹50,000 and aboveT&C</Typography>
                  <Typography style={{color:"#007FFF"}}>+6 more offers</Typography>
                </SmallText>
                <Table>
                  <TableBody>
                    <ColumnText>
                    <TableCell style={{color:"#878787"}}>Delivery:</TableCell>
                    <TableCell style={{fontWeight:600}} >Delivery By {date.toDateString()}|| ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                    <TableCell style={{color:"#878787"}}>warranty:</TableCell>
                    <TableCell  >No warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                    <TableCell style={{color:"#878787"}}>Seller:</TableCell>
                    <TableCell style={{fontWeight:600}} >
                      <Box component={"span"} style={{color:"#2874f0"}}> SuperComNet</Box>
                      <Typography style={{fontSize:"14px"}} >GST Invoice available</Typography>
                      <Typography style={{fontSize:"14px"}} >View more seller starting from  ₹{e.price.cost}</Typography>
                    </TableCell>
                    </ColumnText>

                    <ColumnText>
                    <TableCell colSpan={2}>
                      <img style={{width:300}} src={adURL} alt="flipKartPoints" />
                    </TableCell>
                    </ColumnText>

                    <ColumnText>
                    <TableCell style={{color:"#878787"}}>Description:</TableCell>
                    <TableCell  >{e.description}</TableCell>
                    </ColumnText>



                  </TableBody>
                </Table>
              </>
            )}
          </RightContainer>
        </Container>
      )}
    </Components>
  );
};
{
  /* <> {e&&(
                      
 

)import import  from '@mui/icons-material/LocalOffer'; from '@mui/icons-material/LocalOffer';
}
</>  */
}
