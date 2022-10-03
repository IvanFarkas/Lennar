import createAuth0Client from '@auth0/auth0-spa-js';
import { getConfig } from '../../../../config';

// Please see https://auth0.github.io/auth0-react/interfaces/Auth0ProviderOptions.html for a full list of the available properties on the provider
const config = getConfig();
const Auth0Config = async () => {
  return await createAuth0Client({
    domain: config.domain,
    clientId: config.clientId,
    audience: config.audience,
    redirectUri: window.location.origin,

    // domain: 'dev-obk84v4k.auth0.com',
    // client_id: '617CCZ9ZFiNYIw9KLRy6qbkh1HK3KgOJ',
    // audience: 'https://dev-obk84v4k.auth0.com/userinfo',
    // redirect_uri: 'https://crema-react.firebaseapp.com/application/crm',
  });
};

export default Auth0Config;
