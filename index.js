const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialnetworkapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// log mongo queries being executed
mongoose.set('debug', true);

app.listen(PORT, () => console.log (`Now connected on localhost:${PORT}`));