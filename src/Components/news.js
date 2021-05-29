import React, { Component } from 'react';
import { Media, Container, Button } from 'reactstrap';

const NewsMedia = ({news}) => {
  return (
    <Media style={{paddingTop:"45px"}}>
      <Media left href="#">
        <Media
          object
          src={news.image}
          alt={news.title}
          height="317px"
          width="295px"
        />
      </Media>
      <Media
        body
        style={{
          position: "relative",
          padding: "90px 44px 0 44px",
          backgroundColor: "#F5F5F5",
          height: "317px",
        }}
      >
        <Media
          heading
          style={{
            fontSize: "28px",
            lineHeight: "34px",
            color: "#3A3A3A",
          }}
        >
          {news.title}
        </Media>
        <p style={{ fontSize: "16px", textAlign:"justify", lineHeight: "24px", width:"755px" }}>
          {news.description}
        </p>
        <small style={{ position: "absolute", right: "40px", top: "96px" }}>
          {news.time}
        </small>
        <Button
          style={{
            position: "absolute",
            right: "0px",
            bottom: "0px",
            border: "none",
            padding: "0px",
          }}
        >
          <img src="/assets/CTA.png" alt="cta"/>
        </Button>
      </Media>
    </Media>
  );
};

class News extends Component {

  render() {
    var newslist = this.props.news.map((news)=>{
      return(
        <div key = {news.id}>
          <NewsMedia news={news}/>
        </div>
      );
    })

    return (
      <div className="custom-section news">
        <Container style={{ minWidth: "1250px" }}>
          <h2>Jeevam Health in News</h2>      
          {newslist}
        </Container>
      </div>
    );
  }
}

export default News;