import React, { Component } from "react";
import {
    Container,
    Row,
    Card,
    CardBody,
    CardTitle,
    CardImg,
    CardSubtitle,
    Button
} from "reactstrap";


const TeamCard = ({ member }) => {
    return (
            <Card className="team-card">
                <CardImg top width="400px" height="414px" src={member.image} alt={member.name} />
                <CardBody>
                    <CardTitle tag="h5">{member.name}</CardTitle>
                    <CardSubtitle >{member.designation}</CardSubtitle>
                    <CardSubtitle style={{ position: "absolute", right: "0px", alignItems: "center", bottom: "0px" }}>
                        <span><small className="text-muted">View Profile </small>
                            <Button style={{ border: "none", padding: "0px" }}><img src="/assets/CTA.png" alt="CTA"/></Button></span>
                    </CardSubtitle>
                </CardBody>
            </Card>
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
                <Container style={{ minWidth: "1275px" }}>
                    <div className="custom-section about">
                        <h2>About Us</h2>
                        <Button className="about-btn"><img src="/assets/whatsapp.svg"  alt="about-us"/></Button>
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
                    <Row xl={3} style={{ margin: "54px -5px" }}>
                        <img style={{padding:"1px"}} src="assets/Techno.svg" alt="techno"/>
                        <img style={{padding:"1px"}} src="assets/Healthcare.svg"  alt="healthcare"/>
                        <img style={{padding:"1px"}} src="assets/Innovation.svg" alt="innovation"/>
                    </Row>
                    <div className="custom-section team">
                        <h2>Our Team</h2>
                        <Row xl={3}>
                            {team}
                        </Row>
                    </div>
                </Container>
            </>
        );
    }
}