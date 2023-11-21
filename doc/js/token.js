/*const { google } = require('googleapis');
const open = require('open');

const oauth2Client = new google.auth.OAuth2(
  '750162231655-oe3ch6tcc7fakit5a0983tpd6qrvmhm6.apps.googleusercontent.com',
  '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',
  'http://localhost:4000'  // Substitua pela URI de redirecionamento autorizada
);

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: 'https://www.googleapis.com/auth/gmail.send',
});

open(authUrl);*/

const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');
const readline = require('readline');

const CLIENT_ID = '750162231655-d6sjjqhvoi9v7gnslpkaa21iqenjaf22.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:4000';

const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];

const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// Gere a URL de autorização
const authorizeUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
});

console.log('Abra a seguinte URL no navegador para obter o código de autorização:');
console.log(authorizeUrl);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Digite o código de autorização aqui: ', async (code) => {
  rl.close();

  try {
    // Troque o código de autorização pelo access token e refresh token
    const { tokens } = await oauth2Client.getToken(code);

    // Imprima os tokens
    console.log('Access Token:', tokens.access_token);
    console.log('Refresh Token:', tokens.refresh_token);
  } catch (err) {
    console.error('Erro ao obter tokens:', err);
  }
});
