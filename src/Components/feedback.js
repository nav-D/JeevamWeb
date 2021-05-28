import React, { Component } from "react";
import { Row, Col, Container, Button } from "reactstrap";

class Feedback extends Component {
  render() {
    return (
      <Container style={{ marginTop: "105px" }} className="promoHeader">
        <Container style={{ maxWidth: "1250px", height: "400px"}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", height:"inherit"}}>
            <div style={{display:"flex", height:"58px", width:"168px"}}><img style={{margin:"0 auto"}} src="/assets/idea.svg"/></div>
            <p
                style={{
                    fontWeight: "500",
                    fontSize: "40px",
                    lineHeight: "120%",
                    color: "white"
                }}
                >
                Join the Jeevam Family now <br /> and get 20 % off your first plan
            </p>
            <Button style={{height:"58px", width:"168px"}} className="promo-join-btn">Redeem Now</Button>
            </div>
        </Container>
      </Container>
    );
  }
}

export default Feedback;
