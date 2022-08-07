import React, { useState, useRef } from 'react';
import './Home.css';
import '../../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {FaDiscord, FaInstagram, FaTiktok} from 'react-icons/fa'



function Home() {
  const web = [
    {
      language:'HTML',
      text: "HyperText Markup Language.Markup Language to create a website."
    },
    {
      language:'CSS',
      text: "It is a language used to give a style to tags of HTML"
    },
    {
      language:'JavaScript',
      text: "Language used for website and app"
    }
  ]
  const back = [
    {
      language:'Python',
      text: "Language easy to learn thanks to its programming high-level"
    },
    {
      language:'JavaScript',
      text: "Language used for website and app"
    },
    {
      language:'PHP',
      text: "It permits to create dinamic website and it can manage databases"
    },
    {
      language:'C',
      text: "Language difficult to learn, because its programming is low-level"
    },
    {
      language:'C++',
      text: "Language developed by C adding object-oriented programming"
    },
    {
      language:'MySql',
      text: "It is a relational database management system"
    }
  ]

  const PopWeb = (
    <Popover id="popover-contained">
                        <Popover.Header as="h3">You need to learn </Popover.Header>
                        <Popover.Body>
                        {
                          web.map((item) => (
                            <OverlayTrigger
                              key={item.language}
                              placement={'bottom'}
                              overlay={
                                  <Tooltip id='tooltip-bottom'>
                                    {item.text}
                                  </Tooltip>
                              }
                            >
                              <Button variant="trasparent"><strong>{item.language}</strong></Button>
                            </OverlayTrigger>
                          ))}

                        </Popover.Body>
                      </Popover>
  );
  const PopBack = (
    <Popover id="popover-contained">
                        <Popover.Header as="h3">You need to learn </Popover.Header>
                        <Popover.Body>
                        {
                          back.map((item) => (
                            <OverlayTrigger
                              key={item.language}
                              placement={'bottom'}
                              overlay={
                                  <Tooltip id='tooltip-bottom'>
                                    {item.text}
                                  </Tooltip>
                              }
                            >
                              <Button variant="trasparent"><strong>{item.language}</strong></Button>
                            </OverlayTrigger>
                          ))}

                        </Popover.Body>
                      </Popover>
  );
  const PopPLC = (
    <Popover id="popover-contained">
                        <Popover.Body>
                        {
                          [{language: "PLC", text:"It is a Programmable Logic Computer used to managed industrial processes"}].map((item) => (
                            <OverlayTrigger
                              key={item.language}
                              placement={'bottom'}
                              overlay={
                                  <Tooltip id='tooltip-bottom'>
                                    {item.text}
                                  </Tooltip>
                              }
                            >
                              <Button variant="trasparent"><strong>{item.language}</strong></Button>
                            </OverlayTrigger>
                          ))}

                        </Popover.Body>
                      </Popover>
  );
  const PopHobbies = (
    <Popover id="popover-contained">
                        <Popover.Body>
                        {
                          [{language: "Arduino", text:"It is an electronic board with a microcontroller"},
                          {language: "Raspberry", text:"It is a computer and it can runs different OS, such as Ubuntu, Raspberry OS"}].map((item) => (
                            <OverlayTrigger
                              key={item.language}
                              placement={'bottom'}
                              overlay={
                                  <Tooltip id='tooltip-bottom'>
                                    {item.text}
                                  </Tooltip>
                              }
                            >
                              <Button variant="trasparent"><strong>{item.language}</strong></Button>
                            </OverlayTrigger>
                          ))}

                        </Popover.Body>
                      </Popover>
  );
  const Pop3D = (
    <Popover id="popover-contained">
                        <Popover.Header as="h3">You need to learn to use</Popover.Header>
                        <Popover.Body>
                        {
                          [{language: "AutoCad", text:"Software to drawing and modeling in 2D and 3D"},
                          {language: "Fusion360", text:"Software to modeling in 3D"},
                          {language: "Inventor", text:"Software to modeling in 3D and it permits to manage a project easier"}].map((item) => (
                            <OverlayTrigger
                              key={item.language}
                              placement={'bottom'}
                              overlay={
                                  <Tooltip id='tooltip-bottom'>
                                    {item.text}
                                  </Tooltip>
                              }
                            >
                              <Button variant="trasparent"><strong>{item.language}</strong></Button>
                            </OverlayTrigger>
                          ))}

                        </Popover.Body>
                      </Popover>
  );
  return (
    <div id='Home'>
        <div className='title'>
            <h1>Learning is easier now</h1>
            <h2>With a complete site.<br />
              From Coding to 3d modelling.</h2>
        </div> 
        <div className='body'>
          <h3>What do you want to do?</h3>

          <div>
            <Container>
              <Row>
                <Col>
                  <OverlayTrigger trigger="click" placement="bottom" overlay={PopWeb}>
                    <Button variant="success" className='btn-popover'>Become a Web Developer</Button>
                  </OverlayTrigger>
                </Col>
              </Row>
              <Row>
                <Col>
                  <OverlayTrigger trigger="click" placement="bottom" overlay={PopBack}>
                    <Button variant="success" className='btn-popover'>Become a Backend Developer</Button>
                  </OverlayTrigger>
                </Col>
              </Row>
              <Row>
                <Col>
                  <OverlayTrigger trigger="click" placement="bottom" overlay={Pop3D}>
                    <Button variant="success" className='btn-popover'>Become a 3d modeler</Button>
                  </OverlayTrigger>
                </Col>
              </Row>
              <Row>
                <Col>
                  <OverlayTrigger trigger="click" placement="bottom" overlay={PopPLC}>
                    <Button variant="success" className='btn-popover'>Become a PLC programmer</Button>
                  </OverlayTrigger>
                </Col>
              </Row>
              <Row>
                <Col>
                  <OverlayTrigger trigger="click" placement="bottom" overlay={PopHobbies}>
                    <Button variant="success" className='btn-popover'>Follow your hobbies</Button>
                  </OverlayTrigger>
                </Col>
              </Row>
            </Container>
          </div>
          <div className='test'>
            <h3>Test what you learn!!!</h3>

            <div>
              <Button className='btn-test'>Quiz</Button>

              <Button className='btn-test'>Exercises</Button>
            </div>

          </div>

        </div>

        <div id='footer'>
            <footer>
                <Button variant="outline-warning">Courses</Button>
                <Button variant="outline-warning">Quiz</Button>
                <Button variant="outline-warning">Exercises</Button>
            </footer>
            <footer className='Icons'>
              <FaDiscord className='icon' size={25}/>
              <FaInstagram className='icon' size={25}/>
              <FaTiktok className='icon' size={25}/>
            </footer>
        </div>
    </div>
    );
}

export default Home;