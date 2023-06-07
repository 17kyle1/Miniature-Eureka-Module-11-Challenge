const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.use(express.static(path.join(__dirname + '/public')));
require('./db/db.json')
require('./Routes/api-route.js')(app);
require('./Routes/html-route.js')(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);