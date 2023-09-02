const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

// Setting routers
const userRouter = require('./routers/userRouter');
const adminRouter = require('./routers/adminRouter');
// Connecting to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/Blossom", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.log(err);
  });
// Load environment variables from .env file
dotenv.config();

app.use(cookieParser());
// Middleware
app.use(express.urlencoded({extended:false}))

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Access'],
}));
app.use('/', userRouter);

// Set port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Set routes



