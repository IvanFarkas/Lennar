import React from 'react';
import PropTypes from 'prop-types';
import { Auth0Provider as Auth0 } from '@auth0/auth0-react';
import { getConfig } from '../../../../config';

// Please see https://auth0.github.io/auth0-react/interfaces/Auth0ProviderOptions.html for a full list of the available properties on the provider
const config = getConfig();
const Auth0Provider = ({ children }) => {
  return (
    <Auth0 domain={config.domain} clientId={config.clientId} audience={config.audience} redirectUri={window.location.origin}>
      {children}
    </Auth0>
  );
};

export default Auth0Provider;
Auth0Provider.propTypes = {
  children: PropTypes.node,
};
