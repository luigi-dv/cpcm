import { Head } from "@react-email/head";
import { Body } from "@react-email/body";
import { Button } from "@react-email/button";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Heading } from "@react-email/heading";
import { Container } from "@react-email/container";
import { Html } from "@react-email/html";

import * as React from "react";
import { CSSProperties } from "react";

interface VerifyIdentityEmailProps {
  url?: string;
  host?: string;
}

export const VerifyIdentityEmail = ({
  url,
  host,
}: VerifyIdentityEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Text style={tertiary}>Verify Your Identity</Text>
        <Heading style={secondary}>
          Click the button below to log in to your account.
        </Heading>
        <Section style={buttonContainer}>
          <Button href={url} style={button}>
            Sign In
          </Button>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default VerifyIdentityEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const container: CSSProperties = {
  backgroundColor: "#ffffff",
  border: "1px solid #eee",
  borderRadius: "5px",
  boxShadow: "0 5px 10px rgba(20,50,70,.2)",
  marginTop: "20px",
  maxWidth: "360px",
  margin: "0 auto",
  padding: "40px 20px",
};

const tertiary: CSSProperties = {
  color: "#0a85ea",
  fontSize: "12px",
  fontWeight: 700,
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  margin: "16px 0 8px",
  textTransform: "uppercase" as const,
  textAlign: "center" as const,
};

const secondary: CSSProperties = {
  color: "#000",
  fontFamily: "HelveticaNeue-Medium,Helvetica,Arial,sans-serif",
  fontSize: "18px",
  fontWeight: 500,
  lineHeight: "24px",
  margin: "8px 0",
  textAlign: "center" as const,
};

const buttonContainer: CSSProperties = {
  textAlign: "center" as const,
};

const button: CSSProperties = {
  backgroundColor: "#28a745",
  borderRadius: "3px",
  fontWeight: 600,
  color: "#fff",
  fontSize: "15px",
  textDecoration: "none",
  display: "inline-block",
  padding: "10px 20px",
};
