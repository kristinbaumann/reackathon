import React from "react";
import { Container, Row, Col } from "../helpers/bootstrap.jsx";

export class Footer extends React.Component {

  static propTypes = {
    brandName: React.PropTypes.node.isRequired,
    facebookUrl: React.PropTypes.string,
    twitterUrl: React.PropTypes.string,
    githubUrl: React.PropTypes.string,
    email: React.PropTypes.string,
    address: React.PropTypes.node,
  }

  render() {
    return (
      <footer className="neal-footer navbar">
        <Container>
          <Row>
            <Col size={["xs-12", "md-4"]}>
              This event is powered by:
              <h1>{this.props.brandName}</h1>
            </Col>
            <Col size={["xs-12", "md-4"]}>
              <div className="img-footer m-auto">
                <img className="img-responsive" src={this.props.img} />
              </div>
            </Col>
            <Col size={["xs-12", "md-4"]}>
              {this.props.address}
              <p>
                 Support: <a href={`mailto:${this.props.email}`}>{this.props.email}</a>
              </p>
            </Col>

          </Row>
        </Container>
      </footer>
    );
  }

  renderSocialIcons() {
    return (
      <ul className="nav navbar-nav neal-footer-social pull-right">
        { this.renderSocialIcon("fa-twitter", this.props.twitterUrl) }
        { this.renderSocialIcon("fa-facebook", this.props.facebookUrl) }
        { this.renderSocialIcon("fa-github", this.props.githubUrl) }
      </ul>
    );
  }

  renderSocialIcon(iconClass, url) {
    if (!url || !iconClass ) { return null; }
    return (
     <li className={`nav-item neal-footer-social-icon ${iconClass.replace("fa-", "")}`}>
        <a href={url} target="_blank">
          <span className="fa-stack">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className={`fa ${iconClass} fa-stack-1x fa-inverse`}></i>
          </span>
        </a>
      </li>
    );
  }
}

export class FooterAddress extends React.Component {
  render() {
    return (
      <div className="neal-footer-address">
        { this.props.children }
      </div>
    );
  }
}
