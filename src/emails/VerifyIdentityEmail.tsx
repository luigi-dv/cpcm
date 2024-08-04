import * as React from 'react';
import { CSSProperties } from 'react';

import { Head } from '@react-email/head';
import { Body } from '@react-email/body';
import { Text } from '@react-email/text';
import { Html } from '@react-email/html';
import { Link } from '@react-email/link';
import { Button } from '@react-email/button';
import { Section } from '@react-email/section';
import { Preview } from '@react-email/preview';
import { Heading } from '@react-email/heading';
import { Container } from '@react-email/container';

interface VerifyIdentityEmailProps {
  url?: string;
  host?: string;
  companyName?: string;
}

/**
 * A custom email template for verifying a user's identity.
 */
const VerifyIdentityEmail = ({ url, host, companyName }: VerifyIdentityEmailProps) => (
  <Html>
    <Head />
    <Preview>Sign in to your account</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={section}>
          <Heading style={h1}>Sign in to your account</Heading>
          <Text style={text}>Hey there, a magic link was created to access your account</Text>
          <Section style={buttonSection}>
            <Button style={button} href={url}>
              Sign in
            </Button>
          </Section>

          <Text
            style={{
              ...text,
              marginTop: '24px',
              fontSize: '12px',
              fontStyle: 'italic',
            }}
          >
            If you didn&apos;t request this, please ignore this email.
          </Text>
        </Section>
        <Text style={footerText}>
          This message was produced and distributed by{' '}
          <Link href={host ?? 'avclients.ldvloper'} target='_blank' style={link}>
            {companyName ?? 'Sample Company'}
          </Link>
          .
        </Text>
      </Container>
    </Body>
  </Html>
);

export default VerifyIdentityEmail;

const main: CSSProperties = {
  color: '#24292e',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  backgroundColor: '#eee',
  marginTop: '20px',
  maxWidth: '360px',
  margin: '0 auto',
  padding: '68px 0 130px',
};

const h1: CSSProperties = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '15px',
};

const section: CSSProperties = {
  backgroundColor: '#fff',
  margin: '0 auto',
  padding: '24px',
  border: 'solid 16px #eee',
  borderRadius: '16px',
  textAlign: 'center' as const,
};

const text: CSSProperties = {
  fontSize: '16px',
  margin: '0 0 10px 0',
  textAlign: 'left' as const,
};

const buttonSection = {
  padding: '27px',
};

const button: CSSProperties = {
  fontSize: '14px',
  backgroundColor: '#28a745',
  color: '#fff',
  lineHeight: 1.5,
  borderRadius: '0.5em',
  textDecoration: 'none',
  display: 'block',
  padding: '12px 24px',
  textTransform: 'capitalize' as const,
};

const footerText: CSSProperties = {
  ...text,
  fontSize: '12px',
  padding: '0 20px',
  textAlign: 'center' as const,
};

const link: CSSProperties = {
  color: '#0366d6',
  fontSize: '12px',
};
