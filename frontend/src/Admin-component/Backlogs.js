import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    height: theme.spacing(3),
  },
}));
const PrettoSlider = withStyles({
  root: {
    color: "#add8e6",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid #eeeeee",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
const marks = [
  {
    value: -1,
    label: "Never had a backlog",
  },
  {
    value: 0,
    label: "Currently None",
  },
  {
    value: 1,
    label: "<=1",
  },
  {
    value: 2,
    label: "<=2",
  },
  {
    value: 3,
    label: "<=3",
  },
  {
    value: 4,
    label: "<=4",
  },
  {
    value: 5,
    label: "<=5",
  },
  {
    value: 6,
    label: "<=6",
  },
  {
    value: 7,
    label: "<=6",
  },
  {
    value: 8,
    label: "<=8",
  },
  {
    value: 9,
    label: "<=9",
  },
  {
    value: 10,
    label: "<=10",
  },
  {
    value: 11,
    label: "not applicable",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export function Backlogs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PrettoSlider
        min={-1}
        max={11}
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={1}
        valueLabelDisplay="auto"
      />
    </div>
  );
}
