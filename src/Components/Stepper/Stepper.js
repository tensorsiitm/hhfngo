import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import EmojiObjectsRoundedIcon from "@material-ui/icons/EmojiObjectsRounded";
import KeyboardArrowUpRoundedIcon from "@material-ui/icons/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
];
const useStyles = makeStyles({
  label: {
    color: "white",
  },
});
export default function VerticalLinearStepper(props) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleClick = () => {
    activeStep == 0 ? setActiveStep(1) : setActiveStep(0);
  };
  const classes = useStyles();
  return (
    <Box sx={{ maxWidth: 500 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {props.education.map((step, index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={EmojiObjectsRoundedIcon}>
              <div className={classes.label}>{step.label}</div>
            </StepLabel>
            <StepContent>
              <Typography>{step.information}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleClick}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === 1 ? (
                      <KeyboardArrowUpRoundedIcon />
                    ) : (
                      <KeyboardArrowDownRoundedIcon />
                    )}
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
