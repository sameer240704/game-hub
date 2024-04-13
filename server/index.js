const express = require("express");
require("dotenv").config();

const app = express();

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening to PORT ${process.env.PORT}`);
});
