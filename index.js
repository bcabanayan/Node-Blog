//require dependencies 

const express = require('express');
const cors = require('cors');
const middleware = require('./middleware.js');

// require routers

const userRouter = require('./userRouter.js');
const postRouter = require('./postRouter.js');

//define port and server

const PORT = 4001;
const server = express();

//use middleware

server.use(
    express.json(), 
    cors(), 
    middleware.capitalizeFirstLetter
);

//use routers

server.use('/users', userRouter)
server.use('/posts', postRouter)

//initiate listening

server.listen(PORT, err => {
    console.log(`Server is running on ${PORT}`);
})
