const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const logger = require('morgan');

const aboutRoutes = require('./routes/about.js');

app.use(cors());
app.use(logger('dev'));

app.use('/about', aboutRoutes);



if(process.env.NODE_ENV ==='production'){
    app.use(express.static(path.join(__dirname,"./client", "build")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build' ,'index.html'));
    });
}

const PORT =  process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log("Server is running on port",PORT );
  })