//jshint esversion:6
const express = require("express");
const ejs = require("ejs");
const mongoose  = require("mongoose");
const { static } = require("express");
const bodyParser = require("body-parser");
const app = express();
const dataBase = require(__dirname + "/data.js");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", 'ejs');
app.use(static("public/"));

app.get("/", function(request, response){
    const parameters = {
        name: "store"
    };
    response.render("index", parameters);
});


app.get("/games/:gameName", function(request, response){
    const parameters = {
        gameDetails: {
            gameName: "Star Wars JEDI : Fallen Order",
            imagePath: "img/Game poster/starwars_jedai.jpg",
            backImg: "img/gameBack1(1).jpg",
            gameDesc: "Star Wars Jedi: Fallen Order is an action-adventure game developed by Respawn Entertainment and published by Electronic Arts. It was released for Windows, PlayStation 4, and Xbox One on November 15, 2019.",
            gameInfo: {
                developer: "Respawn Entertainment",
                publisher: "EA Games",
                releaseDate: "December 3rd, 2019",
                rating: "Mature 17+",
                platforms: ["img/windows_icon.png"],
                languages: ["English", "French", "Spanish"]
            },
            gameEditions: [ 
                {
                    benefitsName: "Buy Star Wars JEDI : Fallen Order",
                    benefits: "Full Game",
                    price: "59"
                },
                {
                    benefitsName: "Buy Deluxe Star Wars JEDI : Fallen Order",
                    benefits: "Full Game Chrims skin - 1Pari fashfahfhakjhfjkakf iujhkjash",
                    price: "59"
                }
            ],
            systemRequirements: {
                minimum: {
                    os: "Window Vista Service Pack 2 32-bit",
                    memory: "4GB",
                    processor: "Intel Core 2 DUO 2.4 GHz / AMD Athlon X2 2.7GHz",
                    videoCardMemory: "512 MB",
                    hardDiskSpace: "20 GB Free Space",
                    videoCard: "ATI Radeon HD 3870 / NVDIA 8800 GT / Intel HD 3000 Integrated Graphics",
                    sound: "DirectX Compactible"
                },
                recommanded: {
                    os: "64-bit Winodows 7 / 8.1 / 10",
                    memory: "8 GB",
                    processor: "Ryzen 7 1700 or Equivalent / i7-6700k or Equivalent",
                    videoCardMemory: "2 GB",
                    hardDiskSpace: "20 GB Free Space",
                    videoCard: "GTX 1070/1660Ti or Equivalent / RX Vega 56 or Equivalent",
                    sound: "DirectX Compactible"
                }
            }
        }
    }
    response.render("gamepage", parameters);
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



