const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const juiceRoutes = require('./routes/juiceUser');
const User = require('./models/user');

const MONGODB_URI ='mongodb+srv://juice:<password>@cluster0.ittcq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


const app = express();


const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});


app.set('view engine', 'ejs');
app.set('views', 'views');






app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});


app.use(juiceRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });