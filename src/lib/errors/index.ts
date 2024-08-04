import { AuthError } from '@auth/core/errors';
export const AUTH_ERROR = new AuthError();

export const errorMessageDisplay = (errorMessage: typeof AUTH_ERROR.type) => {
  switch (errorMessage) {
    case 'AccessDenied':
      return 'You do not have access to our service at this time, please request access from your administrator.';
    case 'AdapterError':
      return "There was an issue with the adapter configuration. Please check the adapter settings to ensure they are correct. If the problem persists, you may need to consult the adapter's documentation or support for further assistance.";
    case 'CallbackRouteError':
      return 'The callback route appears to be misconfigured. This could be due to an incorrect URL or routing issue. Verify that the callback URL matches what is specified in your settings, and ensure your routing logic is properly set up.';
    case 'ErrorPageLoop':
      return 'The application seems to be stuck in a loop redirecting to the error page. This could be caused by a misconfigured error handling route. Review your route configurations and error handling logic to resolve this issue.';
    case 'EventError':
      return 'An error occurred while handling an event, which may be due to an unexpected condition or a bug in the event handler. Check the event handlers in your code and look for any potential issues or exceptions that might be thrown.';
    case 'InvalidCallbackUrl':
      return 'The callback URL provided is invalid. Ensure that the URL is correctly formatted and matches the configured URL in your settings. This might also involve checking the environment variables or configuration files for discrepancies.';
    case 'CredentialsSignin':
      return 'There was an issue signing in with credentials. This might be due to incorrect user credentials or an issue with the authentication service. Double-check the username and password, and ensure that your authentication service is functioning properly.';
    case 'InvalidEndpoints':
      return 'One or more endpoints are invalid or misconfigured. Check your API endpoint settings to ensure that they are correct and accessible. This might involve reviewing the endpoint URLs, HTTP methods, and any required parameters.';
    case 'InvalidCheck':
      return "The security check failed, which could indicate an issue with the request's integrity or authentication. Ensure that the request meets all security requirements, such as having valid tokens or parameters.";
    case 'JWTSessionError':
      return 'An issue occurred with the JWT session, possibly due to an invalid or expired token. Validate your JWT token and ensure proper session management, including handling token expiration and renewal.';
    case 'MissingAdapter':
      return 'The specified adapter could not be found. Make sure the adapter is correctly installed and configured. This might involve verifying that the adapter package is included in your dependencies and that it is properly initialized in your application.';
    case 'MissingAdapterMethods':
      return "Required methods are missing in the adapter. Verify the adapter implementation to ensure all necessary methods are defined and correctly implemented. Refer to the adapter's documentation for details on the required methods.";
    case 'MissingAuthorize':
      return 'Authorization is required but missing. Implement the necessary authorization logic in your application. This might include setting up proper access control mechanisms and ensuring that authorization tokens or credentials are correctly handled.';
    case 'MissingSecret':
      return 'A secret key is required but missing. Ensure your application has the correct secret configured, which might involve setting environment variables or updating configuration files with the necessary secret keys.';
    case 'OAuthAccountNotLinked':
      return 'The OAuth account is not linked. You need to link your account before proceeding. Follow the instructions to link your OAuth account with the application, which might involve authorizing the application to access your account information.';
    case 'OAuthCallbackError':
      return "There was an error in the OAuth callback process. Check the callback URL and parameters to ensure they are correct and properly handled. This might involve reviewing the OAuth provider's documentation and debugging the callback handling code.";
    case 'OAuthProfileParseError':
      return 'Failed to parse the OAuth profile. Verify the profile data structure to ensure it conforms to the expected format. This might involve checking the data returned by the OAuth provider and ensuring your parsing logic is robust.';
    case 'SessionTokenError':
      return 'An issue occurred with the session token. Ensure the token is valid and properly handled. This might involve checking the token generation, storage, and verification processes to ensure they are working as expected.';
    case 'OAuthSignInError':
      return 'There was an error during OAuth sign-in. Check the OAuth provider configuration and ensure that all required parameters and settings are correct. This might involve reviewing the OAuth flow and debugging any issues that arise during the sign-in process.';
    case 'EmailSignInError':
      return 'Unable to sign in with email. Verify the email address and try again. This might involve checking the email format, ensuring that the email exists in your database, and confirming that the email sign-in process is functioning properly.';
    case 'SignOutError':
      return 'An error occurred during sign out. Check session termination logic to ensure that the session is properly invalidated and all necessary clean-up processes are executed. This might involve reviewing the sign-out code and debugging any issues.';
    case 'UnknownAction':
      return 'The action requested is not recognized. Verify the action type and try again. This might involve checking the action name or type in your code and ensuring that it matches the expected actions.';
    case 'UnsupportedStrategy':
      return 'The authentication strategy is not supported. Check your strategy configuration to ensure it is valid and supported by the application. This might involve reviewing the available strategies and updating your configuration accordingly.';
    case 'InvalidProvider':
      return "The specified provider is invalid. Ensure the provider is correctly configured and supported by the application. This might involve checking the provider's settings and ensuring they match the expected configuration.";
    case 'UntrustedHost':
      return "The host is not trusted. Add the host to the list of trusted hosts to proceed. This might involve updating your application's configuration to include the host in the list of allowed or trusted hosts.";
    case 'Verification':
      return 'Verification failed. Ensure the verification process is correctly implemented and that all necessary steps are followed. This might involve checking the verification logic and ensuring that all required data and parameters are provided.';
    case 'MissingCSRF':
      return 'The CSRF token is missing or invalid. Include a valid CSRF token in your request to proceed. This might involve ensuring that the CSRF token is generated and included in all relevant requests and forms.';
    case 'AccountNotLinked':
      return 'The account is not linked to the specified service. Link the account and try again. Follow the instructions to link your account with the service, which might involve authorizing the application to access your account information.';
    case 'DuplicateConditionalUI':
      return 'Duplicate UI elements detected. Check for redundant UI component definitions and remove any duplicates. This might involve reviewing your UI code and ensuring that each component is uniquely defined and rendered.';
    case 'MissingWebAuthnAutocomplete':
      return 'The Web Authentication autocomplete attribute is missing. Add the attribute to the input element to proceed. This might involve updating your HTML or JavaScript code to include the necessary autocomplete attribute.';
    case 'WebAuthnVerificationError':
      return 'Verification using Web Authentication failed. Check the WebAuthn configuration to ensure it is correct. This might involve reviewing the WebAuthn implementation and ensuring that all necessary steps and parameters are correctly handled.';
    case 'ExperimentalFeatureNotEnabled':
      return "The experimental feature is not enabled. Enable it in your configuration settings to proceed. This might involve updating your application's configuration to turn on the experimental feature.";
    default:
      return 'Something went wrong, please try again later. If the issue persists, contact support for further assistance. Provide any relevant details about what you were doing when the error occurred to help diagnose and resolve the issue.';
  }
};
