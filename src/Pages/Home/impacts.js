import CountUp from "react-countup";
import "./impacts.css";
import { Typography, makeStyles } from "@material-ui/core";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";

const useStyles = makeStyles({
  underlineH6: {
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "calc(50% - 20px)",
    maxWidth: "40px",
    minHeight: "4px",
    backgroundColor: "#fff",
    borderRadius: "16px",
  },
  imgDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  countDiv: {
    fontSize: "20px",
    fontWeight: "800",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
  images: {
    fontSize: "100px",
    color: "#fca311",
  },
  text: { color: "rgb(11, 0, 96)",
  fontWeight: "800"
 },
  underlineH61: {
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "calc(50% - 20px)",
    maxWidth: "40px",
    minHeight: "4px",
    backgroundColor: "#fca311",
    borderRadius: "16px",
  },
});

export const Impact = (props) => {
  const classes = useStyles();
  const Poverty_Alleviation_Data = [
    {
      image: <SchoolRoundedIcon className={classes.images} />,
      count: 25900,
      Tag: "Education",
      suffix: "+",
    },
    {
      image: <LocalHospitalIcon className={classes.images} />,
      count: 22500,
      Tag: "Public Health",
      suffix: "+",
    },
    {
      image: <PeopleAltRoundedIcon className={classes.images} />,
      count: 16130,
      Tag: "Poverty Alleviation",
      suffix: "+",
    },
  ];
  return (
    <div className="mt-5">
      <div className="count">
        <div className="row">
          {Poverty_Alleviation_Data.map((item) => (
            <div
              className="col-12 col-md-4"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="Div">
                <div className={classes.imgDiv}>{item.image}</div>

                <div className={classes.countDiv}>
                  <CountUp end={item.count} suffix={item.suffix} />
                </div>
              </div>
              <div style={{ marginTop: "40px" }}>
                <Typography variant="h5" className={classes.text}>
                  {item.Tag}
                </Typography>
                <h6 className={classes.underlineH61}></h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};