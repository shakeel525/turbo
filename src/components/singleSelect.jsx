import * as React from "react";
import MenuList from "@mui/material/MenuList";
import colors from "../assets/css/main_style.scss";
import DownArrow from "../assets/image/down_arrow.svg";
import moment from "moment";
import Selector from "./selector";

export default function ScheduleLayouts(props) {
  const [selectorValue, setSelectorValue] = React.useState(null);

  React.useEffect(() => {
    setScroll("Today")
  }, []);

  const setScroll = (e) => {
    switch (e) {
      case "Today":
        var fulldate = moment().format("DD/MM/YYYY");
        document.getElementById(`bodyBlock_${fulldate}`).scrollIntoView({
          behavior: "smooth",
        });
        break;
      case "This Week":
        var fulldate = moment().clone().startOf("isoWeek").format("DD/MM/YYYY");
        document.getElementById(`bodyBlock_${fulldate}`).scrollIntoView({
          behavior: "smooth",
        });
        break;
      case "This Month":
        var fulldate = moment().startOf("month").format("DD/MM/YYYY");
        document.getElementById(`bodyBlock_${fulldate}`).scrollIntoView({
          behavior: "smooth",
        });
        break;
      case "This Quater":
        var fulldate = moment()
          .quarter(moment().quarter())
          .startOf("quarter")
          .format("DD/MM/YYYY");
        document.getElementById(`bodyBlock_${fulldate}`).scrollIntoView({
          behavior: "smooth",
        });
        break;
      case "Last Week":
        var fulldate = moment()
          .subtract(1, "weeks")
          .startOf("isoWeek")
          .format("DD/MM/YYYY");
        document.getElementById(`bodyBlock_${fulldate}`).scrollIntoView({
          behavior: "smooth",
        });
        break;
      case "Last Month":
        var fulldate = moment().startOf('quarter').format("DD/MM/YYYY");
        document.getElementById(`bodyBlock_${fulldate}`).scrollIntoView({
          behavior: "smooth",
        });
        break;
      case "Last Quater":
        var fulldate = moment().subtract(1, 'quarter').startOf('quarter').format("DD/MM/YYYY");
        document.getElementById(`bodyBlock_${fulldate}`).scrollIntoView({
          behavior: "smooth",
        });
        break;

      default:
        break;
    }
  };
  return (
    <Selector
      options={props.options}
      ticColor={props.ticColor}
      textColor={props.textColor}
      bgColor={props.bgColor}
      SelectedVal={(e) => {
        setSelectorValue(e);
        setScroll(e);
      }}
    >
      {selectorValue ? selectorValue : props.options[0].text}{" "}
      <img src={DownArrow} />
    </Selector>
  );
}
