function loadPage(page2Load) {
    window.location.href = page2Load;
}


//electron中可行
const music = document.createElement("audio");
music.src = "./medias/bgMusic.mp3";
music.autoplay = true;
music.play();


// setTimeout(function() {
//     // IE
//     if (document.all) {
//         document.getElementById("clickMe").click();
//         const music = document.createElement("audio");
//         music.src = "./medias/bgMusic.mp3";
//         music.autoplay = true;
//         music.play();
//     }
//     // 其它浏览器
//     else {
//         var e = document.createEvent("MouseEvents");
//         e.initEvent("click", true, true);
//         document.getElementById("clickMe").dispatchEvent(e);
//         const music = document.createElement("audio");
//         music.src = "./medias/bgMusic.mp3";
//         music.autoplay = true;
//         music.play();
//     }
// }, 2);


// const music = document.getElementById("index-audio");
// music.play();


console.log("write what you want ");
var canvas = document.getElementById("index");
var context = canvas.getContext('2d');


const rectStartBTN = new CustomRectRenderer();
rectStartBTN.posX = 730;
rectStartBTN.posY = 290;
rectStartBTN.width = 210;
rectStartBTN.height = 80;
rectStartBTN.color = '#007799';



//开始按钮
const imgStartBTN = new CustomImageRenderer();
imgStartBTN.source = "./img/button_start.png"
imgStartBTN.posX = 720;
imgStartBTN.posY = 280;
imgStartBTN.width = 230;
imgStartBTN.height = 100;



const rectHelpBTN = new CustomRectRenderer();
rectHelpBTN.posX = 730;
rectHelpBTN.posY = 390;
rectHelpBTN.width = 210;
rectHelpBTN.height = 80;
rectHelpBTN.color = '#002299';



//帮助按钮
const imgHelpBTN = new CustomImageRenderer();
imgHelpBTN.source = "./img/button_start.png"
imgHelpBTN.posX = 720;
imgHelpBTN.posY = 400;
imgHelpBTN.width = 230;
imgHelpBTN.height = 100;





const startText = new CustomInfoRenderer();
startText.posX = 800;
startText.posY = 340;
startText.width = 210;
startText.height = 90;
startText.textFont = '37px Arial';
startText.text = '开始';
startText.color = '#FFF';


const helpText = new CustomInfoRenderer();
helpText.posX = 800;
helpText.posY = 440;
helpText.width = 210;
helpText.height = 90;
helpText.textFont = '37px Arial';
helpText.text = '帮助';
helpText.color = '#FFF';



const bgImage = new CustomImageRenderer();
bgImage.source = './img/indexPage.png';
bgImage.posX = 0;
bgImage.posY = 0;
bgImage.width = 1280;
bgImage.height = 720;




// function getMousePos(e) {　　　
//     e = e || window.event;
//     var movex = e.pageX;
//     var movey = e.pageY;

//     console.log(movex);　
//     console.log(movey);　
// }


var clickPosX = 0;
var clickPosY = 0;

window.onmousedown = function(e) {
    // console.log(e);
    console.log(e.offsetX);
    console.log(e.offsetY);
    clickPosX = e.offsetX;
    clickPosY = e.offsetY;

    checkClickPosition(() => {
        // console.error("Button Clicked");
        music.pause();
    });
}

window.onmouseup = function(e) {
    clickPosX = 0;
    clickPosY = 0;
}


function checkClickPosition(callback) {
    // if (clickPosX >= 720 && clickPosX <= 930 &&
    //     clickPosY >= 280 && clickPosY <= 360) {
    //     console.error("Start button Clicked");
    // }

    // console.log("x : " + container.posX);
    // console.log("y : " + container.posY);
    // console.log("w : " + container.width);
    // console.log("h : " + container.height);

    // if (clickPosX >= container.posX && (clickPosX <= (container.posX + container.width)) &&
    //     clickPosY >= container.poxY && (clickPosY <= (container.posY + container.height))) {
    //     callback && callback();
    // }


    if (clickPosX >= 720 && (clickPosX <= (720 + 230)) &&
        clickPosY >= 280 && (clickPosY <= (280 + 100))) {

        callback && callback();
        console.log("Start button clicked!");
        window.event.returnValue = false;
        loadPage("./firstPage.html");
    }




    if (clickPosX >= 720 && (clickPosX <= (720 + 230)) &&
        clickPosY >= 400 && (clickPosY <= (400 + 100))) {

        callback && callback();
        console.log("Help button clicked!");

        loadPage("./help.html");
    }


    // if (clickPosX >= rectStartBTN.posX && clickPosX < rectStartBTN.posX + rectStartBTN.width &&
    //     clickPosY >= rectStartBTN.poxY && clickPosY < rectStartBTN.posY + rectStartBTN.height) {
    //     console.error("Start button Clicked");
    // }
    // if (clickPosX >= rectHelpBTN.posX && clickPosX <= rectHelpBTN.posX + rectHelpBTN.width &&
    //     clickPosY >= rectHelpBTN.poxY && clickPosY <= rectHelpBTN.posY + rectHelpBTN.height) {
    //     console.error("Help button Clicked");
    // }
}




render = function() {
    bgImage.draw(context);
    imgStartBTN.draw(context);
    imgHelpBTN.draw(context);

    // rectStartBTN.draw(context);
    // startText.draw(context);
    // rectHelpBTN.draw(context);
    // helpText.draw(context);
    requestAnimationFrame(render);
}
render();