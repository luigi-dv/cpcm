'use server';

import { renderAsync } from '@react-email/render';
import { EmailConfig } from '@auth/core/providers';
import { sendEmail } from '@/actions/emailActions';
import VerifyIdentityEmail from '@/emails/VerifyIdentityEmail';

/**
 * Sends a custom verification request to the user's email address.
 */
export async function sendCustomVerificationRequest(params: {
  identifier: string;
  url: string;
  provider: EmailConfig;
  companyName?: string;
}) {
  const { identifier: to, url, companyName } = params;
  const { host } = new URL(url);
  const html = await renderAsync(VerifyIdentityEmail({ url, host, companyName }));

  await sendEmail({
    to: [to],
    subject: 'Sign in to your account',
    text: `Sign in to your account by clicking the following link: ${url}`,
    html: html,
  });
}
