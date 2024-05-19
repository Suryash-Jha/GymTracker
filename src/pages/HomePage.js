import { Button, Grid, Typography, Box } from '@mui/joy'
import React from 'react'
import IconXContentCard from '../components/IconXContentCard'
import firebase from 'firebase/compat/app';
import { useEffect, useState } from 'react';

const HomePage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const db = firebase.firestore()
        db.collection('OverallStats').get().then(querySnapshot =>
            setData(querySnapshot.docs.map(doc => doc.data()))
        )
        // db.collection('OverallStats').doc("OverallStatStrictVal").set({

        //     totalReps: 50,
        //     initialWeight: 54,
        //     currentWeight: 57,
        //     totalSets: 10,
        //     totalSteps: 200

        // }).then(() => {
        //     console.log("Document successfully written!");
        // })
        //     .catch((error) => {
        //         console.error("Error writing document: ", error);
        //     });
    }, [])
    console.log(data, 'data')
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
            {data && data.length > 0 ? (
                <Grid container xs={12} md={12} lg={12}>
                    <Grid xs={12} md={12} lg={12}>
                        <Typography sx={{ fontSize: '8vh' }} align="center">GYM TRACKER</Typography>
                    </Grid>
                    <Grid xs={12} md={12} lg={12}>
                        <Typography sx={{ fontSize: '6vh' }}>Overall Stats</Typography>
                    </Grid>

                    <Grid xs={12} md={6} lg={3}>

                        <IconXContentCard
                            Logo="https://via.placeholder.com/150"
                            Title="Total Steps"
                            Value={data[0].totalSteps}

                        />
                    </Grid>
                    <Grid xs={12} md={6} lg={3}>

                        <IconXContentCard
                            Logo="https://via.placeholder.com/150"
                            Title="Total Reps Performed"
                            Value={data[0].totalReps}
                        />
                    </Grid>
                    <Grid xs={12} md={6} lg={3}>

                        <IconXContentCard

                            Logo="https://via.placeholder.com/150"
                            Title="Total Sets Performed"
                            Value={data[0].totalSets}
                        />
                    </Grid>
                    <Grid xs={12} md={6} lg={3}>

                        <IconXContentCard

                            Logo="https://via.placeholder.com/150"
                            Title="Weight Growth"
                            Value={`${data[0].currentWeight - data[0].initialWeight} KGs `}
                            ColorX={data[0].currentWeight - data[0].initialWeight > 0 ? "#00ff00" : "#c51c1c"}
                        />
                    </Grid>
                    <Grid xs={12} md={12} lg={12}>
                        <Typography sx={{ fontSize: '6vh' }}>Today's Stats</Typography>
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
        </Box>

    )
}

export default HomePage