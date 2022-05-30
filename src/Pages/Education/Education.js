import { Typography, makeStyles } from "@material-ui/core";
import pic from "../../Shared/images/montain.jpg";
import VerticalLinearStepper from "../../Components/Stepper/Stepper";
import CastForEducationRoundedIcon from "@material-ui/icons/CastForEducationRounded";
import "./Education.css";

const useStyles = makeStyles({
  head: {
    color: "#FFF",
    textAlign: "center",
    marginBottom: "10px",
    paddingTop: "10px",
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
const Education_data_information = [
  {
    Tag: "Kindergarten Education",
    impact:
      "300 Students directly benefitted through the sessions and learned basic reading, writing and arithmetic skills",
    infor: [
      {
        label: "Problem",
        information:
          "Children from migrant footloose dailywage families living in slum pockets of rural and hard-to-reach areas are often engaged in anti-social activities or spend their childhood in playing around or accompanying their parents to work, at times even engaged in child labor, since they lack basic educational facilities and also unaffordable to attend mainstream preschools, thereby lacking basic education, a stepping platform to formal education",
      },
      {
        label: "Solution",
        information:
          "Mainstream Quality Kindergarten English education, school supplies, uniforms, books, stationary, bags, nutrition, health screenings, celebrations of all major events and festivals, mainstream academic sessions for Nursery and Kindergarten, sports, Bi-annual Summative assessments, Co-Curricular Activities to list a few are accessed free of any remuneration by the unprivileged children irrespective of caste, creed or affiliations from Smiling Stars English Preschool, which operates in the slums out of a rented premises",
      },
    ],
  },
  {
    Tag: "Academic Education",
    impact:
      "300 Students directly benefitted through the sessions and learned basic reading, writing and arithmetic skills",
    infor: [
      {
        label: "Problem",
        information:
          "Children from migrant footloose dailywage families living in slum pockets of rural and hard-to-reach areas are often engaged in anti-social activities or spend their childhood in playing around or accompanying their parents to work, at times even engaged in child labor, since they lack basic educational facilities and also unaffordable to attend mainstream preschools, thereby lacking basic education, a stepping platform to formal education",
      },
      {
        label: "Solution",
        information:
          "Mainstream Quality Kindergarten English education, school supplies, uniforms, books, stationary, bags, nutrition, health screenings, celebrations of all major events and festivals, mainstream academic sessions for Nursery and Kindergarten, sports, Bi-annual Summative assessments, Co-Curricular Activities to list a few are accessed free of any remuneration by the unprivileged children irrespective of caste, creed or affiliations from Smiling Stars English Preschool, which operates in the slums out of a rented premises",
      },
    ],
  },
  {
    Tag: "Remedial Learning",
    impact:
      "300 Students directly benefitted through the sessions and learned basic reading, writing and arithmetic skills",
    infor: [
      {
        label: "Problem",
        information:
          "Children from migrant footloose dailywage families living in slum pockets of rural and hard-to-reach areas are often engaged in anti-social activities or spend their childhood in playing around or accompanying their parents to work, at times even engaged in child labor, since they lack basic educational facilities and also unaffordable to attend mainstream preschools, thereby lacking basic education, a stepping platform to formal education",
      },
      {
        label: "Solution",
        information:
          "Mainstream Quality Kindergarten English education, school supplies, uniforms, books, stationary, bags, nutrition, health screenings, celebrations of all major events and festivals, mainstream academic sessions for Nursery and Kindergarten, sports, Bi-annual Summative assessments, Co-Curricular Activities to list a few are accessed free of any remuneration by the unprivileged children irrespective of caste, creed or affiliations from Smiling Stars English Preschool, which operates in the slums out of a rented premises",
      },
    ],
  },
  {
    Tag: "Digital Learning",
    impact:
      "300 Students directly benefitted through the sessions and learned basic reading, writing and arithmetic skills",
    infor: [
      {
        label: "Problem",
        information:
          "Children from migrant footloose dailywage families living in slum pockets of rural and hard-to-reach areas are often engaged in anti-social activities or spend their childhood in playing around or accompanying their parents to work, at times even engaged in child labor, since they lack basic educational facilities and also unaffordable to attend mainstream preschools, thereby lacking basic education, a stepping platform to formal education",
      },
      {
        label: "Solution",
        information:
          "Mainstream Quality Kindergarten English education, school supplies, uniforms, books, stationary, bags, nutrition, health screenings, celebrations of all major events and festivals, mainstream academic sessions for Nursery and Kindergarten, sports, Bi-annual Summative assessments, Co-Curricular Activities to list a few are accessed free of any remuneration by the unprivileged children irrespective of caste, creed or affiliations from Smiling Stars English Preschool, which operates in the slums out of a rented premises",
      },
    ],
  },
  {
    Tag: "Summer Camps",
    impact:
      "300 Students directly benefitted through the sessions and learned basic reading, writing and arithmetic skills",
    infor: [
      {
        label: "Problem",
        information:
          "Children from migrant footloose dailywage families living in slum pockets of rural and hard-to-reach areas are often engaged in anti-social activities or spend their childhood in playing around or accompanying their parents to work, at times even engaged in child labor, since they lack basic educational facilities and also unaffordable to attend mainstream preschools, thereby lacking basic education, a stepping platform to formal education",
      },
      {
        label: "Solution",
        information:
          "Mainstream Quality Kindergarten English education, school supplies, uniforms, books, stationary, bags, nutrition, health screenings, celebrations of all major events and festivals, mainstream academic sessions for Nursery and Kindergarten, sports, Bi-annual Summative assessments, Co-Curricular Activities to list a few are accessed free of any remuneration by the unprivileged children irrespective of caste, creed or affiliations from Smiling Stars English Preschool, which operates in the slums out of a rented premises",
      },
    ],
  },
  {
    Tag: "Value Education",
    impact:
      "300 Students directly benefitted through the sessions and learned basic reading, writing and arithmetic skills",
    infor: [
      {
        label: "Problem",
        information:
          "Children from migrant footloose dailywage families living in slum pockets of rural and hard-to-reach areas are often engaged in anti-social activities or spend their childhood in playing around or accompanying their parents to work, at times even engaged in child labor, since they lack basic educational facilities and also unaffordable to attend mainstream preschools, thereby lacking basic education, a stepping platform to formal education",
      },
      {
        label: "Solution",
        information:
          "Mainstream Quality Kindergarten English education, school supplies, uniforms, books, stationary, bags, nutrition, health screenings, celebrations of all major events and festivals, mainstream academic sessions for Nursery and Kindergarten, sports, Bi-annual Summative assessments, Co-Curricular Activities to list a few are accessed free of any remuneration by the unprivileged children irrespective of caste, creed or affiliations from Smiling Stars English Preschool, which operates in the slums out of a rented premises",
      },
    ],
  },
];
export const Education = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className=" outer____div">
        <div className=" d-none d-md-block  outermost_div">
          <div>
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
                      <Typography className={classes.text}>
                        {item.Tag}
                      </Typography>

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
                        className="btn mt-3 text-white"
                        style={{ backgroundColor: "#14213d" }}
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
            {Education_data_information.map((education, index) => (
              <div key={index} id={education.Tag.split(" ")[0]}>
                <div className="row ">
                  {index % 2 == 0 ? (
                    <div className="outer__div">
                      <div
                        id={index}
                        className="d-none d-md-block col-md-6 img__div"
                      >
                        <div
                          className="upperDiv"
                          style={{
                            backgroundColor:
                              index % 2 != 0 ? "#E8630A" : "#14213d",
                          }}
                        >
                          {education.impact}
                        </div>
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
                        className="col-12 col-md-6 div_stepper"
                        style={{
                          backgroundColor:
                            index % 2 == 0 ? "#14213d" : "#E8630A ",
                          color: "white",
                        }}
                      >
                        <div className="header_div mb-3 pt-3">
                          <Typography variant="h4">
                            {education.Tag}
                            <h6 className={classes.underlineH6}></h6>
                          </Typography>
                        </div>
                        <VerticalLinearStepper education={education.infor} />
                      </div>
                    </div>
                  ) : (
                    <div className="outer__div">
                      <div
                        className="col-12 col-md-6 div_stepper"
                        style={{
                          backgroundColor:
                            index % 2 == 0 ? "#14213d" : "#E8630A ",
                          color: "white",
                        }}
                      >
                        <div className="header_div mb-3 pt-3">
                          <Typography variant="h4">
                            {education.Tag}
                            <h6 className={classes.underlineH61}></h6>
                          </Typography>
                        </div>
                        <VerticalLinearStepper education={education.infor} />
                      </div>
                      <div className="d-none d-md-block col-md-6 img__div">
                        <div
                          className="upperDiv"
                          style={{
                            backgroundColor:
                              index % 2 != 0 ? "#E8630A" : "#14213d",
                          }}
                        >
                          {education.impact}
                        </div>
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
      </div>
    </>
  );
};
