
import React, { Component, Fragment } from 'react';
import { Navbar, Button, Jumbotron, Image, Row, Col} from 'react-bootstrap';

import './App.css';

const bImage = 'images/nature-background.jpg';


const mainBackground = {
    background: `url(${bImage}) no-repeat center center`,
    height:'1000px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: "red",
    margin: '0',
 };

 const logoStyle = {
    width: '10vw',
    position: 'left',
 };

 const jumbotronStyle = {
     margin: '0',
     textAlign:'center',
 };
 
 const quoteStyle = {
    marginLeft: '50px',
    marginRight:'50px',
    fontFamily:'fantasy',
 };

 const bulletStyle = {
    textAlign: 'left',
    fontSize: '20px',
 };

 const mainHeading = {
    color: '#c68c28',
    fontSize: '50px',
    textAlign: 'center',
 };

 const h3Style = {
    color: '#4185f2',
    textAlign: 'center',
 };

 const h4Style = {
    textAlign: 'center',
    color: 'blue',

 };
 const bodyStyle = {
     textAlign: 'center',

 };
 const navStyle = {
     margin:'0',
 };

class App extends Component {
    constructor() {
        super();
    };

    render() {
        return ( 
        < Fragment >
            <Navbar bg="dark"  variant='dark' style={navStyle}>

                <Navbar.Brand>
                    <Navbar.Link href="#top">James McDougall</Navbar.Link>
                </Navbar.Brand>

                <Navbar.Brand>
                    <Navbar.Link href="#experience">Experience</Navbar.Link>
                </Navbar.Brand>
                
                {/*
                <Navbar.Brand>
                    <Navbar.Link href="#projects">Projects</Navbar.Link>
                </Navbar.Brand>
                */}

                <Navbar.Brand>
                    <Navbar.Link href="#education">Education</Navbar.Link>
                </Navbar.Brand>

                <Navbar.Brand>
                    <Navbar.Link href="#contact">Contact Me</Navbar.Link>
                </Navbar.Brand>
            </Navbar>

            <Jumbotron style={mainBackground}></Jumbotron>    

            <Jumbotron style = {jumbotronStyle}>

                <p style={quoteStyle}>Here's to the crazy ones. The misfits. The rebels. The troublemakers. 
                    The round pegs in the square holes. The ones who see things differently.
                    They're not fond of rules. And they have no respect for the status quo.
                    You can quote them, disagree with them, glorify or vilify them.
                    About the only thing you can't do is ignore them.
                    Because they change things. They push the human race forward.
                    And while some may see them as the crazy ones, we see genius.
                    Because the people who are crazy enough to think they can change the world,
                    are the ones who do. <br/>-Rob Siltanen, not Steve Jobs
                </p>
            </Jumbotron>

            <div id='about'>
                <Jumbotron style={jumbotronStyle}>
                    <h2 style={mainHeading}>About Me!</h2>
                    <p>I love my family, tech, and coffee. In that order. 
                        As such, I do everything I do in order to maximize my 
                        time doing those three things. I love nothing more than 
                        going down the rabbit hole, puring myself a cup of french press coffee
                        before settling down to learn about a brand new technology. And at the
                        end of the day, I want to make sure I'm with the people I love, and who love me.
                    </p>
                </Jumbotron>
            </div>

            <div id='experience'>
            <Jumbotron style = {jumbotronStyle}>
                <h2 style = {mainHeading}> Tech Experience</h2>
    
                <h3 style={h3Style} >Backend Developer in Python and C++ at Nimber, Inc.</h3>
                <h4 style={h4Style}> OpenCv, Ubuntu, Github</h4>
                
                <p style={bodyStyle}>
                    Through my work with student startup Nimber, Inc. 
                    I've learned about computer vision, machine learning 
                    applications, and working with embedded systems
                </p>

                <ul>
                    <li style={bulletStyle}> Used <a href = 
                    "https://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_tutorials.html">
                     OpenCv </a> 
                    computer vision library and numpy arrays to extract facial features from photos,
                     match faces to a database</li>

                    <li style={bulletStyle}> Used OpenCv C++ library on Ubuntu to extract faces from video capture using a <a href = "https://developer.nvidia.com/embedded/buy/jetson-tx1">Nvidia Jetson Tx1</a></li>
                </ul>

                <h3 style={h3Style}>Tutor with the Computer Science and Engineering department at UCSD</h3>
                <h4 style={h4Style}>Advanced Data Structures in C++, Debugging</h4>
                <p style={bodyStyle}>I love being a tutor in the CSE department.
                    I love watching other students become better developers,
                    and seeing them get excited when they discover a solution!
                </p>
                <ul>
                    <li style = {bulletStyle}>
                        By helping other students debug their programs, 
                        I am very familiar with GDB, Makefiles, and testing techniques in C++.
                    </li>

                </ul>

                <h3 style={h3Style}>Data Analyst in Python</h3>

                <h4 style={h4Style}>
                   Jupyter,  <a href="https://pandas.pydata.org/">Pandas</a>, <a href = "https://www.statsmodels.org/stable/index.html">StatsModels</a> 
                </h4>

                <p style={bodyStyle}>I performed data analysis under professor 
                    <a href = "https://sites.google.com/a/eng.ucsd.edu/alvarado/"> Christine Alvarado </a> 
                    for an education research project.
                </p>

                <ul>
                    <li style={bulletStyle}>I performed t-tests and z-tests
                    on data which I organized into dataframes, and displayed the results of these tests
                    in a Jupyter notebook. 
                    </li>
                </ul>

                <h3 style={h3Style}>Check out the rest of my Resume</h3>
                <Button href="pdf/Resume 2019.pdf">Click Here</Button>

            </Jumbotron>
            </div>

           {/* <div id = 'project'>
                <Jumbotron style={jumbotronStyle}>
                    <h2 style={mainHeading}>Projects</h2>
                </Jumbotron>
            </div> */}

            <div id='education'>
                <Jumbotron style={jumbotronStyle}>
                    <h2 style={mainHeading}>Education</h2>
                    <p>I am currently pursuing a computer engineering degree at UC San Diego, with a minor in business. 
                        I love hardware and am considering a masters in hardware engineering.</p>
                </Jumbotron>
            </div>

            <div id='contact'>
                <Jumbotron style={jumbotronStyle}>
                    <h2 style={mainHeading}>Contact Me</h2>
                    <h3 style={h3Style}>The best way to contact me is via my school email: jmcdouga@ucsd.edu</h3>
                    <Row>
                        <Col xs={6} md={4}>
                            <p>Facebook</p>
                            <a href="https://www.facebook.com/james.mcdougall.5059">
                            <Image style={{width:'10vw'}} src="images/facebook-logo.png"></Image>
                            </a>
                        </Col>
                        <Col xs={6} md={4}>
                            <p>Linkedin</p>
                            <a href="https://www.linkedin.com/in/james-mcdouga">
                                <Image style={{width:'15vw'}} src="images/linkedin-logo.png"></Image>
                            </a>
                        </Col>
                    </Row>
                </Jumbotron>
            </div>

            <div>
                <Jumbotron style={jumbotronStyle}>
                    <h2 style={mainHeading}>This site was built with:</h2>
                    <Row>
                        <Col xs={6} md={4}>
                            <p>React</p>
                            <Image style={logoStyle} src="images/react.svg" rounded fluid />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image style={{width:'30vw'}} src="images/pages-logo.jpeg" rounded fluid />
                        </Col>
                    </Row>
                   
                </Jumbotron>
            </div>

        </Fragment >
        )
    }
    
} export default App;