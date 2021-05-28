import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardImg,
    CardSubtitle,
    Button
} from "reactstrap";


const TeamCard = ({ member }) => {
    return (
        <div style={{ margin: "45px 10px" }}>
            <Card style={{ position: "relative", backgroundColor: "#F5F5F5", borderColor: "#F5F5F5", height: "554px", margin: "auto" }}>
                <CardImg top width="400px" height="414px" src={member.image} alt={member.name} />
                <CardBody>
                    <CardTitle tag="h5">{member.name}</CardTitle>
                    <CardSubtitle >{member.designation}</CardSubtitle>
                    <CardSubtitle style={{ position: "absolute", right: "0px", alignItems: "center", bottom: "0px" }}>
                        <span><small className="text-muted">View Profile </small>
                            <Button style={{ border: "none", padding: "0px" }}><img src="/assets/CTA.png" /></Button></span>
                    </CardSubtitle>
                </CardBody>
            </Card>
        </div>
    );
};

export default class OurTeam extends Component {
    render() {


        const team = this.props.members.map((member) => {
            return (
                <div key={member.id}>
                    <TeamCard member={member} />
                </div>
            );
        })

        return (
            <>
                <Container style={{ minWidth: "1250px" }}>
                    <div style={{ marginTop: "105px", position: "relative" }}>
                        <h2>About Us</h2>
                        <Button style={{ position: "absolute", backgroundColor: "white", right: "-4px", top: "0", border: "none", padding: "0px" }}><img src="/assets/whatsapp.svg" /></Button>
                        <p style={{
                            textAlign: "center", fontSize: "16px", lineHeight: "150%",
                            color: "#898989"
                        }}>
                            We are a group of passionate individuals brought together by a
                    shared goal of helping people live <br /> with chronic conditions.
                    Our methods are based in the science of Functional Medicine
                    and principle <br />of providing unparalleled service to our
                    customers.
                    </p>
                    </div>
                    <Row xl={3} style={{ margin: "54px -5px", }}>
                        <img style={{padding:"1px"}} src="assets/Techno.svg" />
                        <img style={{padding:"1px"}} src="assets/Healthcare.svg" />
                        <img style={{padding:"1px"}} src="assets/Innovation.svg" />
                    </Row>
                    <h2 style={{ marginTop: "105px", marginBottom: "25px" }}>Our Team</h2>
                    <Row xl={3}>
                        {team}
                    </Row>
                </Container>
            </>
        );
    }
}