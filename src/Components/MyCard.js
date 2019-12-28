import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles.js';

const MyCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        title={props.heading}
        style={{ textAlign: "center" }}
        titleTypographyProps={{ variant: 'h3' }}
      />
      <CardMedia
        className={classes.cardMedia}
        title={props.heading}
        style={{
          backgroundImage: `url('${props.image}')`,
          backgroundSize: "contain",
          backgroundAttachment: "local"
        }} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <a href={props.link}>
              <Button
                variant="outlined"
                size="small"
                color="primary">
                View {props.type === "project" ? "Project" : "Link"}
              </Button>
            </a>
          </Grid>
          <Grid item>
            <a href={"/blog/" + props.blog}>
              <Button
                variant="outlined"
                size="small"
                color="secondary">
                View post
              </Button>
            </a>
          </Grid>
        </Grid>


      </CardActions>
    </Card>
  );
}
export default MyCard;