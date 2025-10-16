import React from "react";
import { Container } from "react-bootstrap";
import Text from "../atoms/Text";
import "../../styles/organisms/Footer.css";

function Footer() {
    return (
        <footer className="footer-section">
            <Container className="text-center">
                <Text className="footer-text">
                    © {new Date().getFullYear()} Nayen Roman - Derechos reservados
                </Text>
            </Container>
        </footer>
    );
}

export default Footer;