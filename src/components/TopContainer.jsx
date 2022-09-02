import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import mobile from "../assets/mobile.png";
import plate_two from "../assets/plate-two.png";
import plate_three from "../assets/plate-three.png";

export const TopContainer = () => {
  return (
    <>
      <div className="background"></div>
      <div className="texture">
        <Container className="container-top">
          <Row className="section-top">
            <Col xs={12} md={6} className="section-top-left">
              <Image className="img-fluid" src={mobile} />
            </Col>
            <Col xs={12} md={6} className="section-top-right shadow">
              <div className="plate-img-container">
                <Image className="plate-img img-fluid" src={plate_two} />
                <Image className="plate-img img-fluid" src={plate_three} />
              </div>
              <h6>FOODO</h6>
              <h2>Get Your Food In</h2>
              <h1>FOODO</h1>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
              <button className="btn btn-custom">Download App</button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
