import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import { Box, Checkbox } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ColorGrid from "../../ColorGrid";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import SelectedItem from "../../selectedItem";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function NestedList(props) {
  const [branding, setBranding] = React.useState(false);
  const [stretch, setStretch] = React.useState(false);
  const [protection, setProtection] = React.useState(false);
  const [hump, setHump] = React.useState(false);
  const [perforation, setPerforation] = React.useState(false);
  const [gear, setGear] = React.useState(false);
  const [additional, setAdditional] = React.useState(false);
  const [totalPrice, setTotalPrice] = React.useState(props.price);
  const [selectedOption, setSelectedOption] = React.useState([]);
  const [checked, setChecked] = React.useState({
    branding: false,
    stretch: false,
    protection: false,
    hump: false,
    perforation: false,
    gear: false,
    additional: false,
    totalPrice: false,
  });

  React.useEffect(() => {
    console.warn("selectedOption", selectedOption);
    props.getOption(selectedOption)
  }, [selectedOption]);

  const handleCheckbox = (event, key) => {
    let items = checked;
    switch (key) {
      case "branding":
        setChecked({
          branding: event.target.checked,
          stretch: false,
          protection: false,
          hump: false,
          perforation: false,
          gear: false,
          additional: false,
          totalPrice: false,
        });
        break;

      default:
        break;
    }
    console.warn(items);
    console.warn(event.target.checked);
  };

  const calculateAmount = (amt, opr, title) => {
    var tmp = totalPrice;
    if (opr == "-" && totalPrice > 0) {
      tmp -= amt;
      setTotalPrice(tmp);

      var temp = selectedOption.filter((e, i) => {
        if (e != title) {
          return e;
        }
      });
      setSelectedOption(temp);
    } else if (opr == "+") {
      tmp += amt;
      setTotalPrice(tmp);
      var temp = [...selectedOption, title];
      setSelectedOption(temp);
    }
  };

  const SetValue = (title) => {
    var temp = selectedOption.filter((e, i) => {
      if (e == title) {
        return e;
      }
    });
    return temp.length > 0 ? true : false;
  };

  return (
    <Box className="sidebar">
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <>
            <ListSubheader component="div" id="nested-list-subheader">
              <span className="priceText">TOTAL PRICE: ${totalPrice}</span>
            </ListSubheader>
            <ListSubheader component="div" id="nested-list-subheader">
              Choose Options
            </ListSubheader>
          </>
        }
      >
        {/*
      |--------------------------------------------------
      | branding
      |--------------------------------------------------
      */}
        <ListItemButton
          selected={branding}
          onClick={() => {
            if (branding == true) {
              setBranding(false);
              setStretch(false);
              setProtection(false);
              setHump(false);
              setGear(false);
              setAdditional(false);
              setPerforation(false);
            } else {
              setBranding(true);
              setStretch(false);
              setProtection(false);
              setHump(false);
              setGear(false);
              setAdditional(false);
              setPerforation(false);
            }
          }}
        >
          <ListItemText primary="Branding Type" />
          {branding ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={branding} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("printed")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={99}
                title="printed"
              >
                Printed ($99.00)
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("branding_patch")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={250}
                title="monaco_branding"
              >
                branding Patch ($250.00)
              </SelectedItem>
            </ListItemButton>
          </List>
        </Collapse>
        {/*
        |--------------------------------------------------
        | Logo
        |--------------------------------------------------
        */}
        <ListItemButton
          selected={stretch}
          onClick={() => {
            if (stretch == true) {
              setBranding(false);
              setStretch(false);
              setProtection(false);
              setHump(false);
              setGear(false);
              setAdditional(false);
              setPerforation(false);
            } else {
              setBranding(false);
              setStretch(true);
              setProtection(false);
              setHump(false);
              setGear(false);
              setAdditional(false);
              setPerforation(false);
            }
          }}
        >
          <ListItemText primary="Logo" />
          {stretch ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse
          in={stretch}
          timeout="auto"
          unmountOnExit
          style={{ background: "#f4f4f4", padding: "5px" }}
        >
          <List component="div" disablePadding>
            <div style={{ marginLeft: "25px" }}>
              <span>Send you logos </span>
              <a href="mailto:support@turboracegear.com">
                support@turboracegear.com
              </a>
            </div>
          </List>
        </Collapse>
        {/*
        |--------------------------------------------------
        | EXTERNAL PROTECTION
        |--------------------------------------------------
        */}
        <ListItemButton
          selected={protection}
          onClick={() => {
            if (protection == true) {
              setBranding(false);
              setStretch(false);
              setProtection(false);
              setHump(false);
              setGear(false);
              setAdditional(false);
              setPerforation(false);
            } else {
              setBranding(false);
              setStretch(false);
              setProtection(true);
              setHump(false);
              setGear(false);
              setAdditional(false);
              setPerforation(false);
            }
          }}
        >
          <ListItemText primary="Fitting & Sizing" />
          {protection ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={protection} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <div className="custom_tab">
              

              <span>Man</span>
              <input type="radio" name="fitting" />
              <span>Woman</span>
              <input type="radio" name="fitting" />
              <br />
              <br />
              
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem value={32}>32</MenuItem>
                  <MenuItem value={34}>34</MenuItem>
                  <MenuItem value={36}>36</MenuItem>
                  <MenuItem value={36}>36</MenuItem>
                  <MenuItem value={38}>38</MenuItem>
                  <MenuItem value={40}>40</MenuItem>
                  <MenuItem value={42}>42</MenuItem>
                  <MenuItem value={44}>44</MenuItem>
                  <MenuItem value={46}>46</MenuItem>
                  <MenuItem value={48}>48</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                </Select>
              </FormControl>
            </div>
          </List>
        </Collapse>

      
       
      </List>
    </Box>
  );
}
