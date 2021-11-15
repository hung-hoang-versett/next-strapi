const forgotPasswordTemplate = require('./email-templates/forgot-password');

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    url: '/dashboard', // We change the path to access to the admin (highly recommended for security reasons).
    auth: {
      secret: env('ADMIN_JWT_SECRET', '42c375d702a6a6d901231041d1ee6498'),
    },
    forgotPassword: {
      from: 'hung.hoangthe@getventive.com',
      replyTo: 'hung.hoangthe@getventive.com',
      emailTemplate: forgotPasswordTemplate,
    },
  },
});
