const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const transferRoutes = require('./routes/transfer');
const accountRoutes = require('./routes/accounts');
const cardRoutes = require('./routes/cards');
const messagesRoutes = require('./routes/messages');
const statsRoutes = require('./routes/stats');

const app = express();

const mongodbUrl =
  'mongodb+srv://<name>:<password>@cluster0.wef6o.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(
  mongodbUrl,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  err => {
    if (err) throw err;
    console.log('database connected');
  }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PATCH,PUT,DELETE,OPTIONS'
  );
  next();
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/transfers', transferRoutes);
app.use('/api/accounts', accountRoutes);
app.use('/api/cards', cardRoutes);
app.use('/api/messages', messagesRoutes);
app.use('/api/stats', statsRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
