import React from 'react';
import MyCard from './MyCard.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useStyles from './styles.js';
import MainIntro from './MainIntro.js';

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <MainIntro />
        <Container className={classes.cardGrid} maxWidth="md">
          <h1>Projects</h1>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <MyCard
                type="project"
                heading="ClubHouse"
                blog="clubhouse"
                description="An insightful club management and analytics platform"
                link="https://club-house-sad.herokuapp.com"
                image="/images/clubhouse.png" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <MyCard
                type="project"
                heading="Security Camera"
                blog="security-camera"
                description="I created a video stream to secure my front door"
                image="/images/securityCam.png"
              />
            </Grid>
          </Grid>

          <h1>Experience</h1>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <MyCard
                type="experience"
                link="https://www.cirrascale.com"
                blog="cirrascale"
                heading="Cirrascale"
                description="I was a software intern at Cirrascale Cloud Services."
                image="/images/cirrascale.png"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <MyCard
                type="experience"
                link="https://www.sdsc.edu"
                blog="sdsc"
                heading="San Diego Supercomputer Center"
                image="/images/sdsc.png"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <MyCard
                type="experience"
                link="https://cse.ucsd.edu/undergraduate/undergraduate-tutors"
                blog="tutoring"
                heading="Tutoring"
                image="/images/tutoring.png"
              />
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
