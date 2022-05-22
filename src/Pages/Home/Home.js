import React from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import Grid from "@material-ui/core/Grid";
import undesa from "../../Shared/images/undesa.png"
import arrowr from "../../Shared/images/Untitled.png"
import arrowl from "../../Shared/images/Untitled2.png"



function Home() {
  const images = [
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      label: "First IMAGe",
      desc: "kuch bhi daal do yaha kya fark padta hai",
    },

    {
      src: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
      label: "Second IMAGe",
      desc: "kuch bhi daal do yaha kya fark padta hai",
    },

    {
      src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      label: "Third IMAGe",
      desc: "kuch bhi daal do yaha kya fark padta hai",
    },
  ];

  return (
    <>
      <Grid container className="container1">
        
        <Grid item xs={12}>
            <Carousel>

            {images.map((a)=>{
              return(
                <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100 images"
                  src={a.src}
                  alt={a.label} />
                <Carousel.Caption>
                  <h3></h3>
                  <p>
                    {a.desc}
                  </p>
                  </Carousel.Caption>
                </Carousel.Item>
                
              )
            })}

            </Carousel>

        </Grid>
        <Grid item xs={12} lg={5} className="welcomegrid">
          <div className="welcome">
            <h2 className="h2w">Warm Welcome!</h2>
            <hr className="hr1" />
            <h4>
              Humbled and Thank you for visiting us virtually. We are a Mumbai
              based Multidisciplinary Charitable non-profit organization
              empowering and impacting unprivileged lives. Vide our thematic
              verticals aligned to the United Nations SDGs 1 to 5, 8 & 17.
            </h4>
          </div>
        </Grid>
        <Grid item xs={12} lg={7} className="welcomegrid">
          <div className="vision">
            <h2>VISION</h2>
            <p>Empowering and Impacting Unprivileged Lives</p><br/>
            <h2>MISSION</h2> 
            <p> We have a simple, but robust mission:<br/>“To empower and create impact in the
            lives of marginalized communities.”<br/>“Where there are people in need,
            we'll be there lending a hand, a smile, and an encouraging word.”</p><br/> 
            <h2>OUR CORE VALUES</h2>
            <h4> “COMMITMENT, TRANSPARENCY, SOCIAL JUSTICE & INTEGRITY”</h4>
          </div>
        </Grid>
      </Grid>
      <Grid container className="container2">
        <Grid item xs={12} md={7} className="spangrid">
          <div className="paper1">
            <p className="unsdg">
              DECADES OF HUMANITARIAN SERVICES ALIGNED TO UNITED NATIONS Sustainable Development Goals
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={5} className="spangrid">
          <img className="undesa" alt="" src={undesa} />
        </Grid>
        
        <Grid item xs={2} md={1}></Grid>
        <Grid item xs={1} md={1}> <img className="goalsa" src={arrowr} alt="" /> </Grid>
        <Grid item xs={3} md={2}> <img className="goals" src="https://sustainabledevelopment.un.org/content/sdgsummit/images/E_SDG%20goals_icons-individual-rgb-01.png" alt="" /> </Grid>
        <Grid item xs={3} md={2}> <img className="goals" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Sustainable_Development_Goal_2.svg/1200px-Sustainable_Development_Goal_2.svg.png" alt="" /> </Grid>
        <Grid item className="xsgapssdg" xs={3}></Grid>
        <Grid item className="xsgapssdg" xs={2}></Grid>
        <Grid item xs={3} md={2}> <img className="goals" src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Sustainable_Development_Goal_3.png" alt="" /> </Grid>
        <Grid item xs={3} md={2}> <img className="goals" src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Sustainable_Development_Goal_4.png" alt="" /> </Grid>
        <Grid item xs={0} md={3}></Grid>
        <Grid item xs={3} md={2}> <img className="goals" src="https://sustainabledevelopment.un.org/content/sdgsummit/images/E_SDG%20goals_icons-individual-rgb-05.png" alt="" /> </Grid>    
        <Grid item className="xsgapssdg" xs={3} md={0}></Grid>
        <Grid item xs={3} md={2}> <img className="goals" src="https://www.un.org/esa/ffd/ffddialogue/images/E_SDG%20goals_icons-individual-rgb-08.png" alt="" /> </Grid>
        <Grid item xs={3} md={2}> <img className="goals" src="https://www.un.org/esa/ffd/ffddialogue/images/E_SDG%20goals_icons-individual-rgb-17.png" alt="" /> </Grid>
        <Grid item xs={1}> <img className="goalsa" src={arrowl} alt="" /> </Grid>
      </Grid>

      <Grid container className="container3" justify="space-around">
        <Grid item xs="10"><h3 className="h3impact">
        Here is the impact <span className="h3">YOU</span> created by contributing generously!
        </h3></Grid>
        <Grid className="impactgrid" item xs={3}>
          <div className="impacts">Education <br/> <br/><span className="impspan">25900+</span></div>
        </Grid>
        <Grid className="impactgrid" item xs={3}>
          <div className="impacts"> Public <br/>Health <br/><br/><span className="impspan">22500+ </span></div>
        </Grid>
        <Grid className="impactgrid" item xs={3}>
          <div className="impacts">Poverty <br/>Alleviation <br/><br/><span className="impspan">16130+</span></div>
        </Grid>
        <Grid item xs="10"><h2 className="h2donate">
        DONATE NOW AND BRING HOPE TO THE UNPRIVILEGED IN NEED
        </h2></Grid>
      </Grid>

    </>
  );
}

export default Home;
