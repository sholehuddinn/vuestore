const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./app/models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then((result) => {
   console.log('Data Base Connected') 
  }).catch((err) => {
    console.log("Not Connect " + err);
    process.exit();
  });


app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Simple REST API!'
  })
})

require('./app/routes/product.route.js')

app.listen(port,  () => {
  console.log(`server listening on ${port}`)
})