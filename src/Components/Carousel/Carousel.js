import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import Carousel from "react-material-ui-carousel";
import Eduation_data from "../../Shared/Eduaction_data";
import pic from "../../Shared/images/montain.jpg";
import "./Carousel.css";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
export const Caarousel = (props) => {
  return (
    <>
      
      <Carousel
        NextIcon={<ArrowForwardIosRoundedIcon />}
        PrevIcon={<ArrowBackIosRoundedIcon />}
        navButtonsAlwaysVisible={true}
        animation="slide"
        interval={5000}
        duration={10}
        navButtonsProps={{
          style: {
            backgroundColor: "transparent",
            borderRadius: 0,
            top: "calc(50%) !important",
          },
        }}
        navButtonsWrapperProps={{
          style: {
            bottom: "0",
            top: "unset",
          },
        }}
      >
        {Eduation_data.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
};

function Item(props) {
  return (
      <img src={pic} className="inner-div" />
  );
}
