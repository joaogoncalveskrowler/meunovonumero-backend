const { Resend } = require('resend');
require('dotenv').config();

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(to, subject, htmlContent) {
  return await resend.emails.send({
    from: 'Seu Nome <no-reply@meunovonumero.com>',
    to,
    subject,
    html: htmlContent
  });
}

module.exports = sendEmail;