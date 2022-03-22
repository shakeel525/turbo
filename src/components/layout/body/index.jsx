import * as React from "react";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  MobileStepper,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Design from "../../../screens/Design";
import Category from "../../../screens/Category";
import Options from "../../../screens/Options";
import Personalize from "../../../screens/Personalize";
import Finish from "../../../screens/Finish";
const steps = ["Design", "Colors", "Options", "Personalize", "Finish"];

export default function HorizontalLabelPositionBelowStepper(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [category, setCategory] = React.useState(1);
  const [price, setPrice] = React.useState(449);
  const [selectedOption, setSelectedOption] = React.useState([]);
  const [selectedPersonalize, setSelectedPersonalize] = React.useState([]);
  const [selectedColors, setSelectedColors] = React.useState([]);

  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((activeStep) => activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep((activeStep) => activeStep - 1);
  };
  const getCat = (e) => {
    setCategory(e.index);
  };
  const wizardScreen = () => {
    switch (activeStep) {
      case 0:
        return (
          <Category
            getCat={(e) => {
              getCat(e);
            }}
          />
        );
        break;
      case 1:
        return (
          <Design getColors={(e) => setSelectedColors(e)} cat={category} />
        );
        break;
      case 2:
        return (
          <Options
            getOptions={(e) => {
              setSelectedOption(e);
            }}
            setPrice={(e) => setPrice(e)}
            cat={category}
          />
        );
        break;
      case 3:
        return (
          <Personalize
            getOptions={(e) => {
              setSelectedPersonalize(e);
            }}
            price={price}
            cat={category}
          />
        );
        break;
      case 4:
        return (
          <Finish
            cat={category}
            contactData={props.contactData}
            data={{
              category: category,
              price: price,
              Option: selectedOption,
              Personalize: selectedPersonalize,
              Colors: selectedColors,
            }}
          />
        );
        break;
      case 5:
        return <h1>{steps[activeStep]}</h1>;
        break;

      default:
        break;
    }
  };

  return (
    <Box className="body" sx={{ width: "100%", position: "relative" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box>{wizardScreen()}</Box>
      <Box className="navigationNextPrev">
        <MobileStepper
          variant="progress"
          steps={steps.length + 1}
          position="static"
          activeStep={activeStep}
          sx={{ maxWidth: 400, flexGrow: 1 }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === 5}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </Box>
  );
}
