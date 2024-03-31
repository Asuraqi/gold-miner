var goldIm1 = new Image();
goldIm1.src="images/gold1.png";
var goldIm2 = new Image();
goldIm2.src="images/gold2.png";
var goldIm3 = new Image();
goldIm3.src="images/gold3.png";
var goldIm4 = new Image();
goldIm4.src="images/gold4.png";
var goldIm5 = new Image();
goldIm5.src="images/gold5.png";
var goldIm6 = new Image();
goldIm6.src="images/gold6.png";
var goldIm7 = new Image();
goldIm7.src="images/gold7.png";
var goldIm8 = new Image();
goldIm8.src="images/gold8.png";

var rockIm = new Image();
rockIm.src="images/Rock.png";
var diamondIM1 = new Image();
diamondIM1.src="images/diamond1.png";
var diamondIM2 = new Image();
diamondIM2.src="images/diamond2.png";
var diamondIM3 = new Image();
diamondIM3.src="images/diamond3.png";
class gold {
    constructor(game) {
        this.game = game;
        this.init();
    }

    init() {
        this.type = Math.floor(Math.random() * 100000) % 16;
        // 金矿1，2，8随机数
        this.random1 = Math.floor(Math.random() * 100000) % 3;
        this.arr1 = [goldIm1,goldIm2,goldIm8];
        // 金矿3，4，5，6，7随机数
        this.random2 = Math.floor(Math.random() * 100000) % 5;
        this.arr2 = [goldIm3,goldIm4,goldIm5,goldIm6,goldIm7];
        // 金矿1,2,3随机数
        this.random3 = Math.floor(Math.random() * 100000) % 3;
        this.arr3 = [diamondIM1,diamondIM2,diamondIM3];
        this.x = 2 * this.game.getWidth() + Math.random() * (game_W - 4 * this.game.getWidth());
        this.y = 2 * this.game.getWidth() + game_H / 3 + Math.random() * (2 * game_H / 3 - 4 * this.game.getWidth());
        this.alive = true;
        this.update();
    }

    update() {
        switch (this.type) {
            case 0:
            case 1:
            case 2:
                this.speed = this.game.getWidth() / 20;
                this.width = 2.5*this.game.getWidth();
                this.height = 2.5*this.game.getWidth();
                this.IM = this.arr1[this.random1];
                this.score = 300;  
                break;
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                this.speed = this.game.getWidth() / 10;
                this.width = 1*this.game.getWidth();
                this.height = 1*this.game.getWidth();
                this.IM = this.arr2[this.random2];
                this.score = 88;  
                break;
            case 8:
            case 9: 
            case 10:
                this.speed = this.game.getWidth() / 8;
                this.width = this.game.getWidth() / 2;
                this.height = this.game.getWidth() / 2.5;
                this.IM = this.arr3[this.random3];
                this.score = 666;
                break;
            case 11:
            case 12:
                this.speed = this.game.getWidth() / 15;
                this.width = 1.5 * this.game.getWidth();
                this.height = 1.5 * this.game.getWidth();
                this.IM = rockIm;
                this.score = 11;
                break;
            case 13:
            case 14:
            case 15:
                this.speed = this.game.getWidth() / 40;
                this.width = 2*this.game.getWidth();
                this.height = 2*this.game.getWidth();
                this.IM = rockIm;
                this.score = 50;
                break;
        }
    }

    randomXY() {
        this.x = 2 * this.game.getWidth() + Math.random() * (game_W - 4 * this.game.getWidth());
        this.y = 2 * this.game.getWidth() + game_H / 3 + Math.random() * (2 * game_H / 3 - 4 * this.game.getWidth());
    }

    draw() {
        // this.game.rotate(0);
        this.game.context.drawImage(this.IM, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    }

    size() {
        return Math.sqrt(this.width * this.width + this.height * this.height) / 2;
    }
}