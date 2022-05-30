import React from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import  Heart from "@material-ui/icons/FavoriteRounded";
import undesa from "../../Shared/images/undesa.png";
import donatejar from "../../Shared/images/hand-holding-jar.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Impact } from "./impacts.js";
import FooterHome from "./FooterHome.js"
import DonateSlide from "./DonateSlide.js"

function Home() {
  const images = [
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      label: "First IMAGe",
      desc: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },

    {
      src: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
      label: "Second IMAGe",
      desc: "https://images.wwfHwwfHw%3D&w=1000&q=80",
    },

    {
      src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      label: "Third IMAGe",
      desc: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
    },
  ];

  return (
    <>
      <Grid container className="container1">
        <Grid item xs={12}>
          <Carousel className="carous">
            {images.map((a) => {
              return (
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100 images"
                    src={a.src}
                    alt={a.label}
                  />
                  <Carousel.Caption>
                    <p>{a.desc}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Grid>
        <Grid item xs={12} lg={5} className="welcomegrid">
          <div className="welcome">
            <h2 className="h2w">Warm Welcome!</h2>
            <hr className="hr1" />
            <p>
              Humbled and Thank you for visiting us virtually. We are a Mumbai
              based Multidisciplinary Charitable non-profit organization
              empowering and impacting unprivileged lives. Vide our thematic
              verticals aligned to the United Nations SDGs 1 to 5, 8 & 17.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} lg={7} className="welcomegrid">
          <div className="vision">
            <h2 className="h2w">
              <b>VISION</b>
            </h2>
            <hr className="hr2" />
            <p>Empowering and Impacting Unprivileged Lives</p>
            <br />
            <h2 className="h2w">
              <b>MISSION</b>
            </h2>{" "}
            <hr className="hr2" />
            <p>
              {" "}
              We have a simple, but robust mission:
              <br />
              “To empower and create impact in the lives of marginalized
              communities.”
              <br />
              “Where there are people in need, we'll be there lending a hand, a
              smile, and an encouraging word.”
            </p>
            <br />
            <h2 className="h2w">
              <b>OUR CORE VALUES</b>
            </h2>
            <hr className="hr2" />
            <h5> “COMMITMENT, TRANSPARENCY, SOCIAL JUSTICE & INTEGRITY”</h5>
          </div>
        </Grid>
      </Grid>

      <Grid container className="container2">
        <Grid item xs={12} md={8} className="spangrid">
          <div className="paper1">
            <Zoom>
              <p className="unsdg">
                DECADES OF HUMANITARIAN SERVICES ALIGNED TO UNITED NATIONS
                Sustainable Development Goals
              </p>
            </Zoom>
          </div>
        </Grid>
        <Grid item xs={12} md={4} className="spangrid">
          <img className="undesa" alt="" src={undesa} />
        </Grid>
      </Grid>

      <Grid container className="container3" justify="center">
        <Grid item xs={1} className="xsgapssdg"></Grid>
        <Grid item xs={4} md={3}>
          {" "}
          <img
            className="goals"
            src="https://sustainabledevelopment.un.org/content/sdgsummit/images/E_SDG%20goals_icons-individual-rgb-01.png"
            alt=""
          />{" "}
        </Grid>
        <Grid item xs={4} md={3}>
          {" "}
          <img
            className="goals"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Sustainable_Development_Goal_2.svg/1200px-Sustainable_Development_Goal_2.svg.png"
            alt=""
          />{" "}
        </Grid>
        <Grid item xs={1} className="xsgapssdg"></Grid>
        <Grid item xs={4} md={3}>
          {" "}
          <img
            className="goals"
            src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Sustainable_Development_Goal_3.png"
            alt=""
          />{" "}
        </Grid>
        <Grid item xs={4} md={3}>
          {" "}
          <img
            className="goals"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Sustainable_Development_Goal_4.png"
            alt=""
          />{" "}
        </Grid>
        <Grid item xs={4} md={3}>
          {" "}
          <img
            className="goals"
            src="https://sustainabledevelopment.un.org/content/sdgsummit/images/E_SDG%20goals_icons-individual-rgb-05.png"
            alt=""
          />{" "}
        </Grid>
        <Grid item xs={4} md={3}>
          {" "}
          <img
            className="goals"
            src="https://www.un.org/esa/ffd/ffddialogue/images/E_SDG%20goals_icons-individual-rgb-08.png"
            alt=""
          />{" "}
        </Grid>
        <Grid item xs={4} md={3}>
          {" "}
          <img
            className="goals"
            src="https://www.un.org/esa/ffd/ffddialogue/images/E_SDG%20goals_icons-individual-rgb-17.png"
            alt=""
          />{" "}
        </Grid>
      </Grid>

      <Grid container className="container4" justify="center">
        <Grid item xs="10">
          <h3 className="h3impact">
            Here is the impact <br />
            <Fade left cascade delay={60}>
              <span className="h3">You</span>
            </Fade>
            <br /> created by contributing generously!
          </h3>
        </Grid>

        <Grid item xs={10}>
          <Impact />
        </Grid>
      </Grid>

      <div className="donatediv">
        <img src={donatejar} className="donatebckg"/>
        <p className="donatep">
          Donate now and bring hope to the unprivileged in need.
          <br/>
          <Button variant="contained" color="success" endIcon={<Heart />}>
          DONATE
        </Button>
        </p>
      </div>
      <FooterHome />
    </>
  );
}

export default Home;
