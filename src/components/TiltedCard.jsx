import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import CircularProgress from "@mui/joy/CircularProgress";
import SvgIcon from "@mui/joy/SvgIcon";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";

const TiltedCard = () => {
  return (
    <div
      style={{
        height: "80vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      }}
    >
      <Card
        variant="solid"
        color="warning"
        sx={{
          height: "70vh",
          width: "79vw",
          rotate: "z 3deg",
          background: "#ead6c1",
          padding: "0rem",
        }}
        invertedColors
      >
        <CardContent orientation="horizontal">
          <Card
            variant="solid"
            color="warning"
            sx={{
              height: "69vh",
              width: "81vw",
              rotate: "z -6deg",
              background: "#f6e9db",
            }}
            invertedColors
          >
            <CardContent orientation="horizontal">
              <CardContent>
                {children}
                {/* <Typography level="body-md">Gross profit</Typography>
                <Typography level="h2">$ 432.6M</Typography> */}
              </CardContent>
            </CardContent>
            <CardActions>
              <Button variant="soft" size="sm">
                Add to Watchlist
              </Button>
              <Button variant="solid" size="sm">
                See breakdown
              </Button>
            </CardActions>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default TiltedCard;
