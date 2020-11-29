import React, { Component } from 'react';
import logo from './img/canary.png';
import { Col, Row, Container, Badge } from 'reactstrap';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 50
        }}
    />
);

class Header extends Component {

  render() {
    return (
        <Container fluid="true">
            <Row className="mt-1">
                <Col className="center"><img src = {logo} alt = "Chirping Canary Logo"/><Badge color="danger">Beta</Badge></Col>
                <Col className="flex-xs-middle">
                    <h1 className="header-font">
                        <br></br>
                        <p>Chirping Canary</p>
                        <p className="arial">Air Pollution Early Warning System</p>
                    </h1>
                </Col>
            </Row>

            <Row className="mt-1">
                <Col><ColoredLine color="gold" />
          <p>
          <b>Incident Alert (02:15AM 29/11/20 UTC)</b>:
      Chirping Canary is aware of an incident involving the receipt of numerous air pollution alerts in error.
      </p>
          <p>
          <b>Incident Alert Update (02:30AM 29/11/20 UTC)</b>:
            It has been determined that between 07:35 and  21:57 on the 28th of November
          2020, Chirping Canary become a little overzealous and sent an air pollution warning every 5-10 minutes for
          approximately ~50 messages over the course of the day.

          Chirping Canary understand how frustrating this must have been and would like to apologise for this incident.
          A patch has been applied to prevent the same issue from occurring.

          While a more robust solution and suite of tests are put in place, Chirping Canary will be taking an unpaid leave
      of absence and you will not receive any alerts. An update will be posted here once Chirping Canary has returned. Once again
          thank you for your continued support and apologies for the inconvenience this incident may have caused you.
      </p>

      </Col>
      </Row>
        </Container>

    );
  }
}

export default Header
