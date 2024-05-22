import { Button, Grid, Typography, Box } from '@mui/joy'
import React from 'react'
import IconXContentCard from '../components/IconXContentCard'
import { useEffect, useState } from 'react';
import Add from '@mui/icons-material/Add';
import UploadExerciseModal from '../components/UploadExerciseModal';
import { postExerciseData, getOverallData } from '../actions/MainAction';
import firebase from 'firebase/compat/app';

// import RepeatIcon from '@material-ui/icons/Repeat';

const HomePage = () => {
    const [data, setData] = useState([])
    const [openModal, setOpenModal] = useState(false);
    const [exerciseName, setExerciseName] = useState('');
    const [reps, setReps] = useState(0);
    const [weightLifted, setWeightLifted] = useState(0);

    const fetchOverallData =  () => {
         getOverallData().then(querySnapshot =>
            setData(querySnapshot)
        )
    }
    useEffect(() => {
        fetchOverallData()
    }, [])
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const body = {
            exerciseName,
            reps,
            weightLifted
        }
        await postExerciseData(body)
        console.log('form submitted')
        setOpenModal(!openModal)
        fetchOverallData()
    }
    console.log(data.totalReps, 'data')
    return (
        <Box sx={{
            background: '#f7cea4',
            p: 2,
            height: {
                xs: '164vh',
                md: '98vh',
                lg: '90vh'
            },
            borderRadius: '5vh'
        }}>
            {data ? (
                <Grid container xs={12} md={12} lg={12}>
                <Grid xs={12} md={12} lg={12} sx={{display: 'flex', justifyContent: 'flex-end'}}>

                    <Button
                        variant="solid"
                        color="primary"
                        startIcon={<Add />}
                        onClick={() => setOpenModal(true)}
                    >
                        Add Exercise
                    </Button>
                    </Grid>
                    <Grid xs={12} md={12} lg={12}>
                        <Typography sx={{ fontSize: '5vh' }}>Overall Stats</Typography>
                    </Grid>

                    <Grid xs={12} md={6} lg={3}>

                        <IconXContentCard
                            Logo="https://via.placeholder.com/150"
                            Title="Total Steps"
                            Value={data.totalSteps}

                        />
                    </Grid>
                    <Grid xs={12} md={6} lg={3}>

                        <IconXContentCard
                            Logo="https://via.placeholder.com/150"
                            Title="Total Reps Performed"
                            Value={data.totalReps}
                        />
                    </Grid>
                    <Grid xs={12} md={6} lg={3}>

                        <IconXContentCard

                            Logo="https://via.placeholder.com/150"
                            Title="Total Sets Performed"
                            Value={data.totalSets}
                        />
                    </Grid>
                    <Grid xs={12} md={6} lg={3}>

                        <IconXContentCard

                            Logo="https://via.placeholder.com/150"
                            Title="Weight Growth"
                            Value={`${data.currentWeight - data.initialWeight} KGs `}
                            ColorX={data.currentWeight - data.initialWeight > 0 ? "#00ff00" : "#c51c1c"}
                        />
                    </Grid>
                    <Grid xs={12} md={12} lg={12}>
                        <Typography sx={{ fontSize: '5vh' }}>Today's Stats</Typography>
                    </Grid>

                    <Grid xs={12} md={6} lg={3}>

                        <IconXContentCard
                            Logo="https://via.placeholder.com/150"
                            Title="Total Steps"
                            Value="300"

                        />
                    </Grid>
                    <Grid xs={12} md={6} lg={3}>

                        <IconXContentCard
                            Logo="https://via.placeholder.com/150"
                            Title="Total Reps Performed"
                            Value="300"
                        />
                    </Grid>
                    <Grid xs={12} md={6} lg={3}>

                        <IconXContentCard
                            Logo="https://via.placeholder.com/150"
                            Title="Total Reps Performed"
                            Value="300"
                        />
                    </Grid>
                    <Grid xs={12} md={6} lg={3}>

                        <IconXContentCard

                            Logo="https://via.placeholder.com/150"
                            Title="Total Sets Performed"
                            Value="300"
                            ColorX="#0f0f00"
                        />
                    </Grid>
                </Grid>


            ) : <Typography>Loading...</Typography>}
            <UploadExerciseModal
                openModal={openModal}
                setOpenModal={setOpenModal}
                handleFormSubmit={handleFormSubmit}
                exerciseName={exerciseName}
                setExerciseName={setExerciseName}
                reps={reps}
                setReps={setReps}
                weightLifted={weightLifted}
                setWeightLifted={setWeightLifted}

            />
            

        </Box>

    )
}

export default HomePage