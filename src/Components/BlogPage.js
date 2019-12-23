import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

/**
 * Generic blog page component
 */
class Blog extends React.Component {

  render() {
    return (
      <div style={{ paddingTop: "75px", textAlign: "center" }}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom>
            {this.props.match.params.title}
          </Typography>
          <Typography variant="h4" align="center" color="textSecondary" paragraph>
          </Typography>
        </Container>
      </div >
    );
  }
}
export default Blog;