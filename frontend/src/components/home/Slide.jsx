import styled from "@emotion/styled";
import { Box, Typography,Button, colors } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import AccessAlarmsRoundedIcon from "@mui/icons-material/AccessAlarmsRounded";
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Components = styled(Box)({
  marginTop: "10px",
  background: "#ffffff",
});
const Deal = styled(Box)({
  padding: "15px 20px",
  display: "flex",
  alignItems:"center",

});
const Timer = styled(Box)({
  display: "flex",
  marginLeft: "10px",
  alignItems:"center",
  color:"#7f7f7f"
});
const ViewButton =styled(Button)({
    marginLeft:"auto",
    borderRadius:"3px",
    fontSize:"13px"

})
const Singleproducts =styled(Box)({
    textAlign:"center",

})

const Text=styled(Typography)({
    fontSize:"14px",
    marginTop:"5px",
    textAlign:"center"
})


// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds} Left
      </span>
    );
  }
};

export const Slide = ({ allProduct ,title,timmer}) => {
  // console.log(allProduct);
  return (
    <Components>
      <Deal>
        <Typography sx={{fontSize:"20px",fontWeight:"600",marginRight:"25px"}}>{title}</Typography>
        {timmer && <Timer>
          <AccessAlarmsRoundedIcon />
         <Countdown date={Date.now() + 5.04e7} renderer={renderer}></Countdown>
        </Timer>}
        <ViewButton variant="contained" color="primary">View All</ViewButton>
      </Deal>
      <Divider />       

      <Carousel
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container" 
        responsive={responsive}
        swipeable={false}
        draggable={false}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        keyBoardControl={true}
        centerMode={true}
      >
        {allProduct.map((e, i) => (
          <Link to={`/produt/${e.id}`} style={{textDecoration:"none"}}>
          <Singleproducts  style={{padding:'25px 15px'}}>
            <img className=" w-auto h-40 items-center justify-center ml-2" src={e.detailUrl} alt="" srcset="" />
            <Text style={{fontWeight:"600" ,color:"#212121"}}>{e.title.shortTitle}</Text>
            <Text style={{color:"green"}}>{e.discount}</Text>
            <Text style={{color:"#212121", opacity:".7"}}>{e.tagline}</Text>
          </Singleproducts></Link>
        ))} 
      </Carousel>
    </Components>
  );
};
