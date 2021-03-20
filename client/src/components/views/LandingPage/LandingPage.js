import React from "react";
// import { Button } from "@material-ui/core";
import { Button } from "semantic-ui-react";
const LandingPage = () => {
  return (
    <>
      <div className="app">
        {/* <Button /> */}
        <Button>Click Here</Button>
        <span style={{ fontSize: "2rem" }}>Budgeting Dashboard </span>
      </div>
    </>
  );
};

export default LandingPage;
