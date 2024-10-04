const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:8100"
}

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync().then(() => {
    console.log("La base de datos furula");
})

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db");
// })

app.get("/", (req, res) => {
  res.json({ message: "Lo minimo que debe aparecer" })
})

require("./routes/coffee.routes.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})