const express = require("express");
const cors = require("cors");
const port = 5000;
const app = express();
app.use(cors());
const weatherRouter = require("./routers/routes/weather");
app.use(express.json());


app.use("/weather", weatherRouter);
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
