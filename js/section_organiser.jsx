import React from "react";
import { Section } from "neal-react";
import { Row, Col } from "../helpers/bootstrap.jsx";

export const Organiser = () => (
  <Section heading="Organisers" className="gray">
    <Row className="organiserLogoSection">
      <Col size={['xs-12', 'sm-6']} className="organiserLogoCol">
        <a href="http://www.8bitrockr.com" target="_blank"><img className="organiserLogo" src="img/logo_square.png"/></a>
      </Col>
      <Col size={['xs-12', 'sm-6']} className="organiserLogoCol">
        <a href="http://www.nfq.com" target="_blank"><img className="organiserLogo" src="img/nfq_logo.png"/></a>
      </Col>
    </Row>
    <a href="http://www.8bitrockr.com" target="_blank"><img className="groupPhoto" src="img/group.jpg"/></a>
    <p>Address: 8 Bit Rockstars - 8th Floor, Vincom Center, 72 Le Thanh Ton, District 1, Ho Chi Minh City, Vietnam<br />
    Phone: +84 8668 19033<br />
    Email: event@8bitrockr.com</p>
  </Section>
);
