import {
  Box,
  FormLabel,
  Grid,
  Input,
  Select,
  Snackbar,
  Option,
  Button,
} from "@mui/joy";
import { FormControl } from "@mui/material";
import { fetchBodyPartList, postBodyPartList } from "../actions/MainAction";
import React, { useState, useEffect } from "react";

const WeeklySchedulerForm = ({ fetch }) => {
  const [openSnack, setOpenSnack] = useState(false);
  const [exerciseList, setExerciseList] = useState([]);
  const [monday, setMonday] = useState("Biceps");
  const [tuesday, setTuesday] = useState("Biceps");
  const [wednesday, setWednesday] = useState("Biceps");
  const [thursday, setThursday] = useState("Biceps");
  const [friday, setFriday] = useState("Biceps");
  const [saturday, setSaturday] = useState("Biceps");
  const [sunday, setSunday] = useState("Biceps");

  useEffect(() => {
    fetchBodyPartList().then((querySnapshot) => {
      const workoutArray = Object.entries(querySnapshot).map(
        ([key, value]) => ({
          key,
          value,
        })
      );
      setExerciseList(workoutArray);
    });
  }, []);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const body = {
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
    };
    await postBodyPartList(body);
    console.log("form submitted", "===> ", body);
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
        display: "flex",
        justifyContent: "center",
        borderRadius: "5vh",
      }}
    >
      <Box
        sx={{
          p: 2,
          height: {
            xs: "164vh",
            md: "98vh",
            lg: "90vh",
          },
          width: {
            xs: "50%",
            md: "50%",
            lg: "50%",
          },
          display: "flex",
          justifyContent: "center",
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
                {/* <FormLabel>Workout Days/Week: </FormLabel>
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
                /> */}
              </FormControl>
              <FormControl
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <FormLabel>Monday:</FormLabel>

                <Select
                  onChange={(e, newVal) => setMonday(newVal)}
                  defaultValue={"Biceps"}
                  required
                >
                  {exerciseList &&
                    exerciseList.map((exercise) => (
                      <Option key={exercise.key} value={exercise.value}>
                        {exercise.value}
                      </Option>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} md={12} lg={12}>
              <FormControl
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {/* <FormLabel>Workout Days/Week: </FormLabel>
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
                /> */}
              </FormControl>
              <FormControl
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <FormLabel>Tuesday:</FormLabel>

                <Select
                  onChange={(e, newVal) => setTuesday(newVal)}
                  defaultValue={"Biceps"}
                  required
                >
                  {exerciseList &&
                    exerciseList.map((exercise) => (
                      <Option key={exercise.key} value={exercise.value}>
                        {exercise.value}
                      </Option>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} md={12} lg={12}>
              <FormControl
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {/* <FormLabel>Workout Days/Week: </FormLabel>
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
                /> */}
              </FormControl>
              <FormControl
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <FormLabel>Wednesday:</FormLabel>

                <Select
                  onChange={(e, newVal) => setWednesday(newVal)}
                  defaultValue={"Biceps"}
                  required
                >
                  {exerciseList &&
                    exerciseList.map((exercise) => (
                      <Option key={exercise.key} value={exercise.value}>
                        {exercise.value}
                      </Option>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} md={12} lg={12}>
              <FormControl
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {/* <FormLabel>Workout Days/Week: </FormLabel>
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
                /> */}
              </FormControl>
              <FormControl
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <FormLabel>Thursday:</FormLabel>

                <Select
                  onChange={(e, newVal) => setThursday(newVal)}
                  defaultValue={"Biceps"}
                  required
                >
                  {exerciseList &&
                    exerciseList.map((exercise) => (
                      <Option key={exercise.key} value={exercise.value}>
                        {exercise.value}
                      </Option>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} md={12} lg={12}>
              <FormControl
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {/* <FormLabel>Workout Days/Week: </FormLabel>
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
                /> */}
              </FormControl>
              <FormControl
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <FormLabel>Friday:</FormLabel>

                <Select
                  onChange={(e, newVal) => setFriday(newVal)}
                  defaultValue={"Biceps"}
                  required
                >
                  {exerciseList &&
                    exerciseList.map((exercise) => (
                      <Option key={exercise.key} value={exercise.value}>
                        {exercise.value}
                      </Option>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} md={12} lg={12}>
              <FormControl
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {/* <FormLabel>Workout Days/Week: </FormLabel>
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
                /> */}
              </FormControl>
              <FormControl
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <FormLabel>Saturday:</FormLabel>

                <Select
                  onChange={(e, newVal) => setSaturday(newVal)}
                  defaultValue={"Biceps"}
                  required
                >
                  {exerciseList &&
                    exerciseList.map((exercise) => (
                      <Option key={exercise.key} value={exercise.value}>
                        {exercise.value}
                      </Option>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} md={12} lg={12}>
              <FormControl
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {/* <FormLabel>Workout Days/Week: </FormLabel>
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
                /> */}
              </FormControl>
              <FormControl
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <FormLabel>Sunday:</FormLabel>

                <Select
                  onChange={(e, newVal) => setSunday(newVal)}
                  defaultValue={"Biceps"}
                  required
                >
                  {exerciseList &&
                    exerciseList.map((exercise) => (
                      <Option key={exercise.key} value={exercise.value}>
                        {exercise.value}
                      </Option>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} md={12} lg={12}>
              <Button type="submit">Submit</Button>
            </Grid>
          </Grid>
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
    </Box>
  );
};

export default WeeklySchedulerForm;
