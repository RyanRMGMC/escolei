const nodemailer = require('nodemailer');
const express = require('express');
const email_send = express();
const fs = require('fs');

const port = 4000;

// Configurações do transporte de e-mail usando SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'escoleiedu@gmail.com',
    pass: 'ksaa cqtw schz nnhe', // Use a senha de aplicativo aqui
  },
});

// Configurações do e-mail
email_send.get('/enviar-email', (req, res) => {
  const destinatario = req.query.destinatario;

  const mailOptions = {
    from: 'escoleiedu@gmail.com',
    to: destinatario,
    subject: 'Materiais de Estudo',
    text: 'Olá! Segue arquivo com materiais de estudo do Portal ESCOLEI!',
    attachments: [
      {
        filename: 'materiais_de_estudo.zip',
        content: fs.createReadStream('../Projeto ESCOLEI/materiais_de_estudo/artigos_definidos_e_indefinidos/materiais_de_estudo.zip')
      }
    ]
  };

    // Envia o e-mail
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Erro ao enviar e-mail:', error);
        res.status(500).send('Erro ao enviar e-mail');
      } else {
        console.log('E-mail enviado:', info.response);
        res.status(200).send('E-mail enviado com sucesso!');
      }
  });
});

email_send.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});