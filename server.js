const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const subdomain = require('express-subdomain');
const MailerRoutes = require("./routes/MailerRoutes");
const cors = require('cors')
dotenv.config({ path: "./.env" });
const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Turbo mailer listening at http://localhost:${port}`);
  app.use(subdomain('api', MailerRoutes));
  app.use("/api/mail", MailerRoutes);
});
app.use(express.json())
app.use(cors())

