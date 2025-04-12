const express = require("express");
const mongoose = require("mongoose");
const bookRouter = require('./routes/route');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 8000;

// Middleware
// app.use(cors());
app.use(cors({
  origin: 'http://localhost:5175',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

// Routes
app.use("/book", bookRouter);
app.options('*', cors());
app.get("/", (req, res) => {
  res.status(200).send("Hello Books");
});

// Connect to MongoDB before starting the server
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CRUD",
  // {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // }
).then(() => {
  console.log("Connected to MongoDB");

  // Start server after DB connects
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error("MongoDB connection failed:", err);
});
