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
import Suit from "../components/suit";
import Suit1 from "../components/suit1";
import Suit2 from "../components/suit2";
import Suit3 from "../components/suit3";
import Sidebar from "../components/layout/sidebar/options";
import "../assets/css/main_style.scss";

function Options(props) {
  const SwitchSuit = () => {
    switch (props.cat) {
      case 1:
        return <Suit />;
        break;
      case 2:
        return <Suit1 />;
        break;
      case 3:
        return <Suit2 />;
        break;
      case 4:
        return <Suit3 />;
        break;

      default:
        return <Suit />;
        break;
    }
  };
  return (
    <div className="DesignScreen">
      <Sidebar setPrice={(e)=>props.setPrice(e)} />
      <Box className="MainBody">{SwitchSuit()}</Box>
    </div>
  );
}

export default Options;
