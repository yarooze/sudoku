;(function (global, $) {

  /**
   * Sudoku image scanner starter
   */
  var SukoScan = function SukoScan() {
    return new SukoScan.init();
  };
  SukoScan.prototype = {
    canvasSize: {x: 200, y:200, max: 1024},
    blackMax: 220,
    opacityMax: 10,
    board: {}, // see APP.initBoard() for format
    SukoCanvas: null,
    context: null,
    initBoard: function initBoard () {
      var self = this;
      self.board = {
        type: '9x9', // '9x9' and 'Gattai5' (maybe later '3x3' for the tests)
        fieldSize: 0, // field's width and height
        topLeft: {x:0, y:0}, // topLeft black corner of the board
        buttomRight: {  // buttomRight black corner of the board
            x: self.canvasSize.x,
            y: self.canvasSize.y
        },
        field: {} // data in SudokuCatalogue.fieldSets format
      };
    },
    resizeCanvas: function resizeCanvas(x, y) {
      var self = this;
      if (x !== undefined) {
          self.canvasSize.x = x;
      }
      if (y !== undefined) {
          self.canvasSize.y = y;
      }
      self.SukoCanvas.width = self.canvasSize.x;
      self.SukoCanvas.height = self.canvasSize.y;
      self.initBoard();
    },
  analyzeBoard: function analyzeBoard() {
    var self = this;
      // find first black dot
      var firstBlackDot = self.findNextWithColor(0, 0);
      var nextWhiteDot = {x: null, y: null};
      var nextBlackDot = {x: null, y: null};
      var lastWhiteDot = {x: null, y: null};
      var lastBlackDot = {x: null, y: null};
      var whitespace   = {start: null, end: null, length: 0};
      self.board.topLeft.x = firstBlackDot.x;
      self.board.topLeft.y = firstBlackDot.y;
      // find the end of the black line
      nextWhiteDot = self.findNextWithColor(firstBlackDot.x, firstBlackDot.y, 'white', false);

      if (nextWhiteDot !== null) { // there is a white space after. Check for 'Gattai5'
          whitespace.start = nextWhiteDot.x;
          lastBlackDot.x = nextWhiteDot.x - 1;
          lastBlackDot.y = nextWhiteDot.y;
          nextBlackDot = self.findNextWithColor(nextWhiteDot.x, nextWhiteDot.y, 'black', false);
          if (nextBlackDot !== null) { // is there another black line after the white space?
              whitespace.end = nextBlackDot.x - 1;
              lastWhiteDot = self.findNextWithColor(nextBlackDot.x, nextBlackDot.y, 'white', false);
              if (lastWhiteDot !== null) {
                  lastBlackDot.x = lastWhiteDot.x - 1;
                  lastBlackDot.y = lastWhiteDot.y;
              } else {
                  lastWhiteDot = {
                      x: whitespace.end,
                      y: nextWhiteDot.y
                  };
                  lastBlackDot.x = self.canvasSize.x;
                  lastBlackDot.y = firstBlackDot.y;
              }
          }
      } else {
          lastBlackDot.x = self.canvasSize.x;
          lastBlackDot.y = firstBlackDot.y;
      }
      self.board.buttomRight.x = lastBlackDot.x;
      // TODO add better buttomRight.y calculation
      self.board.buttomRight.y = lastBlackDot.y + (lastBlackDot.x - firstBlackDot.x);

      // analyze data
      // there are 3 possibilities:
      // 9x9 - one black horizontal line / 10 vertical lines
      self.board.fieldSize = parseInt((lastBlackDot.x - firstBlackDot.x) / 9, 10);

// APP.rect(
//         APP.board.topLeft.x,
//         APP.board.topLeft.y,
//         APP.board.buttomRight.x - APP.board.topLeft.x,
//         APP.board.buttomRight.y - APP.board.topLeft.y
//     );

      // firstBlackDot.x to whitespace.start and whitespace.end to lastBlackDot.x
      if (whitespace.end !== null) {
          whitespace.length = whitespace.end - whitespace.start;
      }
// console.log('whitespace', whitespace);
      // Gattai 5 - two black horizontal lines "--- ---"
      if (whitespace.length > 0) {
          var twoFields = lastBlackDot.x - firstBlackDot.x - whitespace.length;
          if (Math.abs(Math.round(whitespace.length / 10) - Math.round(twoFields / 60)) < 2 ) {
              self.board.type = 'gattai5';
              self.board.fieldSize = Math.round(twoFields / 18);
          }
console.log({
    paneles: '',
    both: twoFields,
    one: Math.round(twoFields / 20),
    space: Math.round(whitespace.length / 10),
    row:  Math.round(twoFields / 60),
    'whitespace_length': whitespace.length / 10,
    'twoFields': twoFields / 60
});
      }

      // Get field from the catalogue
      self.board.field = global.$ukoCat.getFieldSetsByTags([self.board.type, 'empty', 'forScanner']).shift();

      // let's find the corners of each cell
      var startX = self.board.topLeft.x;
      var startY = self.board.topLeft.y;
      var zone = {
            x1: startX,
            y1: startY,
            x2: startX + self.board.fieldSize,
            y2: startY + self.board.fieldSize
      };
// console.log('zone', zone);
      var firstWhitePic = self.findNextWithColor(startX, startY, 'white', true, zone);
      var nextBlackPic = self.findNextWithColor(firstWhitePic.x, firstWhitePic.y, 'black', false);
      var width = nextBlackPic.x - firstWhitePic.x;
      // Now we have the first cell
      var cell = {
          x1: firstWhitePic.x,
          y1: firstWhitePic.y,
          x2: nextBlackPic.x - 1,
          y2: firstWhitePic.y + width,
          width: width,
          height: width // temp solution
      };

      // Let's scan  the first row
      //var firstRow = self.board.field.fieldSet[0]; // $ukoScan.board.field.fieldSet[0];

// debug stuff - draw some lines
console.log('x', cell, firstWhitePic, nextBlackPic);

var colNumber = self.board.field.fieldSet.length;
var fieldSetWidth = self.board.buttomRight.x - self.board.topLeft.x;
var fieldSize = fieldSetWidth / colNumber;

// self.rect(cell.x1, cell.y1, cell.width, cell.height);
// self.line(self.board.topLeft.x, self.board.topLeft.y, self.board.buttomRight.x, self.board.topLeft.y);
// self.line(self.board.buttomRight.x, self.board.topLeft.y, self.board.buttomRight.x, self.board.buttomRight.y);
// self.line(self.board.topLeft.x, self.board.buttomRight.y, self.board.buttomRight.x, self.board.buttomRight.y);
// self.line(self.board.topLeft.x, self.board.topLeft.y, self.board.buttomRight.x, self.board.buttomRight.y);
// self.line(self.board.topLeft.x, self.board.buttomRight.y, self.board.buttomRight.x, self.board.topLeft.y);

// field width / cell number  <-- field size
// field width / cell number * 0.5 <-- middle of the field
// middle of the field + field size * field index (zero-based)
// $ukoScan.rect((225/9/2)+(225/9)*0,(225/9/2)+(225/9)*3,2,2)

// let's find the middles of the cells
for (var colIndex = 0; colIndex < colNumber; colIndex++) {
  for (var rowIndex = 0; rowIndex < colNumber; rowIndex++) {
    var rowKeys = Object.keys(self.board.field.fieldSet[rowIndex]);

  // debug - show middles
  // self.rect(
  //   self.board.topLeft.x + fieldSize/2 + fieldSize*colIndex,
  //   self.board.topLeft.y + fieldSize/2 + fieldSize*rowIndex,
  //   1, 1
  // );

  // let's find the letter
  var zone = {
    x1: (self.board.topLeft.x + fieldSize/2 + fieldSize*colIndex) - (cell.width * 0.1),
    y1: (self.board.topLeft.y + fieldSize/2 + fieldSize*rowIndex) - (cell.height * 0.2),
    x2: (self.board.topLeft.x + fieldSize/2 + fieldSize*colIndex) + (cell.width * 0.1),
    y2: (self.board.topLeft.y + fieldSize/2 + fieldSize*rowIndex) + (cell.height * 0.2),
    found: false,
    value: null,
    isEmpty: true
  };
// console.log(zone);
  self.findLetterZone(zone);

// console.log(rowIndex, colIndex, rowKeys, self.board.field.fieldSet);

  self.board.field.fieldSet[rowIndex][rowKeys[colIndex]].zone = {
    x1: zone.x1,
    y1: zone.y1,
    x2: zone.x2,
    y2: zone.y2,
    value: zone.value,
    isEmpty: true
  };
// break;
  }
}

//

// console.log('sum', {
//     'firstBlackDot': firstBlackDot, // x__
//     'nextWhiteDot':  nextWhiteDot,  // ___x
//     'whitespace':    whitespace,    // ___x___
//     'nextBlackDot':  nextBlackDot,  // ___ x__
//     'lastWhiteDot':  lastWhiteDot,  // ___ ___x
//     'lastBlackDot':  lastBlackDot   // ___ __x
//     });

// APP.rect(
//         APP.board.topLeft.x,
//         APP.board.topLeft.y,
//         APP.board.topLeft.x + APP.board.fieldSize,
//         APP.board.topLeft.y + APP.board.fieldSize
//     );


  },
  /**
   * @var {Object} zone  - {x: x, y: y, width: width, height: height}
   */
  findLetterZone: function findLetterZone(zone) {
    var self = this;

    // console.log(zone);

    // scan borders: if only white - try to reduce, other way increase. Then scan once more.
//self.rect(zone.x1-2, zone.y1-2, zone.x2 - zone.x1+4, zone.y2 - zone.y1+4);
    var tmp = 50;
    while (zone.found === false) {
      zone.found = true;
// console.log(zone);
      //  top ---
      if(lineHasBlackDots(zone.x1, zone.y1, zone.x2, null)) {
        --zone.y1;
        zone.found = false;
        zone.isEmpty = false;
      }
      // left |
      if(lineHasBlackDots(zone.x1, zone.y1, null, zone.y2)) {
        --zone.x1;
        zone.found = false;
        zone.isEmpty = false;
      }
      // buttom ---
      if(lineHasBlackDots(zone.x1, zone.y2, zone.x2, null)) {
        ++zone.y2;
        zone.found = false;
        zone.isEmpty = false;
      }
      // right |
      if(lineHasBlackDots(zone.x2, zone.y1, null, zone.y2)) {
        ++zone.x2;
        zone.found = false;
        zone.isEmpty = false;
      }
      if (tmp < 1) {
        console.error(zone);
        throw "endless loop? " + tmp;
      }
      --tmp;
    }



self.rect(zone.x1, zone.y1, zone.x2 - zone.x1, zone.y2 - zone.y1);

  if (zone.isEmpty === false) {
    zone.value = 'value will be here';
    getZoneSignature(zone);
  }

    function getZoneSignature(zone) {
      var width = zone.x2-zone.x1;
      var height = zone.y2-zone.y1;
      var x1 = zone.x1+1;
      var x2 = zone.x2-1;
      var y1 = zone.y1+1;
      var y2 = zone.y2-1;

console.log(
  self.picHasColor(x1, y1, 'black'),
  self.picHasColor(x1+(width/2), y1, 'black'),
  self.picHasColor(x2, y1, 'black'),
  self.picHasColor(x1, y2, 'black'),
  self.picHasColor(x1+(width/2), y2, 'black'),
  self.picHasColor(x2, y2, 'black')
);
//self.rect(x1, y1,1,1, 'red');
//self.rect(x1+(width/2), y1,1,1, 'blue');
//self.rect(x2, y1,1,1, 'cyan');
//self.rect(x1, y2,1,1, 'yellow');
//self.rect(x1+(width/2), y2,1,1, 'magenta');
//self.rect(x2, y2,1,1, 'red');

        //self.picHasColor(x, startY, 'white')
// throw 'XxX!';
    }

    function lineHasBlackDots(startX, startY, endX, endY) {
      var whitePicos = [];

      if (endX !== null) {
        for(var x = startX; x<endX; x++) {
          whitePicos.push(self.picHasColor(x, startY, 'white'));
        }
      } else if (endY !== null) {
        for(var y = startY; y<endY; y++) {
          whitePicos.push(self.picHasColor(startX, y, 'white'));
        }
      } else {
        // ??
      }

      // if (-1  !== whitePicos.indexOf(false)) {
      // console.log(whitePicos);
      // }

      return -1  !== whitePicos.indexOf(false);
    }

    // self.rect(zone.x1, zone.y1, zone.x2 - zone.x1, zone.y2 - zone.y1);
  },
    /**
     * wrapper for console.log()
     * @returns {this} for method chaining
     */
    log: function log() {
        if(global.console) {
             global.console.log(arguments);
        }
        return this;
    },
    rect: function rect(x1, y1, x2, y2, color) {
      var self = this;
      self.context.lineWidth="1";
      self.context.strokeStyle = color || "red";
      self.context.rect(x1, y1, x2, y2);
      self.context.stroke();
    },
    line: function line(x1, y1, x2, y2) {
      var self = this;
      self.context.lineWidth="1";
      self.context.strokeStyle="red";
      self.context.beginPath();
      self.context.moveTo(x1, y1);
      self.context.lineTo(x2, y2);
      self.context.stroke();
    },
    loadImg: function loadImg(event) {
      var self = this;
      var input = event.target;
      var reader = new FileReader();
      reader.onload = function() {
        var dataURL = reader.result;
        var imageObj = new Image();
        imageObj.src = dataURL;
        imageObj.onload=function() {
          console.log(imageObj.height, imageObj.width);

          if (imageObj.width < self.canvasSize.max && imageObj.height < self.canvasSize.max) {
              self.resizeCanvas(imageObj.width, imageObj.height);
          }
          self.context.clearRect(0, 0, self.canvasSize.x, self.canvasSize.y);
          self.context.drawImage(imageObj,0,0,self.canvasSize.x,self.canvasSize.y);
        }
      }
      reader.readAsDataURL(input.files[0]);
    },
    sharpen: function sharpen() {
      var self = this;
      var context = self.context;
      var imageData = context.createImageData(self.canvasSize.x, self.canvasSize.y);
      for(var x=0; x<self.canvasSize.x;x++) {
        for(var y=0; y<self.canvasSize.y; y++) {
          var data = context.getImageData(x, y, 1, 1).data;
          if (data[0] > self.blackMax || data[1] > self.blackMax || data[2] > self.blackMax || data[3] < self.opacityMax) {
            data[0] = 255;
            data[1] = 255;
            data[2] = 255;
          } else {
            data[0] = 0;
            data[1] = 0;
            data[2] = 0;
          }
          // console.log(data);
          //context.getImageData(x, y, 1, 1).data = data;
          self.setPixel(imageData, x, y, data[0], data[1], data[2], 255);
        }
      }
      context.putImageData(imageData, 0, 0); // at coords 0,0
    },
    setPixel: function setPixel(imageData, x, y, r, g, b, a) {
      index = (x + y * imageData.width) * 4;
      imageData.data[index+0] = r;
      imageData.data[index+1] = g;
      imageData.data[index+2] = b;
      imageData.data[index+3] = a;
    },

    picHasColor: function picHasColor(x, y, color) {
      var self = this;
      var colorValue = 0;
      if (color !== 'black') {
          colorValue = 255;
      }
      var data = self.context.getImageData(x, y, 1, 1).data;
      if (data[0] === colorValue) {
          return true;
      }
      return false;
    },
    findNextWithColor: function findNextWithColor(startX, startY, color, withCR, zone) {
      var self = this;
      if (withCR !== false) {
          withCR = true;
      }
      if (zone === undefined) {
          zone = {
              x1: 0,
              y1: 0,
              x2: self.canvasSize.x,
              y2: self.canvasSize.y
          };
      }
      var colors = ['white', 'black'];
      if (colors.indexOf(color) < 0) {
          color = 'black';
      }

      var x = startX;
      for(var y = startY; y < zone.y2; y++) {
          while (x < zone.x2) {
              //var data = APP.context.getImageData(x, y, 1, 1).data;
  // console.log('search', x, y, data);
              if (self.picHasColor(x, y, color)) {
                  return {x: x, y: y};
              }
              ++x;
          }
          if (withCR === false) {
              break;
          }
          x = zone.x1;
      }
      return null;
    },
    /**
     *  NB. Not ready jet.
     *
     * @var {Number} colIndex
     * @var {Number} rowIndex
     */
    getField: function getField(colIndex, rowIndex) {
      var self = this;
      var startX = self.board.topLeft.x;
      var startY = self.board.topLeft.y;
      startX = startX + (self.board.fieldSize * colIndex);
      startY = startY + (self.board.fieldSize * rowIndex);

      // For the test, mark the field
      self.rect(startX, startY, self.board.fieldSize, self.board.fieldSize);

      var zone = {
              x1: startX,
              y1: startY,
              x2: startX + self.board.fieldSize,
              y2: startY + self.board.fieldSize
          };
      var firstWhitePic = self.findNextWithColor(startX, startY, 'white', true, zone);

      // For the test mark the top left white field
      console.log('x', firstWhitePic);
      self.rect(firstWhitePic.x, firstWhitePic.y, 2, 2);
    }
  };

    /**
     * @var fSet FieldSet [[{val,sets},..],..]
     */
    SukoScan.init = function init() {
      var self = this;
      self.SukoCanvas = document.getElementById('sukoCanvas');
      self.context = self.SukoCanvas.getContext('2d');
      self.resizeCanvas();
      self.initBoard();
    };

    SukoScan.init.prototype = SukoScan.prototype;

  global.SudokuScanner = global.$udokuScanner = SukoScan;
})(window, jQuery);