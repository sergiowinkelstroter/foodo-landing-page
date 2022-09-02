import { Col, Container, Row } from "react-bootstrap";
import imageAbout from "../assets/image-about.png";
import Image from "next/image";

export const AboutComponent = () => {
  return (
    <div className="about-container-bg">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Image src={imageAbout} className="img-fluid" />
          </Col>
          <Col xs={12} md={6} className="about-details">
            <div>
              <h2>Best Offer In Town</h2>
              <b>Lorem ipsum, or lipsum as it is sometimes known,</b>
              <br />
              <br />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                ullam vitae quis iusto alias ab harum, nesciunt nemo saepe est,
                ipsam, molestias officia molestiae minima. Numquam neque
                recusandae eaque veritatis?
              </p>
              <button className="btn btn-custom">Explore More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
