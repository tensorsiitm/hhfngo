import { Typography, makeStyles } from "@material-ui/core";
import pic from "../../Shared/images/montain.jpg";
import VerticalLinearStepper from "../../Components/Stepper/Stepper";
import CastForEducationRoundedIcon from "@material-ui/icons/CastForEducationRounded";
// import LocalHospitalRoundedIcon from "@material-ui/icons/LocalHospitalRoundedIcon";
// import CabinRoundedIcon from "@material-ui/icons/CabinRoundedIcon";
// import LocalPharmacyRoundedIcon from "@material-ui/icons/LocalPharmacyRoundedIcon";
// import CampaignRoundedIcon from "@material-ui/icons/ CampaignRoundedIcon";
// import RiceBowlRoundedIcon from "@material-ui/icons/RiceBowlRoundedIcon";
// import MedicationRoundedIcon from "@material-ui/icons/MedicationRoundedIcon";
// import MedicationLiquidRoundedIcon from "@material-ui/icons/MedicationLiquidRoundedIcon";
// import HealthAndSafetyRoundedIcon from "@material-ui/icons/HealthAndSafetyRoundedIcon";

import "./Public_Health.css";

const useStyles = makeStyles({
  head: {
    color: "#FFF",
    textAlign: "center",
    marginBottom: "10px",
    paddingTop: "10px",
  },
  image: {
    width: "100%",
    fontSize: "150px",
    color: "#fca311",
  },
  text: {
    color: "#48cbff",
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
    backgroundColor: "#48cbff",
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

const Public_data_information = [
  {
    Tag: "Preventive Health Awareness Sessions",
    impact: "350 beneficiaries directly benefitted from the awareness sessions",
    infor: [
      {
        label: "Problem",
        information:
          "Many a times, members of general public especially in rural and semiurban areas are unaware about their health parameters and the way forward in times of medical emergencies leading to falling prey to medical quacks, expensive treatments or face death due to ignorance of basic public health knowledge.",
      },
      {
        label: "Solution",
        information:
          "Free sessions are conducted periodically to generate awareness on general well-being, hygiene, preventive and remedial measures that can be adopted by the beneficiaries in times of medical health emergencies",
      },
    ],
  },
  {
    Tag: "Preventive Health Screening Camps",
    impact:
      "9700+ direct beneficiaries benefitted from the above intervention and lives saved by early detection of underlying health conditions in many beneficiaries",
    infor: [
      {
        label: "Problem",
        information:
          "Many a times, elder members of general public are unaware of their underlying health conditions until symptoms develop at times turning fatal leading to untimely death due to failure of periodical screening basic vital parameters and unavailability of such screening facilities in villages.",
      },
      {
        label: "Solution",
        information:
          "Preventive care includes health services like screenings, check-ups, and patient counseling that are used to prevent illnesses, disease, and other health problems, or to detect illness at an early stage when treatment is likely to work best. These multidisciplinary camps are organized by us free of any remuneration. We are very grateful to our volunteering medics and para-medics to make all camps a success",
      },
    ],
  },
  {
    Tag: "Medical First Aid Stations",
    impact:
      "780+ beneficiaries directly benefitted from the above intervention",
    infor: [
      {
        label: "Problem",
        information:
          "It is has been witnessed by us that religious / public events having more than 500 attendees are often deprived of basic medical first aid to attend casualties and that casualties face great hardship seeking medical first aid during a medical emergency in the said event often held in rural areas.",
      },
      {
        label: "Solution",
        information:
          "The Free Medical First Aid Station is organized and managed by us in partnership with partner organization / on suo-moto basis in co-ordination/intimation with/to government health departments of local area and follows globally recognized principles of medical ethics in rendering emergency first aid services more particularly to the “3P’s OF FIRST AID” including screenings (if necessary) and the right to humanitarian assistance. The team of our organization observes the medical code of conduct and maintains complete freedom from any political, religious or economic power in discharging their duties. These stations are set up temporarily in areas of high public traffic which lacks or has scarce basic medical facilities i.e Melas, Religious gatherings, etc...",
      },
    ],
  },
  {
    Tag: "Medical First Aid Boxes",
    impact:
      "Substantial direct beneficiaries are benefitted from the above intervention and precious lives are saved during a fatal accident, thus avoiding road accident deaths",
    infor: [
      {
        label: "Problem",
        information:
          "Rural Arterial Roads witness higher percentage of fatal and severe accidents due to the over speeding, drink & drive, inexperienced driving costing human limbs and lives, absence of any medical facility 24X7 worsens the situation due to blood losses from open wounds of casualties, thereby causing death on arrival to nearest medical facility at a substantial distance from accident spot",
      },
      {
        label: "Solution",
        information:
          "Free first aid boxes along with public signage are placed, maintained and managed by us at available land marks on arterial roads in rural areas i.e police checkposts, entry/exit gates of villages, etc... these boxes are replenished every quarter by our volunteers with new stock of contents.",
      },
    ],
  },
  {
    Tag: "Medical Aid to Needy",
    impact:
      "03 direct beneficiaries benefitted from the above intervention without worsening of health conditions or increase on dosages",
    infor: [
      {
        label: "Problem",
        information:
          "Elders, bed-ridden, lonely, amputees living in their own comfort zone without any aids find it very hard to sustain themselves every month in terms of their monthly medical needs which worsens their preexisting health conditions due to medicine incompliancy ",
      },
      {
        label: "Solution",
        information:
          "Medical aid to the above mentioned beneficiaries are provided by us every month based on medical prescriptions by their registered medical practitioners which are validated with concerned physician for updation and authenticity ",
      },
    ],
  },
  {
    Tag: "Dispensing of Vitamin “A”",
    impact: " 600 direct beneficiaries benefitted from the above intervention",
    infor: [
      {
        label: "Problem",
        information:
          "62% of children under five suffer from vitamin A deficiency in India, Our bodies rely on vitamin A for many purposes, all of which are essential for regular activities and long-term health. When a child lacks this nutrient during the early stages of development, they can get sick, go blind and even die",
      },
      {
        label: "Solution",
        information:
          "Vitamin “A” donated by Vitamin Angels India is dispensed bi-annually to children below 5 years of age. Details are recorded in Immunization Cards designed by us and presented to parents of the children for records.",
      },
    ],
  },
  {
    Tag: "Nutritious Supplements",
    impact: "750 beneficiaries directly benefitted from above intervention",
    infor: [
      {
        label: "Problem",
        information:
          "Unprivileged children in rural and hard to reach areas do not afford basic meals hence many are malnourished and have symptoms of malnutrition. The prevalence of malnourished children in India is among the highest in the world, with dire consequences for mobility, mortality, productivity and economic growth.",
      },
      {
        label: "Solution",
        information:
          "We aim to tackle malnutrition in our focus area by providing nutritional supplements every month to unprivileged children ",
      },
    ],
  },
  {
    Tag: "Fortified Rice-Dal Meals",
    impact:
      "3000 direct and 18000 Indirect beneficiaries benefitted from above intervention",
    infor: [
      {
        label: "Problem",
        information:
          "815 million people, accounting for 11 percent of the world’s population, suffer from hunger according to a recent report published by the United Nations. Every dehydrated rice/soy meal is fortified with 23 essential vitamins and nutrients. ... The prevalence of malnourished children in India is among the highest in the world, with dire consequences for mobility, mortality, productivity and economic growth",
      },
      {
        label: "Solution",
        information:
          "Nutritious Fortified Meals are provided regularly to unprivileged children and families who do not afford to have nutritious / basic meals, We are very grateful to our partner organization RISE AGAINST HUNGER INDIA who supplies the products to us",
      },
    ],
  },
];
export const Public_Health = (props) => {
  const classes = useStyles();
  const Education_data_ = [
    {
      Problem: "Children from migrant footloose dailywage families ",
      Tag: "Preventive Health Awareness Sessions",
      icon: <CastForEducationRoundedIcon className={classes.image} />,
    },
    {
      Problem: " Children from migrant footloose dailywage families ",
      Tag: "Preventive Health Screening Camps",
      icon: <CastForEducationRoundedIcon className={classes.image} />,
    },
    {
      Problem: "Children from migrant footloose dailywage families ",
      Tag: "Medical First Aid Stations",
      icon: <CastForEducationRoundedIcon className={classes.image} />,
    },
    {
      Problem: "Children from migrant footloose dailywage families",
      Tag: "Medical First Aid Boxes",
      icon: <CastForEducationRoundedIcon className={classes.image} />,
    },
    {
      Problem: "Children from migrant footloose dailywage families",
      Tag: "Medical Aid to Needy",
      icon: <CastForEducationRoundedIcon className={classes.image} />,
    },
    {
      Problem: "Children from migrant footloose dailywage families ",
      Tag: "Dispensing of Vitamin “A”",
      icon: <CastForEducationRoundedIcon className={classes.image} />,
    },
    {
      Problem: "Children from migrant footloose dailywage families ",
      Tag: "Nutritious Supplements",
      icon: <CastForEducationRoundedIcon className={classes.image} />,
    },
    {
      Problem: "Children from migrant footloose dailywage families ",
      Tag: "Fortified Rice-Dal Meals",
      icon: <CastForEducationRoundedIcon className={classes.image} />,
    },
  ];
  return (
    <>
      <div className=" outer____div">
        <div className=" d-none d-md-block  outermost_div p-3">
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
                      {item.icon}
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
                        style={{ backgroundColor: "#48cbff" }}
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
          <div style={{ backgroundColor: "#48cbff" }}>
            <div className="_header text-center pb-3 pt-3">
              <Typography variant="h3">Public Health</Typography>
              <h6 className={classes.underlineH61}></h6>
            </div>
            {Public_data_information.map((education, index) => (
              <div key={index} id={education.Tag.split(" ")[0]}>
                <div className="row">
                  {index % 2 == 0 ? (
                    <div className="outer__div">
                      <div
                        id={index}
                        className="d-none d-md-block col-md-6 img__div"
                      >
                        <div
                          id="carouselExampleIndicators"
                          className="carousel slide"
                          data-bs-ride="carousel"
                          style={{ height: "100%" }}
                        >
                          <div
                            className="carousel-inner product"
                            style={{ height: "100%" }}
                          >
                            <div
                              className="carousel-item active imgbox"
                              style={{ height: "100%" }}
                            >
                              <img
                                src={pic}
                                className="d-block w-100 img__conatainer"
                              />
                            </div>
                            <div
                              className="carousel-item imgbox"
                              style={{ height: "100%" }}
                            >
                              <img
                                src={pic}
                                className="d-block w-100 img__conatainer"
                              />
                            </div>
                            <div
                              className="carousel-item imgbox"
                              style={{ height: "100%" }}
                            >
                              <img
                                src={pic}
                                className="d-block w-100 img__conatainer"
                              />
                            </div>
                            <div
                              className="specifies text-center"
                              style={{
                                backgroundColor: "#48cbff",
                                color: "#fff",
                              }}
                            >
                              <Typography variant="h5">Impact</Typography>
                              <h6 className={classes.underlineH61}></h6>
                              <div>{education.impact}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-12 col-md-6 div_stepper"
                        style={{
                          backgroundColor:
                            index % 2 == 0 ? "#48cbff" : "#E8630A ",
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
                            index % 2 == 0 ? "#48cbff" : "#E8630A ",
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
                          id="carouselExampleIndicators"
                          className="carousel slide"
                          data-bs-ride="carousel"
                          style={{ height: "100%" }}
                        >
                          <div
                            className="carousel-inner product"
                            style={{ height: "100%" }}
                          >
                            <div
                              className="carousel-item active imgbox"
                              style={{ height: "100%" }}
                            >
                              <img
                                src={pic}
                                className="d-block w-100 img__conatainer"
                              />
                            </div>
                            <div
                              className="carousel-item imgbox"
                              style={{ height: "100%" }}
                            >
                              <img
                                src={pic}
                                className="d-block w-100 img__conatainer"
                              />
                            </div>
                            <div
                              className="carousel-item imgbox"
                              style={{ height: "100%" }}
                            >
                              <img
                                src={pic}
                                className="d-block w-100 img__conatainer"
                              />
                            </div>

                            <div
                              className="specifies text-center"
                              style={{
                                backgroundColor: "#E8630A",
                                color: "#fff",
                              }}
                            >
                              <Typography variant="h5">Impact</Typography>
                              <h6 className={classes.underlineH61}></h6>
                              <div>{education.impact}</div>
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
