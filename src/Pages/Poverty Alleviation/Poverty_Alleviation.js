import pic from "../../Shared/images/montain.jpg";
import "./Poverty_Alleviation.css";
import { Block } from "../../Components/Block/Block";
import { Typography, makeStyles } from "@material-ui/core";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
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
  upperDiv: {
    position: "absolute",
    bottom: "0",
    color: "white",
    left: "0",
    width: "100%",
    zIndex: "100",
    padding: "10px",
    textAlign: "center",
    fontSize: "8px",
    backgroundColor: "#14213d",
    transition: "all 0.5s linear",
    opacity: 0,
    "&:hover": {
      opacity: 1,
      cursor: "pointer",
    },
  },
  underlineH62: {
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "calc(50% - 20px)",
    maxWidth: "40px",
    minHeight: "4px",
    backgroundColor: "#E8630A",
    borderRadius: "16px",
  },
});
export const Poverty_Alleviation = (props) => {
  const classes = useStyles();
  const Poverty_Alleviation_ = [
    {
      id: "CELEBRATION",
      body: (
        <div>
          <span>C</span>elebrating birthdays, main stream events, festivals free
          of cost with the unprivileged children boosts the morale of the kids
          and they experience the happiness too, thus the feeling of being in
          poverty vanishes briefly.
        </div>
      ),
      header: "CELEBRATION OF EVENTS",
      idFake: "Celebration",
      impact: "https://www.facebook.com/pg/hhfngomum/",
    },
    {
      id: "DISTRIBUTION",
      body: (
        <div>
          <span>P</span>re-owned clothing donated to us by mainstream society
          are distributed free to our unprivileged beneficiaries which supports
          their household, thus reducing poverty to a fraction.
        </div>
      ),
      header: "DISTRIBUTION OF BOOKS",
      idFake: "Distribution",
      impact: "https://www.facebook.com/pg/hhfngomum/",
    },
    {
      id: "SCHOOL",
      body: (
        <div>
          <span>S</span>chool notebooks, stationary, crayons are distributed
          free to unprivileged children studying in govt and semi-private
          schools free of cost
        </div>
      ),
      header: "SCHOOL EDUCATION MATERIAL",
      idFake: "School",
      impact: "https://www.facebook.com/pg/hhfngomum/",
    },
  ];
  const Poverty_Alleviation_Data = [
    {
      image: pic,
      header: "CELEBRATION OF EVENTS",
      idFake: "Celebration",
    },
    {
      image: pic,
      header: "DISTRIBUTION OF PREOWNED / NEW APPARELS / BLANKETS",
      idFake: "Distribution",
    },
    {
      image: pic,
      header: "SCHOOL EDUCATION MATERIAL SUPPLIES",
      idFake: "School",
    },
  ];
  return (
    <>
      <div style={{ backgroundColor: "#E8630A" }}>
        <div className="heading pt-3" style={{ color: "#14213d" }}>
          <Typography variant="h5"> POVERTY ALLEVIATION</Typography>
          <h6
            className="underlineH61"
            style={{ backgroundColor: "#14213d" }}
          ></h6>
        </div>
        <div className="container">
          <div className="row">
            {Poverty_Alleviation_Data.map((poverty, index) => (
              <div key={index} className="col-12 col-md-4 mt-3 div__">
                <Block
                  poverty={poverty}
                  poverty_data={Poverty_Alleviation_[index]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#14213d" }}>
        <div className="container">
          {Poverty_Alleviation_.map((poverty, index) => (
            <div id={poverty.idFake}>
              <div className="row py-3">
                <div
                  className="header_div mb-3 pt-3"
                  style={{ color: "#fca311" }}
                >
                  <Typography variant="h4">
                    {poverty.header}
                    <h6 className={classes.underlineH62}></h6>
                  </Typography>
                </div>
                {index % 2 == 0 ? (
                  <div className="outer__div">
                    <div
                      className="d-none d-md-block col-md-6 img__div"
                      style={{
                        borderRadius: "16px",
                      }}
                    >
                      <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        style={{ height: "100%" }}
                      >
                        <div
                          className="carousel-inner"
                          style={{ height: "100%" }}
                        >
                          <div
                            className="carousel-item active"
                            style={{ height: "100%" }}
                          >
                            <img
                              src={pic}
                              className="d-block w-100 img__conatainer"
                            />
                          </div>
                          <div
                            className="carousel-item"
                            style={{ height: "100%" }}
                          >
                            <img
                              src={pic}
                              className="d-block w-100 img__conatainer"
                            />
                          </div>
                          <div
                            className="carousel-item"
                            style={{ height: "100%" }}
                          >
                            <img
                              src={pic}
                              className="d-block w-100 img__conatainer"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-12 col-md-6 div_stepper text-center center_1"
                      style={{
                        color: index % 2 != 0 ? "#14213d" : "#fca311 ",
                      }}
                    >
                      <div className="center_">
                        {poverty.body}
                        <a href={poverty.impact} className="btn impact mt-2">
                          Learn More
                          <span className="span4">
                            <ArrowForwardIosRoundedIcon />
                          </span>
                          <span className="span3">
                            <ArrowRightRoundedIcon />
                            <ArrowRightRoundedIcon />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="outer__div">
                    <div
                      className="col-12 col-md-6 div_stepper text-center center_1"
                      style={{
                        color: index % 2 == 0 ? "#14213d" : "#fca311 ",
                      }}
                    >
                      <div className="center_">
                        {poverty.body}
                        <a href={poverty.impact} className="btn impact mt-2">
                          Learn More
                          <span className="span4">
                            <ArrowForwardIosRoundedIcon />
                          </span>
                          <span className="span3">
                            <ArrowRightRoundedIcon />
                            <ArrowRightRoundedIcon />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div
                      className="d-none d-md-block col-md-6 img__div"
                      style={{ borderRadius: "16px" }}
                    >
                      <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        style={{ height: "100%" }}
                      >
                        <div
                          className="carousel-inner"
                          style={{ height: "100%" }}
                        >
                          <div
                            className="carousel-item active"
                            style={{ height: "100%" }}
                          >
                            <img
                              src={pic}
                              className="d-block w-100 img__conatainer"
                            />
                          </div>
                          <div
                            className="carousel-item"
                            style={{ height: "100%" }}
                          >
                            <img
                              src={pic}
                              className="d-block w-100 img__conatainer"
                            />
                          </div>
                          <div
                            className="carousel-item"
                            style={{ height: "100%" }}
                          >
                            <img
                              src={pic}
                              className="d-block w-100 img__conatainer"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
