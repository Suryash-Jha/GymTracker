import { Box, FormLabel, Grid, Input, Snackbar } from "@mui/joy";
import { FormControl } from "@mui/material";
import React, { useState } from "react";
import PdfUploader from "../components/FileUpload";

const WeeklySchedulerForm = () => {
  const [openSnack, setOpenSnack] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <Box
      sx={{
        background: "#f7cea4",
        p: 2,
        height: {
          xs: "164vh",
          md: "98vh",
          lg: "90vh",
        },
        borderRadius: "5vh",
      }}
    >
      <form onSubmit={handleFormSubmit}>
        <Grid container xs={12} md={12} lg={12}>
          <Grid xs={12} md={12} lg={12}>
            <FormControl
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <FormLabel>Workout Days/Week: </FormLabel>
              <Input
                type="number"
                defaultValue={6}
                slotProps={{
                  input: {
                    min: 3,
                    max: 6,
                  },
                }}
                autoFocus
                required
              />
            </FormControl>
            <FormControl
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <FormLabel>Monday:</FormLabel>
              <Input autoFocus required />
            </FormControl>
          </Grid>
          <Grid xs={12} md={12} lg={12}>
            <FormControl>
              <FormLabel>Exercise Name: (Will be a dropdown)</FormLabel>
              <Input autoFocus required />
            </FormControl>
          </Grid>
        </Grid>
        <PdfUploader />
      </form>
      <Snackbar
        autoHideDuration={2000}
        open={openSnack}
        variant={"solid"}
        color={"danger"}
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            return;
          }
          setOpenSnack(false);
        }}
      >
        snackbar with color.
      </Snackbar>
    </Box>
  );
};

export default WeeklySchedulerForm;
