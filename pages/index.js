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
  const moonLandings = [
    new Date('September 22, 2021 18:00:00 GMT-05:00'),
  ];

  const moonLanding = moonLandings[moonLandings.length - 1];
  const now = new Date();
  const days = Math.floor((now.getTime() - moonLanding.getTime()) / 86400000);
  
  const allMoonLandings = moonLandings.map(date => <Typography align="center">{date.toString()}<br/></Typography>);

  return (
    <Container maxWidth="md">
      <Box borderColor="#bc4a3c" border={3} my={4} p={3}>
        <Box bgcolor="#bc4a3c"><Typography className={classes.white} variant={matches ? "h1" : "h3"}align="center" >SAFETY FIRST</Typography></Box>
        <Typography align="center" className={matches ? classes.days : classes.daySmall}>{days} Days</Typography>
        <Typography align="center" variant="h4">Time Since Last Incident at Masseh</Typography>
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
      <Typography align="center">4am? bruh</Typography>
      <br></br>
      <Typography align="center">Incident History</Typography>
      {allMoonLandings}
    </Container>
  );
}
