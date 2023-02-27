const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 9000;

//routes
const movieRoutes = require("./routes/movie");
const moviecastRoutes = require("./routes/moviecast");
const moviegenres = require("./routes/moviegenres");
const genresRoutes = require("./routes/genres");
const ratingRoutes = require("./routes/rating");
const actorRoutes = require("./routes/actor");
const directorRoutes = require("./routes/director");
const movieDirectionRoutes = require("./routes/moviedirection");
const reviewerRoutes = require("./routes/reviewer");

//depracated
mongoose.set('strictQuery', true);

//middleware
app.use(express.json());
app.use("/api", movieRoutes);
app.use("/api", moviecastRoutes);
app.use("/api", moviegenres);
app.use("/api", genresRoutes);
app.use("/api", ratingRoutes);
app.use("/api", actorRoutes);
app.use("/api", directorRoutes);
app.use("/api", movieDirectionRoutes);
app.use("/api", reviewerRoutes);

//routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

//mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("Server listening on port", port));
