import React from "react";
import { Section, HorizontalSplit } from "neal-react";
import { Row, Col } from "../helpers/bootstrap.jsx";

class TeamMember extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string,
    imageUrl: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="card neal-team-member">
        <div className="card-img-top" style={{backgroundImage: `url(${this.props.imageUrl})`}}></div>
        <div className="card-block neal-team-member-profile">
          <h4 className="card-title lead neal-team-member-name">
            {this.props.name}
            {this.props.title ? `, ${this.props.title}` : null}
          </h4>
          <br/>
          <div className="neal-team-member-description">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

class Team extends React.Component {

  static propTypes = {
    children: React.PropTypes.arrayOf(React.PropTypes.element),
  };

  render() {
    return (
      <div className="card-deck-wrapper neal-team">
        <Row>
          <div className="card-deck">
            {this.props.children.map((member, idx) => {
              return (
                <Col size={["xs-12", "sm-4", "lg-4"]} key={idx}>{member}</Col>
              );
            })}
          </div>
        </Row>
      </div>
    );
  }
}

export const Evaluation = () => (
  <Section heading="Competition" className="gray">
    <h3>Judges</h3>
    <Team>
      <TeamMember name="Lars Jankowfsky" title="" imageUrl="img/people/judges_lars.jpg">Founder & General Partner of 8BitRockstars</TeamMember>
      <TeamMember name="Dave Hajdu" title="" imageUrl="img/people/judges_dave.jpg">Head of Product Development at TINYpulse</TeamMember>
      <TeamMember name="Harley Trung" title="" imageUrl="img/people/judges_harley.jpg">Co-founder & Instructor of Coderschool.vn</TeamMember>
    </Team>
    <hr />
    <h3>Awards</h3>
    <Row className="awards">
      <Col size={['xs-12', 'sm-6']} className="award-item">
        <img src="img/evaluation_judges.png" />
        <h4>Judges Award</h4>
        <p>Voted by our judges.</p>
      </Col>
      <Col size={['xs-12', 'sm-6']} className="award-item">
        <img src="img/evaluation_audience.png" />
        <h4>Audience Award</h4>
        <p>Voted by the audience attending the final presentations.</p>
      </Col>
    </Row>
    <hr />
    <h3>Prizes</h3>
    <p>Each awarded team receives the following package:</p>
    <Row className="prizes">
      <Col size={['xs-12', 'sm-5']} className="prize-item">
        <h4>Mentorship</h4>
        <Row className="mentoring">
          <Col size={['xs-12']} className="mentoring-item">
            <img src="img/mentoring.png" />
            <p>3 months mentorship<br />with successful entrepreneur Lars Jankowfsky</p>
          </Col>
        </Row>
      </Col>
      <Col size={['xs-12', 'sm-2']}>
        <div className="plus-container">
          <img src="img/plus.png" />
        </div>
      </Col>
      <Col size={['xs-12', 'sm-5']} className="prize-item">
        <h4>Technical Gadgets</h4>
        <Row className="gadgets">
          <Col size={['xs-12', 'sm-6']} className="gadgets-item">
            <img src="img/prize_raspberry.png" />
            <p>Raspberry Pi + Kit<br />(per team)</p>

          </Col>
          <Col size={['xs-12', 'sm-6']} className="gadgets-item">
            <img src="img/prize_charger_square.png" />
            <p>Battery Charger<br />(per person)</p>
          </Col>
        </Row>
      </Col>
    </Row>
  </Section>
);
