import React, {Component} from 'react';
import Slider from 'react-slick';
import {Card, Container,CardImg, CardBody,CardTitle,CardSubtitle, Button} from 'reactstrap';

const InvestorCard = ({ investor }) => {
    return (
        <div style={{ margin: "45px 10px" }}>
            <Card className="caro" style={{ position: "relative", backgroundColor: "#F5F5F5", borderColor: "#F5F5F5", height: "462px", margin: "auto" }}>
                <CardImg top width="400px" height="275px" src={investor.image} alt={investor.name} />
                <CardBody>
                    <CardTitle tag="h5">{investor.name}</CardTitle>
                    <CardSubtitle >{investor.description}</CardSubtitle>
                    <CardSubtitle style={{ position: "absolute", right: "0px", alignItems: "center", bottom: "0px" }}>
                        <span><small className="text-muted">Read More </small>
                            <Button className="card-btn-cta" style={{ border: "none", padding: "0px" }}><img src="/assets/CTA.png" alt="cta"/></Button></span>
                    </CardSubtitle>
                </CardBody>
            </Card>
        </div>
    );
};



export default class InvestorCarousel extends Component {
      
    render() {
 
        var investorlist = this.props.investors.map((investor) => {
            return(
                    <div key={investor.id} >
                        <InvestorCard investor= {investor}/>
                    </div>
            );
        });

        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true,
          autoplay: true,
          autoplaySpeed: 1500,
          pauseOnDotsHover: true,
          
        };  
        return(
            <div className="custom-section investors">
                
                <h2>Our Investors</h2>
                <Container style={{minWidth:"1275px"}}>
                    <Slider {...settings}>
                        {investorlist}
                    </Slider>
                </Container>
            </div>    
        );   
    }
}