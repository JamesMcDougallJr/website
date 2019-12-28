import React from 'react';
import { Image, Col, Row } from "react-bootstrap";
import Typography from '@material-ui/core/Typography';
import useStyles from './styles.js';
import Copyright from './Copyright.js';

/**
 * The footer should hold all my links and the tools used to create the site
 */
export default function Footer() {
  const classes = useStyles();
  const MD = 4;
  const XS = 2;
  return (
    <React.Fragment>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          <Row style={{ paddingBottom: "30px" }}>

            {/* Linkedin */}
            <Col xs={XS} md={MD}>
              <a href="https://linkedin.com/in/james-mcdouga">
                <Image
                  style={{ width: "50%", position: "left" }}
                  src="/images/linkedin-logo.png"
                  rounded
                  fluid
                />
              </a>
            </Col>

            {/* Facebook */}
            <Col xs={XS} md={MD}>
              <a href="https://www.facebook.com/james.mcdougall.5059">
                <Image
                  style={{ width: "37%", position: "left" }}
                  src="/images/facebook-logo.png"
                  rounded
                  fluid
                />
              </a>
            </Col>

            {/* Github */}
            <Col xs={XS} md={MD}>
              <a href="https://github.com/JamesMcDougallJr">
                <Image
                  style={{ width: "37%", position: "left" }}
                  src="/images/github.jpg"
                  rounded
                  fluid
                />
              </a>
            </Col>

            {/* Email */}
            <Col xs={XS} md={MD}>
              <a href="mailto:jamesimcdougalljr@gmail.com">
                jamesimcdougalljr@gmail.com
              </a>
            </Col>

            {/* Phone */}
            <Col xs={XS} md={MD}>
              <a href="tel:9513311897">
                951-331-1897
              </a>
            </Col>
          </Row>
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  )
}
