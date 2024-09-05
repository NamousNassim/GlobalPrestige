import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="À Propos">
      <CommonSection title="À Propos de Nous" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Nous Sommes Engagés à Fournir des Solutions de Transport Sûres
                </h2>

                <p className="section__description">
                  Nous sommes une entreprise de location de voitures située à Marrakech, Maroc. Nous offrons des solutions de transport sûres et fiables pour vous aider à découvrir la beauté de cette ville magnifique. Notre priorité est de garantir votre sécurité et votre confort tout au long de votre voyage.
                </p>

                <p className="section__description">
                  Avec une flotte variée de véhicules, nous nous engageons à offrir un service de qualité, adapté à vos besoins, que ce soit pour des voyages d'affaires ou des vacances. Faites confiance à notre expertise pour une expérience de location sans souci.
                </p>

                <div className="d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Besoin d'Aide ?</h6>
                    <h4>+212612345678</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Nos Experts</h6>
              <h2 className="section__title">Notre Équipe</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
