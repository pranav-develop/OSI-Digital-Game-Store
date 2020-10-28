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

module.exports.addGame = function(details){
    const game = new Game({
        gameName: details.gameName,
        gameGenre: details.gameGenre,
        imagePath: details.imagePath,
        backImg: details.backImg,
        gameDesc: details.gameDesc,
        gameInfo: {
            developer: details.developer,
            publisher: details.publisher,
            releaseDate: details.releaseDate,
            rating: details.rating,
            platforms: details.platforms,
            languages: details.languages
        },
        gameEditions: [ 
            {
                benefitsName: details.gameBenifitsName1,
                benefits: details.gameBenifitsBenefit1,
                price: details.gameBenifitsPrice1,
            },
            {
                benefitsName: details.gameBenifitsName2,
                benefits: details.gameBenifitsBenefit2,
                price: details.gameBenifitsPrice2,
            }
        ],
        systemRequirements: {
            minimum: {
                os: details.minos,
                memory: details.minMemory,
                processor: details.minProcessor,
                videoCardMemory: details.minVideoMem,
                hardDiskSpace: details.minSpace,
                videoCard: details.minVideoCard,
                sound: details.minSound
            },
            recommanded: {
                os: details.os,
                memory: details.memory,
                processor: details.processor,
                videoCardMemory: details.videoCardMemory,
                hardDiskSpace: details.space,
                videoCard: details.videoCard,
                sound: details.sound
            }
        }
    });
    game.save();
};

module.exports.getGamesWithGenure = function(genure) {
    Game.find({gameGenre: genure}, function(error, gameList){
        console.log(gameList);
        return gameList;
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


