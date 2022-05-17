import { Typography, makeStyles } from "@material-ui/core";
import { Caarousel } from "../../Components/Carousel/Carousel";
import CastForEducationRoundedIcon from "@material-ui/icons/CastForEducationRounded";
import "./Education.css";
const useStyles = makeStyles({
  head: {
    color: "#FFF",
    textAlign: "center",
    marginBottom: "10px",
  },
  box: {},
  image: {
    width: "100%",
    fontSize: "150px",
    color: "#fca311",
  },
  text: {
    color: "#14213d",
  },
  underlineH6: {
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "calc(50% - 20px)",
    maxWidth: "40px",
    minHeight: "4px",
    backgroundColor: "#fca311",
    borderRadius: "16px",
  },
  underlineH61: {
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "calc(50% - 20px)",
    maxWidth: "40px",
    minHeight: "4px",
    backgroundColor: "#fff",
    borderRadius: "16px",
  },
});
const Education_data_ = [
  {
    Problem: "Children from migrant footloose dailywage families ",
    Tag: "Kindergarten Education",
  },
  {
    Problem: " Children from migrant footloose dailywage families ",
    Tag: "Academic Education ",
  },
  {
    Problem: "Children from migrant footloose dailywage families ",
    Tag: "Remedial Learning",
  },
  {
    Problem: "Children from migrant footloose dailywage families",
    Tag: "Digital Learning",
  },
  {
    Problem: "Children from migrant footloose dailywage families ",
    Tag: "Summer Camps",
  },
  {
    Problem: "Children from migrant footloose dailywage families ",
    Tag: "Value Education",
  },
];
export const Education = (props) => {
  const classes = useStyles();
  return (
    <>
      {/* <div className="outer-div">
        <Caarousel />
      </div>
      <div className="title">
        <div id="name">Education</div>
        <div id="caption" className="text-center"></div>
      </div> */}
      <div>
        <div className="outermost_div">
          <Typography variant="h4" className={classes.head}>
            WHAT WE DO
          </Typography>
          <h6 className={classes.underlineH61}></h6>
          <div className="container ">
            <div className="row px-2 what_div">
              {Education_data_.map((item) => (
                <div className="col-12 col-sm-5 col-lg-3 slider-pick m-2">
                  <div className={classes.box} id="text_appearing">
                    <CastForEducationRoundedIcon className={classes.image} />
                    <Typography className={classes.text}>{item.Tag}</Typography>

                    <h6 className={classes.underlineH6}></h6>
                  </div>
                  <div className="text__overlay">
                    <Typography className={classes.text}>
                      {item.Tag}
                      <h6 className={classes.underlineH6}></h6>
                    </Typography>

                    <Typography>{item.Problem}</Typography>
                    <a
                      href={"#" + item.Tag.split(" ")[0]}
                      className="btn mt-3"
                      style={{ backgroundColor: "#14213d", color: "#fff" }}
                    >
                      Know More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Typography variant='h4'>Education</Typography>
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
};
