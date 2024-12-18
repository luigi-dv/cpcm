import * as React from 'react';

import { Head } from '@react-email/head';
import { Body } from '@react-email/body';
import { Text } from '@react-email/text';
import { Link } from '@react-email/link';
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';
import { Section } from '@react-email/section';
import { Heading } from '@react-email/heading';
import { Container } from '@react-email/container';

interface VerifyIdentityEmailProps {
  url?: string;
  host?: string;
}

const SampleEmail = ({ url, host }: VerifyIdentityEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Text style={tertiary}>Verify Your Identity</Text>
        <Heading style={secondary}>Click the button below to log in to your account.</Heading>
        <Section style={buttonContainer}>
          <Button href={url} style={button}>
            Sign In
          </Button>
        </Section>
        <Text style={paragraph}>Not expecting this email?</Text>
        <Text style={paragraph}>
          Contact{' '}
          <Link href='mailto:services@ldvloper.com' style={link}>
            services@ldvloper.com
          </Link>{' '}
          if you did not request to login.
        </Text>
      </Container>
      <Text style={footer}>Powered by Ldvloper.</Text>
    </Body>
  </Html>
);

export default SampleEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #eee',
  borderRadius: '5px',
  boxShadow: '0 5px 10px rgba(20,50,70,.2)',
  marginTop: '20px',
  maxWidth: '360px',
  margin: '0 auto',
  padding: '68px 0 130px',
};

const imageSection = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const logo = {
  margin: '0 auto',
  width: '212',
  height: '120',
};

const tertiary = {
  color: '#0a85ea',
  fontSize: '11px',
  fontWeight: 700,
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
  height: '16px',
  letterSpacing: '0',
  lineHeight: '16px',
  margin: '16px 8px 8px 8px',
  textTransform: 'uppercase' as const,
  textAlign: 'center' as const,
};

const secondary = {
  color: '#000',
  display: 'inline-block',
  fontFamily: 'HelveticaNeue-Medium,Helvetica,Arial,sans-serif',
  fontSize: '20px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '0',
  marginTop: '0',
  textAlign: 'center' as const,
};

const buttonContainer = {
  padding: '27px',
};

const paragraph = {
  color: '#444',
  fontSize: '15px',
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
  letterSpacing: '0',
  lineHeight: '23px',
  padding: '0 40px',
  margin: '0',
  textAlign: 'center' as const,
};

const link = {
  color: '#444',
  textDecoration: 'underline',
};

const footer = {
  color: '#000',
  fontSize: '12px',
  fontWeight: 800,
  letterSpacing: '0',
  lineHeight: '23px',
  margin: '0',
  marginTop: '20px',
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
  textAlign: 'center' as const,
  textTransform: 'uppercase' as const,
};

const button = {
  backgroundColor: '#28a745',
  borderRadius: '3px',
  fontWeight: '600',
  color: '#fff',
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '11px 23px',
};
