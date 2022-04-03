import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import UserRegistration from './UserRegistration';
import WorkerRegistration from './WorkerRegistration';

export default function Registration() {
  return (
    <div>
        <Container>
        <Row>
          <Col md={5}>
            <div className="App">
              <div className="outer">
                <div className="inner">
                  <UserRegistration />
                </div>
              </div>
            </div>
          </Col>
          <Col md={7}>
            <div className="App">
              <div className="outer">
                <div className="inner">
                  <WorkerRegistration />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
