const express = require('express');
require('dotenv').config();

const Port = process.env.Port;
const app = express();



app.listen(Port,()=>console.log(`Server is runnig on http://localhost:${Port}`));
