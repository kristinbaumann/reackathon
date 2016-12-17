import React from "react";
import { Section } from "neal-react";
import { Row, Col } from "../helpers/bootstrap.jsx";

const times = {
  saturday: [
    {
      time: '09:00 - 10:00',
      content: 'Checkin & registration'
    },
    {
      time: '10:00 - 11:00',
      content: 'Hackathon Overview'
    },
    {
      time: '11:00 - 13:30',
      content: 'Start working on projects'
    },
    {
      time: '13:30 - 14:30',
      content: 'Lunch'
    },
    {
      time: '14:30 - 19:00',
      content: 'Work on Projects'
    },
    {
      time: '19:00 - 20:00',
      content: 'Dinner'
    },
    {
      time: '20:00 - .........',
      content: 'Work on Projects'
    },
  ],
  sunday : [
    {
      time: '08:30 - 09:30',
      content: 'Breakfast'
    },
    {
      time: '09:30 - 10:00',
      content: 'Presentation workshop'
    },
    {
      time: '10:00 - 12:30',
      content: 'Work on Projects'
    },
    {
      time: '12:30 - 13:30',
      content: 'Lunch'
    },
    {
      time: '13:30 - 16:00',
      content: 'Demo & Prizes'
    },
  ]
};

export const Agenda = () => (
  <Section heading="Agenda" className="gray">
    <div className="generalTimes">
      <p className="timeLead"><strong>Registration Opening:</strong> 1st Nov 2016</p>
      <p className="timeLead"><strong>Hackathon Event Days:</strong> 17th & 18th Dec 2016</p>
    </div>
    <div className="detailTimes">
      <Row>
        <Col size={["xs-12", "sm-4"]}>
          <div className="detailTimesTitle">Saturday, 17th Dec 2016:</div>
        </Col>
        <Col size={["xs-12", "sm-8"]} >
          { times['saturday'].map((item, index) => (
            <Row key={index}>
              <Col className="detailTimesRange" size={["xs-4"]}>{item.time}</Col>
              <Col size={["xs-8"]}>{item.content}</Col>
            </Row>
          ))}
        </Col>
      </Row>
    </div>
    <div className="detailTimes">
      <Row>
        <Col size={["xs-12", "sm-4"]}>
          <div className="detailTimesTitle">Sunday, 18th Dec 2016:</div>
        </Col>
        <Col size={["xs-12", "sm-8"]} >
          { times['sunday'].map((item, index) => (
            <Row key={index}>
              <Col className="detailTimesRange" size={["xs-4"]}>{item.time}</Col>
              <Col size={["xs-8"]}>{item.content}</Col>
            </Row>
          ))}
        </Col>
      </Row>
    </div>
  </Section>
);
