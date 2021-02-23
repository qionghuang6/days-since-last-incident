import React from 'react';
import { Container, Typography, Box, makeStyles, Grid } from '@material-ui/core'
import Image from 'next/image';

const useStyles = makeStyles({
  days: {
    fontSize: "160px",
    fontFamily: ["Courier New", 'monospace'],
  },
  white:{
    color: "white",
  }
});

export default function Index() {
  const classes = useStyles();
  const days = 0;
  return (
    <Container maxWidth="md">
      <Box borderColor="#d68145" border={3} my={4} p={3}>
        <Box bgcolor="#d68145"><Typography className={classes.white} align="center" variant="h1">SAFETY FIRST</Typography></Box>
        <Typography align="center" className={classes.days}>{days} Days</Typography>
        <Typography align="center" variant="h4">Time Since Last Incident at New Vassar</Typography>
        <br></br>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
        >
          <Grid item xs={6}>
            <Image src="/vassar.png" alt="new vassar" width="600px" height="420px"/>
          </Grid>
        </Grid>
      </Box>
      <Typography align="center">this website is a joke. plz no more fire alarms i dont wanna be cold</Typography>
    </Container>
  );
}
