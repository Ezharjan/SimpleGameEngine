


class CustomBaseRenderer {

    posX = 0;
    posY = 20;
    width = 0;
    height = 0;
    color = '#000000';

    draw(context) {
        context.fillStyle = this.color;
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        context.rect(0, 0, this.width, this.height);
        context.closePath();
        context.fill();
        this.renderer();
    }

    renderer() { }
}





class CustomInfoRenderer extends CustomBaseRenderer {

    textFont = '16px Arial';
    text = 'Rusher';

    draw(context) {
        context.font = this.textFont;
        context.fillStyle = this.color;
        context.fillText(this.text, this.posX, this.posY);
    }
}

class CustomRectRenderer extends CustomBaseRenderer {

    draw(context) {
        context.beginPath();
        context.rect(this.posX, this.posY, this.width, this.height);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}

class ArcRenderer extends CustomBaseRenderer {

    posX = (document.getElementById('game') as HTMLCanvasElement).width / 2;
    posY = (document.getElementById('game') as HTMLCanvasElement).height / 2;
    radius = 50;
    startAngel = 0;
    endAngel = Math.PI * 2;
    counterClockWise = false;

    draw(context) {
        context.beginPath();
        context.arc(this.posX, this.posY, this.radius,
            this.startAngel, this.endAngel, this.counterClockWise);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}



class CustomImageRenderer extends CustomBaseRenderer {

    source = null;
    width = 100;
    height = 100;

    draw(context) {
        var image = new Image();
        image.src = this.source;
        context.drawImage(image, this.posX, this.posY, this.width, this.height);
    }

}

//Limited
class Collider {

    isBorder(targetPosX, targetPosY, targetWidth, targetHeight, colliderWidth, colliderHeight) {
        if (targetPosX == 0 || targetPosX == (colliderWidth - targetWidth + 1) ||
            targetPosY == (colliderHeight - targetHeight + 1) || targetPosY == 0) {
            console.log("You arrived at border!");
            return true;
        }
    }

    collidedWithSame(targetPosX, targetPosY, targetWidth, colliderX, colliderY, colliderWidth, colliderHeight) {
        if ((targetPosX >= (colliderX - targetWidth) &&
            targetPosX <= (colliderX + colliderWidth)) &&
            (targetPosY >= (colliderY - colliderHeight) &&
                (targetPosY <= colliderY + colliderHeight))
        ) {
            return true;
        } else {
            return false;
        }
    }

    collidedWidthDiff(targetPosX, targetPosY, colliderWidth, colliderHeight, redLine) {

        if (Math.sqrt(((targetPosX - colliderWidth) * (targetPosX - colliderWidth) -
            (targetPosY - colliderHeight) * (targetPosY - colliderHeight))) < redLine) {
            return true;
        } else {
            return false;
        }
    }

    isInsideRect(point, rectangle) {
        return (
            point.x >= rectangle.x &&
            point.x <= rectangle.x + rectangle.width &&
            point.y >= rectangle.y &&
            point.y <= rectangle.y + rectangle.height
        );
    }
}




//Utils

class Dictionary {

    dataStore = [];

    add(key, value) {
        this.dataStore[key] = value;
    }

    find(key) {
        return this.dataStore[key];
    }

    remove(key) {
        if (this.dataStore[key]) delete this.dataStore[key];
        else return 'Not Found';
    }

    showAll() {
        for (var key in this.dataStore) {
            console.log(key + '->' + this.dataStore[key]);
        }
    }

    count() {
        var n = 0;
        for (var key in this.dataStore) {
            ++n;
        }
        return n;
    }

    clear() {
        for (var key in this.dataStore) {
            delete this.dataStore[key];
        }
    }
}


const Color = {

    // Used in the game
    WHITE: '#FFFFFF',
    WHITE_BLUE: '#D0E7f9',
    DARK_BLUE: '#000093',
    SKY_BLUE: '#0095DD',
    BISQUE: '#FFE4C4',
    CADE_BLUE: '#98F5FF',
    ANTIQUE_WHITE: '#FAEBD7',
    MOCCASIN: '#FFE4B5',
    OLIVER_GREEN: '#CAFF70',
    PURE_RED: '#FF0000',

    // Add with future demand
    Chartreuse1: '#7FFF00',
    Chartreuse2: '#76EE00',
    Chartreuse3: '#66CD00',
    Chartreuse4: '#458B00',
    OliveDrab1: '#C0FF3E',
    OliveDrab2: '#B3EE3A',
    OliveDrab3: '#9ACD32',
    OliveDrab4: '#698B22',
    DarkOliveGreen1: '#CAFF70',
    DarkOliveGreen2: '#BCEE68',
    DarkOliveGreen3: '#A2CD5A',
    DarkOliveGreen4: '#6E8B3D',
    Khaki1: '#FFF68F',
    Khaki2: '#EEE685',
    Khaki3: '#CDC673',
    Khaki4: '#8B864E',
    LightGoldenrod1: '#FFEC8B',
    LightGoldenrod2: '#EEDC82',
    LightGoldenrod3: '#CDBE70',
    LightGoldenrod4: '#8B814C',
    LightYellow1: '#FFFFE0',
    LightYellow2: '#EEEED1',
    LightYellow3: '#CDCDB4',
    LightYellow4: '#8B8B7A',
    Yellow1: '#FFFF00',
    Yellow2: '#EEEE00',
    Yellow3: '#CDCD00',
    Yellow4: '#8B8B00',
    Gold1: '#FFD700',
    Gold2: '#EEC900',
    Gold3: '#CDAD00',
    Gold4: '#8B7500',
    Goldenrod1: '#FFC125',
    Goldenrod2: '#EEB422',
    Goldenrod3: '#CD9B1D',
    Goldenrod4: '#8B6914',
    DarkGoldenrod1: '#FFB90F',
    DarkGoldenrod2: '#EEAD0E',
    DarkGoldenrod3: '#CD950C',
    DarkGoldenrod4: '#8B658B',
    RosyBrown1: '#FFC1C1',
    RosyBrown2: '#EEB4B4',
    RosyBrown3: '#CD9B9B',
    RosyBrown4: '#8B6969',
    IndianRed1: '#FF6A6A',
    IndianRed2: '#EE6363',
    IndianRed3: '#CD5555',
    IndianRed4: '#8B3A3A',
    Sienna1: '#FF8247',
    Sienna2: '#EE7942',
    Sienna3: '#CD6839',
    Sienna4: '#8B4726',
    Burlywood1: '#FFD39B',
    Burlywood2: '#EEC591',
    Burlywood3: '#CDAA7D',
    Burlywood4: '#8B7355',
    Wheat1: '#FFE7BA',
    Wheat2: '#EED8AE',
    Wheat3: '#CDBA96',
    Wheat4: '#8B7E66',
    Tan1: '#FFA54F',
    Tan2: '#EE9A49',
    Tan3: '#CD853F',
    Tan4: '#8B5A2B',
    VioletRed1: '#FF3E96',
    VioletRed2: '#EE3A8C',
    VioletRed3: '#CD3278',
    VioletRed4: '#8B2252',
    Magenta1: '#FF00FF',
    Magenta2: '#EE00EE',
    Magenta3: '#CD00CD',
    Magenta4: '#8B008B',
    Orchid1: '#FF83FA',
    Orchid2: '#EE7AE9',
    Orchid3: '#CD69C9',
    Orchid4: '#8B4789',
    Plum1: '#FFBBFF',
    Plum2: '#EEAEEE',
    Plum3: '#CD96CD',
    Plum4: '#8B668B',
    MediumOrchid1: '#E066FF',
    MediumOrchid2: '#D15FEE',
    MediumOrchid3: '#B452CD',
    MediumOrchid4: '#7A378B',
    DarkOrchid1: '#BF3EFF',
    DarkOrchid2: '#B23AEE',
    DarkOrchid3: '#9A32CD',
    DarkOrchid4: '#68228B',
    Purple1: '#9B30FF',
    Purple2: '#912CEE',
    Purple3: '#7D26CD',
    Purple4: '#551A8B',
    MediumPurple1: '#AB82FF',
    MediumPurple2: '#9F79EE',
    MediumPurple3: '#8968CD',
    MediumPurple4: '#5D478B',
    Thistle1: '#FFE1FF',
    Thistle2: '#EED2EE',
    Thistle3: '#CDB5CD',
    Thistle4: '#8B7B8B'
    // ...

}