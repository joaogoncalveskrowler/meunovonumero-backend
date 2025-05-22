import '../lib/utils';


const express = require('express');
const cors = require('cors');
const sendEmail = require('./resendEmail');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { to, subject, html } = req.body;

  try {
    const result = await sendEmail(to, subject, html);
    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Backend rodando em http://localhost:${PORT}`));