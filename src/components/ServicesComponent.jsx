import { Col, Row, Container } from "react-bootstrap";
import Image from "next/image";
import Image01 from "../assets/image-one.png";
import Image02 from "../assets/image-two.png";
import Image03 from "../assets/image-three.png";

export const ServicesComponent = () => {
  return (
    <div className="service-conatiner-bg">
      <Container className="service-conatiner">
        <Row>
          <Col xs={12} md={4}>
            <Image src={Image01} className="img-fluid service-img" />
            <h2>Best Offer In Town</h2>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <Image src={Image02} className="img-fluid service-img" />
            <h2>Fast Delivery</h2>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <Image src={Image03} className="img-fluid service-img" />
            <h2>Quality Food</h2>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
