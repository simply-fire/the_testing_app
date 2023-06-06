const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const http = require('http')
const { Server } = require('socket.io');


//load ev varibales
dotenv.config({ path: './config/config.env' })


// connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable cors
app.use(cors());
const server = module.exports = http.createServer(app);



// routes


const PORT = process.env.PORT;

app.use('/adminDashboard', require('./Routes/routesAdmin'));
// app.use('/stuDashboard', require('./Routes/routesStudent'));


server.listen(PORT, () => {
    console.log(`server is running in ${process.env.NODE_ENV} mode on port  ${PORT} `);
})





