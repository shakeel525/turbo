import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ColorGrid from "../../ColorGrid";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

export default function NestedList(props) {
  const [baseColor, setBaseColor] = React.useState(true);
  const [color1, setColor1] = React.useState(false);
  const [color2, setColor2] = React.useState(false);
  const [selectBaseColor, setSelectBaseColor] = React.useState("#1d3170");
  const [selectColor1, setSelectColor1] = React.useState("#ffffff");
  const [selectColor2, setSelectColor2] = React.useState("#ffffff");

  React.useEffect(() => {
    props.getColors([selectBaseColor, selectColor1, selectColor2]);
  }, [selectBaseColor, selectColor1, selectColor2]);

  return (
    <Box className="sidebar">
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Choose Suit Colors
          </ListSubheader>
        }
      >
        {/*
      |--------------------------------------------------
      | BASE COLOR
      |--------------------------------------------------
      */}
        <ListItemButton
          onClick={() => {
            if (baseColor == true) {
              setColor1(false);
              setColor2(false);
              setBaseColor(false);
            } else {
              setBaseColor(true);
              setColor1(false);
              setColor2(false);
            }
          }}
        >
          <ListItemIcon>
            <Box
              className="colorIcon"
              sx={{ backgroundColor: selectBaseColor }}
            ></Box>
          </ListItemIcon>
          <ListItemText primary="Base Color" />
          {baseColor ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={baseColor} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* <ListItemButton sx={{ pl: 4 }}> */}
            <ColorGrid
              setColor={(e) => {
                setSelectBaseColor(e);
                const root = document.documentElement;
                root.style.setProperty("--baseColor", e);
              }}
            />
            {/* </ListItemButton> */}
          </List>
        </Collapse>
        {/*
        |--------------------------------------------------
        | COLOR 1
        |--------------------------------------------------
        */}
        <ListItemButton
          onClick={() => {
            if (color1 == true) {
              setColor2(false);
              setBaseColor(false);
              setColor1(false);
            } else {
              setColor1(true);
              setBaseColor(false);
              setColor2(false);
            }
          }}
        >
          <ListItemIcon>
            <Box
              className="colorIcon"
              sx={{ backgroundColor: selectColor1 }}
            ></Box>
          </ListItemIcon>
          <ListItemText primary="Color1" />
          {color1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={color1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* <ListItemButton sx={{ pl: 4 }}> */}
            <ColorGrid
              setColor={(e) => {
                setSelectColor1(e);
                const root = document.documentElement;
                root.style.setProperty("--color1", e);
              }}
            />
            {/* </ListItemButton> */}
          </List>
        </Collapse>
        {/*
        |--------------------------------------------------
        | COLOR 2
        |--------------------------------------------------
        */}
        <ListItemButton
          onClick={() => {
            if (color2 == true) {
              setColor2(false);
              setBaseColor(false);
              setColor1(false);
            } else {
              setColor2(true);
              setBaseColor(false);
              setColor1(false);
            }
          }}
        >
          <ListItemIcon>
            <Box
              className="colorIcon"
              sx={{ backgroundColor: selectColor2 }}
            ></Box>
          </ListItemIcon>
          <ListItemText primary="Color2" />
          {color2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={color2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* <ListItemButton sx={{ pl: 4 }}> */}
            <ColorGrid
              setColor={(e) => {
                setSelectColor2(e);
                const root = document.documentElement;
                root.style.setProperty("--color2", e);
              }}
            />
            {/* </ListItemButton> */}
          </List>
        </Collapse>
      </List>
    </Box>
  );
}
