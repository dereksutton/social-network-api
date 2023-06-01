const mongoose = require('mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialnetworkapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSeed = [
    {
        username: "MichaelJordan",
        email: "michaeljordan@example.com"
    },
    {
        username: "AmeliaEarhart",
        email: "ameliaearhart@example.com"
    },
    {
        username: "FrankSinatra",
        email: "franksinatra@example.com"
    }
];

const thoughtSeed = [
    {
        thoughtText: "I believe I can fly! #believe",
        username: "MichaelJordan",
        reactions: [{
            reactionBody: "You've got this, Michael!",
            username: "AmeliaEarhart",
        }]
    },
    {
        thoughtText: "Fly me to the moon!",
        username: "FrankSinatra",
        reactions: [{
            reactionBody: "Hop on my back, Frank. I'll take you to the moon!",
            username: "MichaelJordan",
        },{
            reactionBody: "Let's take a ride in my airplane!",
            username: "AmeliaEarhart",
        }]
    },
    {
        thoughtText: "I'm thinking about flying across the Pacific Ocean in my airplane!",
        username: "AmeliaEarhart",
        reactions: [{
            reactionBody: "Something tells me you shouldn't do that...",
            username: "FrankSinatra",
        },{
            reactionBody: "Don't listen to Frank. Heroes get remembered, but Legends never die.",
            username: "MichaelJordan",
        }]
    }   
];

User.deleteMany({})
    .then(() => User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.insertedCount + " records inserted!");
    })
    .then(() => Thought.deleteMany({}))
    .then(() => Thought.collection.insertMany(thoughtSeed))
    .then(data => {
        console.log(data.insertedCount + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });