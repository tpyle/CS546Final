// Cleans and Seeds the database
let data = require ( "./data" );
const comments = data.comments;
const favorites = data.favorites;
const ratings = data.ratings;
const recipes = data.recipes;
const users = data.users;
const bcrypt = require('bcrypt');
const saltRounds = 16;
const mongoCollections = require("./config/mongoCollections");
const end = mongoCollections.end;

async function main() {

    await users.empty();
    await recipes.empty();
    await ratings.empty();
    await favorites.empty();
    await comments.empty();

    let user = [];
    user.push({username:"Bobby", password:"Coolio", email:"bobby@dank.me", description:"I'm a cool dude I guess"});
    user.push({username:"DankMeister", password:"memelord278", email:"dank@meist.er", description:"Memes are the greatest of all of God's creations. Hail Memes."});
    user.push({username:"supergenius", password:"myintelligenceisbeyondhumanunderstanding", email:"patrickstar@bottom.net", description:"The inner machinations of my mind are an engima"});
    user.push({username:"thedarklord", password:"Iwillhavetheonering", email:"sauron@kitty.us", description:"The Powers of the Ring are MINE for the taking - these recipes will be the implements of my revenge!"});

    let us = [];
    for ( let i = 0; i < user.length; i++ ) {
        let user2 = user[i];
        let hash = bcrypt.hashSync(user2.password,saltRounds);
        let data = await users.createUser(hash, user2.username, user2.email, user2.description);
        us.push(data);
    }

    let recipe = [];
    recipe.push({});


    end();
}

main();