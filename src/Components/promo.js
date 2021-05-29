import React, { Component } from "react";
import { Row, Col, Container, Button} from "reactstrap";

export default class Promo extends Component {
  render() {
    return (
      <>
        <Container className="promo-header">
          {/* <Container style={{maxWidth:"1440px",height:"657px"}}> */}
          <Row style={{margin:"0px 100px"}}>
            <Col xs="6" style={{padding:'0'}}>
              <p style={{fontSize:"16px", color:"#06b58c", marginTop:"68px"}}>#Our Philosophy</p>
              <p style={{color:"white", fontSize:"40px", lineHeight:"48px", paddingBottom:"33px"}}>
                At Jeevam Health, We<br/> believe in treating<br/> everyone with the
                care and<br/> support they deserve on<br/> their journey back to a<br/>
                health and fulfilling life.
              </p>
              <Button className="btn btn-secondary promo-join-btn">Join The Jeevam Team</Button>
            </Col>
            <Col xs="6" style={{padding:'0', textAlign:"right"}}>
              <img className="promo-img" height="720px" src="/assets/promoHeader.png" alt="Some promo"/>
            </Col>
          </Row>
          {/* </Container> */}
        </Container>
      </>
    );
  }
}
