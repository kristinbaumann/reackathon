import React from "react";
import {
  Section,
} from "neal-react";
import { Row, Col } from "../helpers/bootstrap.jsx";

const faq = [
  {
    question: 'Can I join individually?',
    answer: 'We encourage you to join as team. If you don’t have a team, we’re here to help. Once registration ends, we’ll connect you with others to form a team. Having fun together is much better than being a lone wolf, right?'
  },
  {
    question: 'What can I build?',
    answer: 'Anything. Just let your ideas run wild. The only constraint is to use the React or React Native JavaScript Framework to build it. Showing something is also a MUST. You’re right, you will have to demo your product for at least 60 seconds. Don’t mind if it’s not 100% completed, because remember- done is better than perfect.'
  },
  {
    question: 'What should I bring to the event?',
    answer: 'Your laptop, your team mates, an idea and the will to create something awesome in short time. We provide you with space to collaborate, food, beverages and also a place to take a nap after hard core coding.'
  },
  {
    question: 'Do I need to be a developer to join the event?',
    answer: "Generally no. Of course, coding is what turns ideas into real prototypes and applications, but if your team needs you as a project manager, designer, creative mind or what ever, we love you join."
  },
  {
    question: 'Do I need to be experienced in React?',
    answer: "Generally no. We strongly recommend that you have coding experience in JavaScript and at least one other JavaScript framework. But this hackathon event is also the time to broaden your coding horizont, learn new stuff and directly apply it. In case you get stuck, we have mentors helping you out. In case you are experienced in React, even better! Time to show what you've got"
  },
  {
    question: 'Can I prepare the code before coming to the event?',
    answer: 'No. To ensure fairness, all teams are not allowed to bring their own previous project or prepare the code in advance. You can come up with the idea first, but all code need to be produced during the two hackathon days.'
  },
  {
    question: 'Will the event be held in English or Vietnamese?',
    answer: 'English most of the time. You can of course discuss with other people in Vietnamese, but for the final presentation, it should be in English.'
  },
  {
    question: 'I have no idea!',
    answer: "Then let's start brainstorming! We strongly encourage you find and agree on an idea with your team before the hackathon starts, so you can spend maximum time on coding instead of discussing. We will ask you for your team idea one week before the hackathon starts to ensure this. If you still need help, ask us."
  },
  {
    question: 'How can I connect to my fellow participants?',
    answer: 'During the registration you enter your Facebook email, so we can invite you to the Reackathon Facebook Group, where you ask questions, find more team mates, discuss ideas or just express your excitement!'
  }
];

export const Questions = () => (
  <Section heading="Important Information" className="white">
    { faq.map((item, index) => {
        return (
          <Row key={index} className="faq-row">
            <Col size={['xs-12', 'sm-4']} className="faq-question">{item.question}</Col>
            <Col size={['xs-12', 'sm-8']}>{item.answer}</Col>
          </Row>
        );
      })}
      <Row className="faq-row">
        <Col size={['xs-12', 'sm-4']} className="faq-question">I still have questions!</Col>
        <Col size={['xs-12', 'sm-8']}>Contact us via email <a href="mailto:event@8bitrockr.com">event@8bitrockr.com</a> or check out our <a href="https://www.facebook.com/events/1451834788179346/" target="_blank">Facebook Event</a>!</Col>
      </Row>
  </Section>
);
