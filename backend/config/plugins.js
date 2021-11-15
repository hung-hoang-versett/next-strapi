module.exports = ({ env }) => ({
  email: {
    provider: 'smtp',
    providerOptions: {
      host: 'smtp.mailtrap.io', //SMTP Host
      port: 2525   , //SMTP Port
      // secure: true,
      username: '69de88bc62fae5',
      password: '8531f70701f13a',
      // rejectUnauthorized: true,
      requireTLS: true,
      // connectionTimeout: 1,
    },
    settings: {
      from: 'hung.hoangthe@getventive.com',
      replyTo: 'hung.hoangthe@getventive.com',
    },
  },
});
