const PORT = process.env.PORT || 5000;
const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.status(200).json({
    message: "It works!",
  });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
