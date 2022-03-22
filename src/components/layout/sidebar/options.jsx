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

export default function NestedList(props) {
  const [leather, setLeather] = React.useState(false);
  const [stretch, setStretch] = React.useState(false);
  const [protection, setProtection] = React.useState(false);
  const [hump, setHump] = React.useState(false);
  const [perforation, setPerforation] = React.useState(false);
  const [gear, setGear] = React.useState(false);
  const [additional, setAdditional] = React.useState(false);
  const [totalPrice, setTotalPrice] = React.useState(449);
  const [selectedOption, setSelectedOption] = React.useState([]);
  const [checked, setChecked] = React.useState({
    leather: false,
    stretch: false,
    protection: false,
    hump: false,
    perforation: false,
    gear: false,
    additional: false,
    totalPrice: false,
  });

  React.useEffect(() => {
    props.setPrice(totalPrice)
    props.getOptions(selectedOption)
  }, [totalPrice,selectedOption]);

  const handleCheckbox = (event, key) => {
    let items = checked;
    switch (key) {
      case "leather":
        setChecked({
          leather: event.target.checked,
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
      | LEATHER
      |--------------------------------------------------
      */}
        <ListItemButton
          selected={leather}
          onClick={() => {
            if (leather == true) {
              setLeather(false);
              setStretch(false);
              setProtection(false);
              setHump(false);
              setGear(false);
              setAdditional(false);
              setPerforation(false);
            } else {
              setLeather(true);
              setStretch(false);
              setProtection(false);
              setHump(false);
              setGear(false);
              setAdditional(false);
              setPerforation(false);
            }
          }}
        >
          <ListItemText primary="Leather" />
          {leather ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={leather} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("tip_shine_leather")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={0}
                title="tip_shine_leather"
              >
                Tip-Shine Leather ($0.00)
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("monaco_leather")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={99}
                title="monaco_leather"
              >
                Monaco Leather ($99.00)
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("kangaroo_leather")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={400}
                title="kangaroo_leather"
              >
                Kangaroo Leather ($400.00)
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("cowhide_leather")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={0}
                title="cowhide_leather"
              >
                Cowhide Leather ($0.00)
              </SelectedItem>
            </ListItemButton>
          </List>
        </Collapse>
        {/*
        |--------------------------------------------------
        | STRETCH
        |--------------------------------------------------
        */}
        <ListItemButton
          selected={stretch}
          onClick={() => {
            if (stretch == true) {
              setLeather(false);
              setStretch(false);
              setProtection(false);
              setHump(false);
              setGear(false);
              setAdditional(false);
              setPerforation(false);
            } else {
              setLeather(false);
              setStretch(true);
              setProtection(false);
              setHump(false);
              setGear(false);
              setAdditional(false);
              setPerforation(false);
            }
          }}
        >
          <ListItemText primary="Stretch" />
          {stretch ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={stretch} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("Schoeller®_Keprotec_510")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={0}
                title="Schoeller®_Keprotec_510"
              >
                Schoeller®-Keprotec 510 gsm
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              Schoeller®-Keprotec 390 gsm
            </ListItemButton>
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
              setLeather(false);
              setStretch(false);
              setProtection(false);
              setHump(false);
              setGear(false);
              setAdditional(false);
              setPerforation(false);
            } else {
              setLeather(false);
              setStretch(false);
              setProtection(true);
              setHump(false);
              setGear(false);
              setAdditional(false);
              setPerforation(false);
            }
          }}
        >
          <ListItemText primary="External Protection" />
          {protection ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={protection} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("carbon_reinforced_metal_armour")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={0}
                title="carbon_reinforced_metal_armour"
              >
                Carbon Reinforced Metal Armour ($0.00)
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("TPU_reinforced_titanium_armour")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={0}
                title="TPU_reinforced_titanium_armour"
              >
                TPU reinforced Titanium Armour ($0.00)
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("TPU_reinforced_metal_armour")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={0}
                title="TPU_reinforced_metal_armour"
              >
                TPU reinforced Metal Armour ($0.00)
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("TCarbon_reinforced_titanium_armour")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={0}
                title="TCarbon_reinforced_titanium_armour"
              >
                TCarbon Reinforced Titanium Armour ($0.00)
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("No_external_protection")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={0}
                title="No_external_protection"
              >
                No External Protection ($0.00)
              </SelectedItem>
            </ListItemButton>
          </List>
        </Collapse>

        {/*
        |--------------------------------------------------
        | HUMP
        |--------------------------------------------------
        */}
        <ListItemButton
          selected={hump}
          onClick={() => {
            if (hump == true) {
              setLeather(false);
              setStretch(false);
              setProtection(false);
              setHump(false);
              setGear(false);
              setAdditional(false);
              setPerforation(false);
            } else {
              setLeather(false);
              setStretch(false);
              setProtection(false);
              setHump(true);
              setGear(false);
              setAdditional(false);
              setPerforation(false);
            }
          }}
        >
          <ListItemText primary="Hump" />
          {hump ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={hump} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("Hydro_Hump")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={50}
                title="Hydro_Hump"
              >
                Hydro Hump ($50.00)
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("Ventilated_Hump")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={35}
                title="Ventilated_Hump"
              >
                Ventilated Hump ($35.00)
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("Standard_Hump")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={0}
                title="Standard_Hump"
              >
                Standard Hump ($0.00)
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("No_Hump")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={0}
                title="No_Hump"
              >
                No Hump ($0.00)
              </SelectedItem>
            </ListItemButton>
          </List>
        </Collapse>
        {/*
        |--------------------------------------------------
        | PERFORATION
        |--------------------------------------------------
        */}
        <ListItemButton
          selected={perforation}
          onClick={() => {
            if (perforation == true) {
              setLeather(false);
              setStretch(false);
              setProtection(false);
              setHump(false);
              setGear(false);
              setAdditional(false);
              setPerforation(false);
            } else {
              setLeather(false);
              setStretch(false);
              setProtection(false);
              setHump(false);
              setGear(false);
              setAdditional(false);
              setPerforation(true);
            }
          }}
        >
          <ListItemText primary="Perforation" />
          {perforation ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={perforation} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("Full_Perforated")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={20}
                title="Full_Perforated"
              >
                Full Perforated ($20.00)
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("Perforated_Front")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={35}
                title="Perforated_Front"
              >
                Perforated Front ($35.00)
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("Perforated_Chest")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={0}
                title="Perforated_Chest"
              >
                Perforated Chest ($0.00)
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("No_Perforation")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={0}
                title="No_Perforation"
              >
                No Perforation ($0.00)
              </SelectedItem>
            </ListItemButton>
          </List>
        </Collapse>
        {/*
        |--------------------------------------------------
        | MATCHING GEAR
        |--------------------------------------------------
        */}
        <ListItemButton
          selected={gear}
          onClick={() => {
            if (gear == true) {
              setLeather(false);
              setStretch(false);
              setProtection(false);
              setHump(false);
              setGear(false);
              setAdditional(false);
              setPerforation(false);
            } else {
              setLeather(false);
              setStretch(false);
              setProtection(false);
              setHump(false);
              setGear(true);
              setAdditional(false);
              setPerforation(false);
            }
          }}
        >
          <ListItemText primary="Matching Gear" />
          {perforation ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={gear} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("Matching_Boots")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={250}
                title="Matching_Boots"
              >
                Matching Boots ($250.00)
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("Matching_Gloves")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={150}
                title="Matching_Gloves"
              >
                Matching Gloves ($150.00)
              </SelectedItem>
            </ListItemButton>
          </List>
        </Collapse>
        {/*
        |--------------------------------------------------
        | ADDITIONAL FEATURES
        |--------------------------------------------------
        */}
        <ListItemButton
          selected={additional}
          onClick={() => {
            if (additional == true) {
              setLeather(false);
              setStretch(false);
              setProtection(false);
              setHump(false);
              setGear(false);
              setAdditional(false);
              setPerforation(false);
            } else {
              setLeather(false);
              setStretch(false);
              setProtection(false);
              setHump(false);
              setGear(false);
              setAdditional(true);
              setPerforation(false);
            }
          }}
        >
          <ListItemText primary="Additional Features" />
          {additional ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={additional} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("Cable_or_Hose_Pass_Through_Wrist_Cuff")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={0}
                title="Cable_or_Hose_Pass_Through_Wrist_Cuff"
              >
                Cable or Hose Pass Through Wrist Cuff ($0.00)
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("Cable_or_Hose_Pass_Through_hump")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={0}
                title="Cable_or_Hose_Pass_Through_hump"
              >
                Cable or Hose Pass Through hump ($0.00)
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("Removable_Mesh_Lining")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={0}
                title="Removable_Mesh_Lining"
              >
                Removable Mesh Lining ($0.00)
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("Silicon_Grip_Bands_at_Base_of_Leg")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={0}
                title="Silicon_Grip_Bands_at_Base_of_Leg"
              >
                Silicon Grip Bands at Base of Leg ($0.00)
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("Left_side_inner_Mesh_Chest_Pocket")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={0}
                title="Left_side_inner_Mesh_Chest_Pocket"
              >
                Left side inner Mesh Chest Pocket ($0.00)
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("Bicep_Hip_and_Tail_bone_padding")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={0}
                title="Bicep_Hip_and_Tail_bone_padding"
              >
                Bicep, Hip and Tail bone padding ($0.00)
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("Rider_nameplate_on_inside_of_suit")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={0}
                title="Rider_nameplate_on_inside_of_suit"
              >
                Rider nameplate on inside of suit ($0.00)
              </SelectedItem>
            </ListItemButton>
            <ListItemButton sx={{ pl: 2, pr: 0 }}>
              <SelectedItem
                select={SetValue("Leg_over_boot_Boot_Out")}
                calculateAmount={(amt, opr, title) =>
                  calculateAmount(amt, opr, title)
                }
                amount={0}
                title="Leg_over_boot_Boot_Out"
              >
                Leg over boot "Boot Out" ($0.00)
              </SelectedItem>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
}
