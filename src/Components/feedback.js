import React, { Component } from "react";
import { Row, Col, Container, Button } from "reactstrap";
import {Control, LocalForm, Errors} from 'react-redux-form';

const PromoFooter = () => {
  return (
    <Container style={{ marginTop: "105px" }} className="promo-footer">
      <Container style={{ minWidth: "1250px", height: "400px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "inherit",
          }}
        >
          <div style={{ display: "flex", height: "58px", width: "168px" }}>
            <img style={{ margin: "0 auto" }} src="/assets/idea.svg" alt="idea"/>
          </div>
          <p
            style={{
              fontWeight: "500",
              fontSize: "40px",
              lineHeight: "120%",
              color: "white",
            }}
          >
            Join the Jeevam Family now <br /> and get 20 % off your first plan
          </p>
          <Button
            style={{ height: "58px", width: "168px" }}
            className="promo-join-btn"
          >
            Redeem Now
          </Button>
        </div>
      </Container>
    </Container>
  );
};

var required = (val) => val && val.length;
const isNumber = (val) => !isNaN(Number(val));

class Feedback extends Component {
  // constructor(props) {
  //   super(props);
  // }

  handleSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
    // event.preventDefault();
  }

  render() {
    return (
      <>
        <PromoFooter />
        
        <Container style={{ minWidth: "1250px"}}>
          <div className="custom-section feedback">
            <h2>Have Questions? Connect With Us</h2>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Col md={12}>
                  <Control.text
                    model=".name"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                    validators={{
                      required
                    }}
                    />
                  <Errors
                      className="text-danger"
                      model=".name"
                      show="touched"
                      messages={{
                        required: "Required field"                     
                      }}/>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={12}>
                  <Control.text
                    model=".telnum"
                    id="telnum"
                    name="telnum"
                    placeholder="Phone Number"
                    className="form-control"
                    validators={{
                      isNumber
                    }}
                    />
                  <Errors
                  className="text-danger"
                  model=".telnum"
                  show="touched"
                  messages={{
                    isNumber: 'It is not a valid number'                     
                  }}/>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={12}>
                  <Control.text
                    model=".email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    validators={{
                      required
                    }}
                    />
                  <Errors
                      className="text-danger"
                      model=".email"
                      show="touched"
                      messages={{
                        required: "Required field"                     
                      }}/>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={12}>
                  <Control.textarea
                    model=".message"
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    className="form-control"
                    validators={{
                      required
                    }}
                    />
                  <Errors
                      className="text-danger"
                      model=".message"
                      show="touched"
                      messages={{
                        required: "Required field"         
                      }}/>
                </Col>
              </Row>
              <Row className="form-group" style={{marginTop:"50px"}}>
                <Col md={12}>
                  <Button type="submit" style={{height:"58px", width:"190px"}} className="promo-join-btn">
                    Schedule a Call
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </div>
        </Container>
      </>
    );
  }
}

export default Feedback;
