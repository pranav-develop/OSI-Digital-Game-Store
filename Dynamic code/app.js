//jshint esversion:6
const express = require("express");
const ejs = require("ejs");
const mongoose  = require("mongoose");
const upload = require("express-fileupload");
const { static } = require("express");
const bodyParser = require("body-parser");
const app = express();
// const dataBase = require(__dirname + "/data.js");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", 'ejs');
app.use(static("public/"));
app.use(upload());

app.get("/", function(request, response){
    const parameters = {
        name: "store"
    };
    response.render("index", parameters);
});

mongoose.connect("mongodb://localhost:27017/digitalStoreDB", { useUnifiedTopology: true, useNewUrlParser: true });
const gameListSchema = new mongoose.Schema({
    gameName: String,
    gameTags: Array,
    imagePath: String,
    backImg: String,
    gameDesc: String,
    gameInfo: Object,
    gameEditions: Array,
    systemRequirements: Object
});
const Game = mongoose.model("game", gameListSchema);

app.post("/admin-input", function (request, response){
    if(request.files){
        let poster = request.files.gamePoster;
        poster.mv("./public/img/gamePoster/" + poster.name , function (err){
            if(err){
                response.send(err);
            }
        });
        let bPoster = request.files.gamePosterB;
        bPoster.mv("./public/img/gamePosterB/" + bPoster.name, function (err) { 
            if(err){
                response.send(err);
            }
        });
    } 
    const game = new Game({
        gameName: request.body.gameName,
        gameGenre: request.body.gameGenre,
        imagePath: "img/gamePoster/"+ request.files.gamePoster.name,
        backImg: "img/gamePosterB/"+ request.files.gamePosterB.name,
        gameDesc: request.gameDesc,
        gameInfo: {
            developer: request.body.developer,
            publisher: request.body.publisher,
            releaseDate: request.body.releaseDate,
            rating: request.body.rating,
            platforms: request.body.platforms,
            languages: request.body.languages
        },
        gameEditions: [ 
            {
                benefitsName: request.body.gameBenifitsName1,
                benefits: request.body.gameBenifitsBenefit1,
                price: request.body.gameBenifitsPrice1,
            },
            {
                benefitsName: request.body.gameBenifitsName2,
                benefits: request.body.gameBenifitsBenefit2,
                price: request.body.gameBenifitsPrice2,
            }
        ],
        systemRequirements: {
            minimum: {
                os: request.body.minos,
                memory: request.body.minMemory,
                processor: request.body.minProcessor,
                videoCardMemory: request.body.minVideoMem,
                hardDiskSpace: request.body.minSpace,
                videoCard: request.body.minVideoCard,
                sound: request.body.minSound
            },
            recommanded: {
                os: request.body.os,
                memory: request.body.memory,
                processor: request.body.processor,
                videoCardMemory: request.body.videoCardMemory,
                hardDiskSpace: request.body.space,
                videoCard: request.body.videoCard,
                sound: request.body.sound
            }
        }
    });
    game.save();
    response.redirect("/admin-portal");
});

app.get("/games/:gameName", function(request, response){
    Game.findOne({gameName: "test"}, function(error, game){
        if(error){
            console.log(error);
        } else{
            let parameters = {
                gameDetails: game,
            };
            response.render("gamepage", parameters);
        }
    });
});

app.get("/profile", function(request, response){
    const params = {
        name: "natasha",
        status: "Online",
        achivementsCount: 392,
        originpoints: 3190, 
    }
    response.render("profile");
});

app.get("/settings", function(request, response){
    const params = {

    };
    response.render("settings", params);
});

app.get("/admin", function(request, response){
    response.render("admin");
});

app.get("/admin-portal", function(request, response){
    response.render("admin-page");
});

app.get("/:pageName", function(request, response){
    if(request.params.pageName == "home" || request.params.pageName == "mygames" || request.params.pageName == "originaccess"){
        const parameters = {
            name: request.params.pageName 
        };
        response.render(request.params.pageName, parameters);
    }
    response.sendStatus(404);
});

app.listen("3000", function(){
    console.log("Server is running on port 3000");
});



