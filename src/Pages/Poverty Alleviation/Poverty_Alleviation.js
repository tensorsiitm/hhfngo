import pic from "../../Shared/images/montain.jpg";
import "./Poverty_Alleviation.css";
import { Block } from "../../Components/Block/Block";
import { Typography, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    backgroundColor: "#14213d",
    borderRadius: "16px",
  },
});
export const Poverty_Alleviation = (props) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
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
      <div>
        <div className="heading mt-5">
          <Typography variant="h5"> POVERTY ALLEVIATION</Typography>
          <h6 className="underlineH61"></h6>
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
      {/* */}

      <div>
        <div className="container">
          {Poverty_Alleviation_.map((poverty, index) => (
            <div id={poverty.idFake}>
              <div className="row my-3">
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
                  <motion.div
                    className="box"
                    ref={ref}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control}
                  >
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
                        className="col-12 col-md-6 div_stepper text-center"
                        style={{
                          color: index % 2 == 0 ? "#14213d" : "#fca311 ",
                        }}
                      >
                        {poverty.body}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="outer__div">
                    <div
                      className="col-12 col-md-6 div_stepper text-center"
                      style={{
                        color: index % 2 != 0 ? "#14213d" : "#fca311 ",
                      }}
                    >
                      {poverty.body}
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
