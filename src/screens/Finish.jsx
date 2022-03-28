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
    //
    sendMail(props.contactData, props.data);
  }, []);

  const sendMail = (contact, data) => {
    fetch("https://turbo-mailer.herokuapp.com/api/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        to: "alirizvi139@gmail.com",
        subject: "Custom Suit Order",
        mail: `
        <p>Name:${contact.name}</p>
        <p>Email:${contact.email}</p>
        <p>Phone:${contact.phone}</p>
        <pre>Data:${JSON.stringify(data)}</pre>
        `,
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
      {/* {JSON.stringify(props.data)} */}
      <br />
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6">
            <h1>
              <b>You almost ready to get start with this amazing custom gear. you can pay initial $100 to start finalizeing design with our design team.</b>
            </h1>
            <div className="d-flex">
              <button
                onClick={() => {
                  sendMail(props.contactData, props.data);
                  print.printElement(document.getElementById("toPrint"));
                }}
                className="btn-red mx-2"
                style={{ marginTop: "50px" }}
              >
                Print $ Submit <br/>Design
              </button>
              <button
                onClick={() => {
                  sendMail(props.contactData, props.data);
                  window.location.href = "https://buy.stripe.com/6oE4kleC216k7S028b";
                }}
                className="btn-red mx-2"
                style={{ marginTop: "50px" }}
              >
                Submit Design <br/>& Pay Securly
              </button>
              
            </div>
          </div>
          <div className="col-sm-6">
            <Box className="MainBody" id="toPrint">
              {SwitchSuit()}
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finish;
