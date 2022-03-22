import React, { Component } from "react";
import "../../../assets/css/main_style.scss";
import { styled } from "@mui/material/styles";
import { Grid, Divider, Box } from "@mui/material";
import Tabs from "../../tabs";
import Switch from "../../switch";
import Search from "../../search";
import Logo from "../../../assets/image/white-logo.png";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <div className="headerBody centerY">
          <Box sx={{ flexGrow: 1, mx: 3 }}>
            <Grid container spacing={2}>
              <Grid item md={3}>
                <div className="d-flex centerY">
                  <img src={Logo} width="150" />
                </div>
              </Grid>
              <Grid item md={9} className="centerY" style={{color:"white"}}></Grid>
            </Grid>
          </Box>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default index;
