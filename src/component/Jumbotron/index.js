import React, { Component } from 'react'
import { Container, Carousel } from 'react-bootstrap';
import carousel1 from '../../images/carousel1.jpg'
import carousel2 from '../../images/carousel2.jpg'
import carousel3 from '../../images/carousel4.jpg'


class JumbotronComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <Container className="mt-4 pt-2">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={carousel1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Rovaniemi</h3>
                        <p>The capital of Lapland. Rovaniemi is an urban city surrounded by arctic nature, where Lappish culture and a wide range of activities meet. In Rovaniemi you can visit Santa Claus and cross the Arctic Circle every day of the year!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Mount Kackar Turkey</h3>
                        <p>The Kaçkar Mountains or simply Kaçkars, formerly known as the Lazistan Mountains, are a mountain range that rises above the Black Sea coast in northeastern Turkey.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Singapore</h3>
                        <p>Singapore is an anomaly. The world's only city-island-nation, Singapore is located just off the southern tip of Peninsular Malaysia in Southeast Asia.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        );
    }
}
 
export default JumbotronComponent;