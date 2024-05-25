import { Box, FormLabel, Grid, Input } from "@mui/joy";
import { FormControl } from "@mui/material";
import React from "react";

const WeeklySchedulerForm = () => {
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
      <form onSumbit={handleFormSubmit}>
        <Grid container xs={12} md={12} lg={12}>
          <Grid xs={12} md={12} lg={12}>
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
      </form>
    </Box>
  );
};

export default WeeklySchedulerForm;
