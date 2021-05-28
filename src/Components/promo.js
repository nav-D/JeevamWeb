import React, { Component } from "react";
import { Row, Col, Container, Button, Jumbotron } from "reactstrap";

export default class Promo extends Component {
  render() {
    return (
      <>
        <Container className="promoHeader">
          <Container style={{maxWidth:"1440px",height:"657px"}}>
          <Row style={{margin:"0px 90px"}}>
            <Col xs="6">
              <p style={{fontSize:"16px", color:"#06b58c", marginTop:"68px"}}>#Our Philosophy</p>
              <p style={{color:"white", fontSize:"40px", lineHeight:"48px", paddingBottom:"33px"}}>
                At Jeevam Health, We<br/> believe in treating<br/> everyone with the
                care and<br/> support they deserve on<br/> their journey back to a<br/>
                health and fulfilling life.
              </p>
              <Button className="promo-join-btn">Join The Jeevam Team</Button>
            </Col>
            <Col xs="6">
              <img style={{position:"absolute", right:"0px", height:"657px"}} src="/assets/promoHeader.png"/>
            </Col>
          </Row>
          </Container>
        </Container>
      </>
    );
  }
}
