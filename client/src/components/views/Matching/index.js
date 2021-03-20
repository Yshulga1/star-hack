import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./matching.css";
import city from "../../../assets/Square.png";
import pubTransport from "../../../assets/bus.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Matching = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <h4 className="header" style={{ align: "center" }}>
            Would you rather?
          </h4>
        </Grid>
        <Grid className="numbers" container>
          <Grid item xs={6} sm={3}>
            <div class="grid-card">
              <figure class="effect-layla">
                <img src={pubTransport} alt="img03" />
                <figcaption>
                  <h2>
                    Stadtpolizei <span>St.Gallen </span> Gedanken
                  </h2>
                  <p>Um einerseits den hohen Anteil an parkplatzsuchenden</p>
                  <a href="#">View more</a>
                  <Button size="small" color="primary">
                    Vote
                  </Button>
                </figcaption>
              </figure>
            </div>
          </Grid>
          <button class="button" onClick={() => {}}>
            OR
          </button>
          <Grid item xs={6} sm={3}>
            <div class="grid-card">
              <figure class="effect-layla">
                <img src={city} alt="img06" />
                <figcaption>
                  <h2>
                    Abbey <span>library</span> renovation
                  </h2>
                  <p>When Layla appears, she brings an eternal summer along.</p>
                  <a href="#">View more</a>
                </figcaption>
              </figure>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Matching;
