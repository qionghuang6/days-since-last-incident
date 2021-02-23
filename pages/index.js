import React from 'react';
import { Container, Typography, Box, makeStyles, Grid, useMediaQuery } from '@material-ui/core'
import Image from 'next/image';

const useStyles = makeStyles({
  days: {
    fontSize: "160px",
    fontFamily: ["Courier New", 'monospace'],
  },
  daySmall: {
    fontSize: "90px",
    fontFamily: ["Courier New", 'monospace'],
  },
  white:{
    color: "white",
  }
});

export default function Index() {
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  const moonLanding = new Date('February 23, 2021 18:00:00 GMT-05:00')
  const now = new Date();
  const days = Math.floor((now.getTime() - moonLanding.getTime()) / 86400000);
  console.log(moonLanding);
  console.log(now)
  return (
    <Container maxWidth="md">
      <Box borderColor="#d68145" border={3} my={4} p={3}>
        <Box bgcolor="#d68145"><Typography className={classes.white} variant={matches ? "h1" : "h3"}align="center" >SAFETY FIRST</Typography></Box>
        <Typography align="center" className={matches ? classes.days : classes.daySmall}>{days} Days</Typography>
        <Typography align="center" variant="h4">Time Since Last Incident at New Vassar</Typography>
        <br></br>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
        >
          <Grid item xs={8}>
            <Image src="/vassar.png" alt="new vassar" width="600px" height="420px"/>
          </Grid>
        </Grid>
      </Box>
      <Typography align="center">this website is a joke. plz no more fire alarms i dont wanna be cold</Typography>
      <br></br>
    </Container>
  );
}
