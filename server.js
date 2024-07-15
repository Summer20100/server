const express = require("express");
const routeHall = require("./routes/routeHall");
const routeChair = require("./routes/routeChair");

const app = express();
const PORT = process.env.SERVER_PORT || 3001;
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello My APP!");
});

app.use("/api/chair", routeChair);
app.use("/api/hall", routeHall);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
