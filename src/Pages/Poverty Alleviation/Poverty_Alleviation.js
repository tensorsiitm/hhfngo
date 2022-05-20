import pic from "../../Shared/images/montain.jpg";
import CountUp from "react-countup";
import "./Poverty_Alleviation.css";
import { Typography, makeStyles } from "@material-ui/core";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import PublicRoundedIcon from "@material-ui/icons/PublicRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
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
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "70px",
    color: "#14213d",
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
  text: { color: "#14213d" },
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

export const Poverty_Alleviation = (props) => {
  const classes = useStyles();
  const Poverty_Alleviation_Data = [
    {
      image: <SchoolRoundedIcon className={classes.images} />,
      count: 197,
      Tag: "Number Of Schools",
      suffix: "k",
    },
    {
      image: <PublicRoundedIcon className={classes.images} />,
      count: 45,
      Tag: "Countries Explored",
      suffix: " ",
    },
    {
      image: <PersonRoundedIcon className={classes.images} />,
      count: 96,
      Tag: "Students We Made",
      suffix: "M",
    },
  ];
  return (
    <div className="mt-5">
      <div className="count">
        <div className={classes.header}>
          <div>
            <Typography variant="h3">SOCIAL IMPACT</Typography>

            <h6 className={classes.underlineH61}></h6>
          </div>
        </div>
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
