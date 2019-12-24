import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from './styles.js';

export default function MainIntro() {
  const classes = useStyles();
  return (
    <div
      className={classes.heroContent}
      style={{ textAlign: "center" }} >
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          James McDougall
        </Typography>

        <img
          src="/images/face.jpeg"
          alt="My Face..."
          width="auto"
          height="500px"
          style={{ textAlign: "center" }} />

        <Typography variant="h4" align="center" color="textSecondary" paragraph>
          I do computery kinds of things.
        </Typography>

        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
                <Button size="large" variant="contained" color="primary">
                  Download my Resume
              </Button>
            </Grid>

            <Grid item>
              <a href="https://linkedin.com/in/james-mcdouga">
                <Button size="large" variant="outlined" color="primary">
                  Check out my Linkedin
              </Button>
              </a>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div >
  );
}