import React from 'react';
import { Image, Row, Col } from "react-bootstrap";
import Typography from '@material-ui/core/Typography';
import useStyles from './styles.js';

/**
 * The footer should hold all my links and the tools used to create the site
 * TODO: add links
 */
export default function Footer() {

  const classes = useStyles();
  return (
    <React.Fragment>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Social Media
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          <Row>

            {/* Linkedin */}
            <Col xs={6} md={4}>
              <Image
                style={{ width: "50%", position: "left" }}
                src="/images/linkedin-logo.png"
                rounded
                fluid
              />
            </Col>

            {/* Facebook */}
            <Col xs={6} md={4}>
              <Image
                style={{ width: "37%", position: "left" }}
                src="/images/facebook-logo.png"
                rounded
                fluid
              />
            </Col>
          </Row>
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  )
}
