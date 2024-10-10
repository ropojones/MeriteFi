 import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44391/',
  redirectUri: baseUrl,
  clientId: 'meritefi_App',
  responseType: 'code',
  scope: 'offline_access meritefi',
  requireHttps: true,
};

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'meritefi',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44391',
      rootNamespace: 'meritefi',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
} as Environment;
