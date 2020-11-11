//jshint esversion:6
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
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

exports.addGame = function(details){
    const game = new Game({
        gameName: details.body.gameName,
        gameGenre: details.body.gameGenre,
        imagePath: "img/gamePoster/"+ details.files.gamePoster.name,
        backImg: "img/gamePosterB/"+ details.files.gamePosterB.name,
        gameDesc: details.gameDesc,
        gameInfo: {
            developer: details.body.developer,
            publisher: details.body.publisher,
            releaseDate: details.body.releaseDate,
            rating: details.body.rating,
            platforms: details.body.platforms,
            languages: details.body.languages
        },
        gameEditions: [ 
            {
                benefitsName: details.body.gameBenifitsName1,
                benefits: details.body.gameBenifitsBenefit1,
                price: details.body.gameBenifitsPrice1,
            },
            {
                benefitsName: details.body.gameBenifitsName2,
                benefits: details.body.gameBenifitsBenefit2,
                price: details.body.gameBenifitsPrice2,
            }
        ],
        systemRequirements: {
            minimum: {
                os: details.body.minos,
                memory: details.body.minMemory,
                processor: details.body.minProcessor,
                videoCardMemory: details.body.minVideoMem,
                hardDiskSpace: details.body.minSpace,
                videoCard: details.body.minVideoCard,
                sound: details.body.minSound
            },
            recommanded: {
                os: details.body.os,
                memory: details.body.memory,
                processor: details.body.processor,
                videoCardMemory: details.body.videoCardMemory,
                hardDiskSpace: details.body.space,
                videoCard: details.body.videoCard,
                sound: details.body.sound
            }
        }
    });
    game.save();
};

exports.getGame = function(name){
    Game.findOne({gameName: "test"}, function(error, game){
        if(error){
            console.log(error);
        } else{
            return game;
        }
    });
};

let data  = {
    gameName: "Star Wars JEDI : Fallen Order",
    imagePath: "img/Game poster/starwars_jedai.jpg",
    backImg: "img/gameBack1(1).jpg",
    gameDesc: "Star Wars Jedi: Fallen Order is an action-adventure game developed by Respawn Entertainment and published by Electronic Arts. It was released for Windows, PlayStation 4, and Xbox One on November 15, 2019.",
    developer: "Respawn Entertainment",
    publisher: "EA Games",
    releaseDate: "December 3rd, 2019",
    rating: "Mature 17+",
    platforms: ["img/windows_icon.png"],
    languages: ["English", "French", "Spanish"],
    gameBenefitsName1: "Buy Star Wars JEDI : Fallen Order",
    gameBenifitsBenefit1: "Full Game",
    gameBenifitPrice1: "59",
    gameBenefitsName2: "Buy Deluxe Star Wars JEDI : Fallen Order",
    gameBenifitsBenefit2: "Full Game Chrims skin - 1Pari fashfahfhakjhfjkakf iujhkjash",
    gameBenifitPrice2: "59",
    minos: "Window Vista Service Pack 2 32-bit",
    minMemory: "4GB",
    minProcessor: "Intel Core 2 DUO 2.4 GHz / AMD Athlon X2 2.7GHz",
    minVideoMem: "512 MB",
    minSpace: "20 GB Free Space",
    minVideoCard: "ATI Radeon HD 3870 / NVDIA 8800 GT / Intel HD 3000 Integrated Graphics",
    minSound: "DirectX Compactible",
    os: "64-bit Winodows 7 / 8.1 / 10",
    memory: "8 GB",
    processor: "Ryzen 7 1700 or Equivalent / i7-6700k or Equivalent",
    videoCardMemory: "2 GB",
    space: "20 GB Free Space",
    videoCard: "GTX 1070/1660Ti or Equivalent / RX Vega 56 or Equivalent",
    sound: "DirectX Compactible",
};

// const parameters = {
//         gameDetails: {
//             gameName: "Star Wars JEDI : Fallen Order",
//             imagePath: "img/Game poster/starwars_jedai.jpg",
//             backImg: "img/gameBack1(1).jpg",
//             gameDesc: "Star Wars Jedi: Fallen Order is an action-adventure game developed by Respawn Entertainment and published by Electronic Arts. It was released for Windows, PlayStation 4, and Xbox One on November 15, 2019.",
//             gameInfo: {
//                 developer: "Respawn Entertainment",
//                 publisher: "EA Games",
//                 releaseDate: "December 3rd, 2019",
//                 rating: "Mature 17+",
//                 platforms: ["img/windows_icon.png"],
//                 languages: ["English", "French", "Spanish"]
//             },
//             gameEditions: [ 
//                 {
//                     benefitsName: "Buy Star Wars JEDI : Fallen Order",
//                     benefits: "Full Game",
//                     price: "59"
//                 },
//                 {
//                     benefitsName: "Buy Deluxe Star Wars JEDI : Fallen Order",
//                     benefits: "Full Game Chrims skin - 1Pari fashfahfhakjhfjkakf iujhkjash",
//                     price: "59"
//                 }
//             ],
//             systemRequirements: {
//                 minimum: {
//                     os: "Window Vista Service Pack 2 32-bit",
//                     memory: "4GB",
//                     processor: "Intel Core 2 DUO 2.4 GHz / AMD Athlon X2 2.7GHz",
//                     videoCardMemory: "512 MB",
//                     hardDiskSpace: "20 GB Free Space",
//                     videoCard: "ATI Radeon HD 3870 / NVDIA 8800 GT / Intel HD 3000 Integrated Graphics",
//                     sound: "DirectX Compactible"
//                 },
//                 recommanded: {
//                     os: "64-bit Winodows 7 / 8.1 / 10",
//                     memory: "8 GB",
//                     processor: "Ryzen 7 1700 or Equivalent / i7-6700k or Equivalent",
//                     videoCardMemory: "2 GB",
//                     hardDiskSpace: "20 GB Free Space",
//                     videoCard: "GTX 1070/1660Ti or Equivalent / RX Vega 56 or Equivalent",
//                     sound: "DirectX Compactible"
//                 }
//             }
//         }
//     }
