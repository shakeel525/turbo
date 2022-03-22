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
import Sidebar from "../components/layout/sidebar/personalize";
import "../assets/css/main_style.scss";
import print from "print-html-element";
function Finish(props) {
  React.useEffect(() => {
    // print.printElement( document.getElementById('toPrint') );
    sendMail(props.contactData);
  }, []);

  const sendMail = (data) => {
    fetch("https://turboracegear.com/turbo-mail/",{
      
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        to: data.to,
        subject: "Custom Suit Order",
        msg: `<h1>Customer Name: ${data.name}</h1>`,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.error(responseJson);
      });
  };
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
      {JSON.stringify(props.data)}
      <br />
      <Box className="MainBody" id="toPrint">
        {SwitchSuit()}
      </Box>
    </div>
  );
}

export default Finish;
