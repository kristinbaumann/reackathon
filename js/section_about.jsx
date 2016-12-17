import React from "react";
import { Section } from "neal-react";
import { Row, Col } from "../helpers/bootstrap.jsx";
import Countdown from "./countdown.jsx";

export const About = () => (
  <Section heading="About the Event" className="white">
    <Row>
      <Col size={["xs-12", "sm-6"]}>
        <p>Fan of React or React Native? We heard you!<br />
           Enjoy hacking all the way? We also heard you! Wait no more, join us at the very first React Hackathon in Vietnam!<br/>
         We provide you for two days with everything you need to finally realise your idea, dive deep into React JavaScript Framework, meet other inspriring developers and win awesome prizes!</p>

        <p>Total newbie in React? No worries, we have people to help you.<br/>
           All you need is to bring your laptop, ideas, excitement and the spirit of a rockstar developer!</p>
       </Col>

       <Col size={["xs-12", "sm-6"]} className="about-col-2">
         <Countdown date="2016-12-17T09:00:00+07:00" className="Countdown"/>
         <p><a className="btn btn-dark" data-toggle="modal" data-target="#signup-modal">Register</a></p>
       </Col>
     </Row>
  </Section>
);
