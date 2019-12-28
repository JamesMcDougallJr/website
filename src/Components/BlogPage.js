import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import blogData from '../json/blog.json';
import types from '../json/types.json';
import images from '../json/images.json';

/**
 * Generic blog page component
 */
class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.getBlogObject = this.getBlogObject.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.getImageUrl = this.getImageUrl.bind(this);
    this.getSkills = this.getSkills.bind(this);
    this.getPostContent = this.getPostContent.bind(this);
  }

  getLinks() {
    let blogObject = this.getBlogObject();
    return blogObject["links"].length > 0 ? blogObject["links"].map((link) =>
      (<a href={link}>{link}</a>)) : <div></div>
  }

  hasLinks() {
    return this.getBlogObject()["links"].length > 0;
  }

  getBlogObject() {
    let type = types[this.getTitle()];
    return blogData[type].filter(obj => obj.title === this.getTitle())[0];
  }

  getTitle() {
    return this.props.match.params.title;
  }

  getImageUrl(skillName) {
    return images[skillName];
  }

  getPostContent() {
    let blogObject = this.getBlogObject();
    return blogObject.post;
  }

  getSkills() {
    let projects = blogData[types[this.getTitle()]];
    let projectObject = projects.filter(project => project.title === this.getTitle())[0];
    return projectObject["skills"].map((skill) =>
      (
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Skill"
              src={this.getImageUrl(skill.title)}
              style={{ height: "auto" }} />
          </ListItemAvatar>
          <ListItemText
            primary={skill.title}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  {/* How I used the skill */}
                  {skill.description}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>)
    );
  }

  render() {
    return (
      <div style={{ paddingTop: "75px", textAlign: "center" }}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h1"
            align="center"
            color="textPrimary"
            gutterBottom>
            {this.getTitle()}
          </Typography>

          {this.hasLinks() ? (
            <div>
              <Typography variant="h5">
                Links
            </Typography>
              <Typography variant="p">
                {this.getLinks()}
              </Typography>
            </div>
          ) : <div></div>
          }

          <Typography variant="h5">
            Skills Gained
          </Typography>
          <List>
            {this.getSkills()}
            <Divider />
          </List>
          <Typography variant="p" align="center" color="textSecondary" paragraph>
            {this.getPostContent()}
          </Typography>
        </Container>
      </div >
    );
  }
}
export default Blog;