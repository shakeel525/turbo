import * as React from "react";
import { Grid, Box } from "@mui/material";

function ColorGrid(props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Box className="colorIcon" onClick={()=>props.setColor("#000000")} sx={{ backgroundColor: "#000000" }}></Box>
      </Grid>
      <Grid item xs={2}>
        <Box className="colorIcon" onClick={()=>props.setColor("#0bfb0b")} sx={{ backgroundColor: "#0bfb0b" }}></Box>
      </Grid>
      <Grid item xs={2}>
        <Box className="colorIcon" onClick={()=>props.setColor("#c1c1c1")} sx={{ backgroundColor: "#c1c1c1" }}></Box>
      </Grid>
      <Grid item xs={2}>
        <Box className="colorIcon" onClick={()=>props.setColor("#d2ae6d")} sx={{ backgroundColor: "#d2ae6d" }}></Box>
      </Grid>
      <Grid item xs={2}>
        <Box className="colorIcon" onClick={()=>props.setColor("#6b7070")} sx={{ backgroundColor: "#6b7070" }}></Box>
      </Grid>
      <Grid item xs={2}>
        <Box className="colorIcon" onClick={()=>props.setColor("#1d3170")} sx={{ backgroundColor: "#1d3170" }}></Box>
      </Grid>
      <Grid item xs={2}>
        <Box className="colorIcon" onClick={()=>props.setColor("#5fbb47")} sx={{ backgroundColor: "#5fbb47" }}></Box>
      </Grid>
      <Grid item xs={2}>
        <Box className="colorIcon" onClick={()=>props.setColor("#01265d")} sx={{ backgroundColor: "#01265d" }}></Box>
      </Grid>
      <Grid item xs={2}>
        <Box className="colorIcon" onClick={()=>props.setColor("#fa6304")} sx={{ backgroundColor: "#fa6304" }}></Box>
      </Grid>
      <Grid item xs={2}>
        <Box className="colorIcon" onClick={()=>props.setColor("#d3f503")} sx={{ backgroundColor: "#d3f503" }}></Box>
      </Grid>
      <Grid item xs={2}>
        <Box className="colorIcon" onClick={()=>props.setColor("#ff3903")} sx={{ backgroundColor: "#ff3903" }}></Box>
      </Grid>
      <Grid item xs={2}>
        <Box className="colorIcon" onClick={()=>props.setColor("#96989a")} sx={{ backgroundColor: "#96989a" }}></Box>
      </Grid>
      <Grid item xs={2}>
        <Box className="colorIcon" onClick={()=>props.setColor("#ffffff")} sx={{ backgroundColor: "#ffffff" }}></Box>
      </Grid>
      <Grid item xs={2}>
        <Box className="colorIcon" onClick={()=>props.setColor("#ed3237")} sx={{ backgroundColor: "#ed3237" }}></Box>
      </Grid>
      <Grid item xs={2}>
        <Box className="colorIcon" onClick={()=>props.setColor("#3e4095")} sx={{ backgroundColor: "#3e4095" }}></Box>
      </Grid>
      <Grid item xs={2}>
        <Box className="colorIcon" onClick={()=>props.setColor("#00a859")} sx={{ backgroundColor: "#00a859" }}></Box>
      </Grid>
      <Grid item xs={2}>
        <Box className="colorIcon" onClick={()=>props.setColor("#fff212")} sx={{ backgroundColor: "#fff212" }}></Box>
      </Grid>
      <Grid item xs={2}>
        <Box className="colorIcon" onClick={()=>props.setColor("#f1e0a5")} sx={{ backgroundColor: "#f1e0a5" }}></Box>
      </Grid>
      <Grid item xs={2}>
        <Box className="colorIcon" onClick={()=>props.setColor("#00afef")} sx={{ backgroundColor: "#00afef" }}></Box>
      </Grid>
      <Grid item xs={2}>
        <Box className="colorIcon" onClick={()=>props.setColor("#f58634")} sx={{ backgroundColor: "#f58634" }}></Box>
      </Grid>
      <Grid item xs={2}>
        <Box className="colorIcon" onClick={()=>props.setColor("#ff008a")} sx={{ backgroundColor: "#ff008a" }}></Box>
      </Grid>
    </Grid>
  );
}

export default ColorGrid;
