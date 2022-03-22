import * as React from "react";
import {
  Box,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Button,
  MobileStepper,
} from "@mui/material";
import SuitCategory from "../components/suitCategory";
import "../assets/css/main_style.scss";
import suit_design1 from "../assets/image/suit_design1.png";
import suit_design2 from "../assets/image/suit_design2.png";
import suit_design3 from "../assets/image/suit_design3.png";
import suit_design4 from "../assets/image/suit_design4.png";

function Category(props) {
  const [select, setSelect] = React.useState({index:1});

  const SelectTrue = (ar) => {
    setSelect(ar);
    props.getCat(ar);
  };
  return (
    <div className="DesignScreen">
      <Box className="MainBody">
        <Grid container spacing={2}>
          <Grid
            onClick={() => SelectTrue({ index: 1 })}
            item
            xs={3}
          >
            <SuitCategory price={"$1,499.00"} name="WHIZ TECH"
              select={select.index == 1 ? true : false}
              imageName={suit_design1}
            />
          </Grid>
          <Grid
            onClick={() => SelectTrue({ index: 2 })}
            item
            xs={3}
          >
            <SuitCategory price={"$1,199.00"} name="SAVITAR PRO"
              select={select.index == 2 ? true : false}
              imageName={suit_design2}
            />
          </Grid>
          <Grid
            onClick={() => SelectTrue({ index: 3 })}
            item
            xs={3}
          >
            <SuitCategory price={"$999.00"} name="VETERAN"
              select={select.index == 3 ? true : false}
              imageName={suit_design3}
            />
          </Grid>
          <Grid
            onClick={() => SelectTrue({ index: 4 })}
            item
            xs={3}
          >
            <SuitCategory price={"$799.00"} name="TYRO"
              select={select.index == 4 ? true : false}
              imageName={suit_design4}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Category;
