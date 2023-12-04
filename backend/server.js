const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config(); // Pour charger les variables d'environnement depuis un fichier .env

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/envoyer-email', (req, res) => {
  const { nom, prenom, objet, message } = req.body;

  // Configurer le transporteur SMTP pour nodemailer (utilisez vos propres informations)
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: process.env.EMAIL_UTILISATEUR,
      pass: process.env.EMAIL_MOT_DE_PASSE
    }
  });

  // Construire le message d'e-mail
  const mailOptions = {
    from: process.env.EMAIL_UTILISATEUR,
    to: process.env.EMAIL_DESTINATAIRE,
    subject: `Nouveau message de ${nom} ${prenom} - ${objet}`,
    text: message
  };

  // Envoyer l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('E-mail envoyé : ' + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});