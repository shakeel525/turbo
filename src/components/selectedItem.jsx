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
import DoneIcon from "@mui/icons-material/CheckCircle";
import "../assets/css/main_style.scss";
import CircleIcon from '@mui/icons-material/Circle';

function SelectedItem(props) {
  const [select, setSelect] = React.useState(props.select?true:false);

  return (
    <div style={{ display: "flex", alignItems: "center" }} onClick={()=>{
        setSelect(!select);
        props.calculateAmount(props.amount,select?"-":"+",props.title)
    }}>
      {select ? (
        <DoneIcon style={{ color: "#da2a31" }} />
      ) : (
        <CircleIcon style={{ color: "#da2a31" }} />
      )}

      {props.children}
    </div>
  );
}

export default SelectedItem;
