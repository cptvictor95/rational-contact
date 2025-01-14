import express from "express";
import contactRoutes from "./routes/index";
import { bootstrap } from "./database/bootstrap";

// Variables
const port = 8080;
const connection_string = "mongodb://localhost:27017/rational-contact";

const app = express();

bootstrap(connection_string);

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Root API route 🌱");
});

app.use("/api/contact", contactRoutes);

app.listen(port, () => {
  console.info(`Server running on port ${port} 🚀🚀🚀`);
});
