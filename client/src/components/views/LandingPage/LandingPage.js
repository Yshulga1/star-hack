import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

import {
  XYPlot,
  Borders,
  AreaSeries,
  GradientDefs,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
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
      <Grid container>
        <Grid xs={6} sm={3}>
          <p>Votes summary</p>
        </Grid>
        <Grid xs={6} sm={3}>
          <p>19,005 Votes over past 30 days</p>
        </Grid>
      </Grid>

      <p>Votes summary</p>

      <p>100,054 Votes this year</p>
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
          <Paper className={classes.paper}>
            Top Voited Ideas
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Abbey library" secondary=" 2014" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Road restoration" secondary="302" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Chirch renovating" secondary="156" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            Compare projects
            <RadialChart data={myData} width={300} height={300} />
            The most voted projects is <bold>Abbey library</bold>
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
