import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  XYPlot,
  Borders,
  AreaSeries,
  GradientDefs,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  VerticalBarSeries,
  MarkSeries,
  LineSeries,
  RadialChart,
} from "react-vis";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const data = [
  { x: 1, y: 10, y0: 1 },
  { x: 2, y: 25, y0: 5 },
  { x: 3, y: 15, y0: 3 },
  { x: 4, y: 1, y0: 10 },
  { x: 5, y: 30, y0: 5 },
  { x: 6, y: 6, y0: 6 },
  { x: 7, y: 30, y0: 7 },
  { x: 8, y: 2, y0: 8 },
  { x: 9, y: 10, y0: 9 },
];

const myData = [{ angle: 1 }, { angle: 5 }, { angle: 2 }];
const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <XYPlot width={1300} height={300}>
        <GradientDefs>
          <linearGradient id="CoolGradient" data={data}>
            <stop offset="0%" stopColor="red" stopOpacity={0.4} />
            <stop offset="100%" stopColor="blue" stopOpacity={0.3} />
          </linearGradient>
        </GradientDefs>
        <VerticalGridLines />
        <HorizontalGridLines />

        <AreaSeries color={"url(#CoolGradient)"} data={data} />
        <Borders
          style={{
            bottom: { fill: "#fff" },
            left: { fill: "url(#CoolGradient)", opacity: 0.3 },
            right: { fill: "#fff" },
            top: { fill: "#fff" },
          }}
        />
        <XAxis />
        <YAxis />
      </XYPlot>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Diagram</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            {" "}
            <RadialChart data={myData} width={300} height={300} />{" "}
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>more data</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>data</Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
