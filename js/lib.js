;(function (global, $) {

    /**
     * 
     * GameField - the whole field
     * Cell      - just one cell of the GameField
     * Row       - Rows and Columns
     * Box       - 3x3 cells
     * CellSet   - Rows and Boxes that have 45 points
     *
     */
    
    /**
     * field types 
     * val: -1 - no field, 0 - empty field, 1-9 - value
     * sets: CellSets this cell is assigned to
     * {val:0,sets:[1],style:['n']}     
     */
    var fld = {
        empty: {val:0,sets:[1],style:'n o s w'}
    };
    var fieldSets = [
        //0 set 3x3 for tests
        [{1:{val:0,sets:[1]},2:{val:0,sets:[1]},3:{val:0,sets:[1]}},
         {4:{val:0,sets:[1]},5:{val:0,sets:[1]},6:{val:0,sets:[1]}},
         {7:{val:0,sets:[1]},8:{val:0,sets:[1]},9:{val:0,sets:[1]}},
         {1000:{val:-1,sets:[]},1001:{val:-1,sets:[]},1002:{val:-1,sets:[]}},
        ],
        //
        
        //1 set 3x3x3 
        [{1:{val:0,sets:[1,10,20],style:'w n'},2:{val:0,sets:[1,11,20],style:'n'},3:{val:0,sets:[1,12,20],style:'n o'},
          4:{val:0,sets:[1,13,21],style:'w n'},5:{val:0,sets:[1,14,21],style:'n'},6:{val:0,sets:[1,15,21],style:'n o'},
          7:{val:0,sets:[1,16,22],style:'w n'},8:{val:0,sets:[1,17,22],style:'n'},9:{val:0,sets:[1,18,22],style:'n o'}},

        {11:{val:0,sets:[2,10,20],style:'w'},12:{val:0,sets:[2,11,20],style:''},13:{val:0,sets:[2,12,20],style:'o'},
         14:{val:0,sets:[2,13,21],style:'w'},15:{val:0,sets:[2,14,21],style:''},16:{val:0,sets:[2,15,21],style:'o'},
         17:{val:0,sets:[2,16,22],style:'w'},18:{val:0,sets:[2,17,22],style:''},19:{val:0,sets:[2,18,22],style:'o'}},

        {21:{val:0,sets:[3,10,20],style:'w s'},22:{val:0,sets:[3,11,20],style:'s'},23:{val:0,sets:[3,12,20],style:'s o'},
         24:{val:0,sets:[3,13,21],style:'w s'},25:{val:0,sets:[3,14,21],style:'s'},26:{val:0,sets:[3,15,21],style:'s o'},
         27:{val:0,sets:[3,16,22],style:'w s'},28:{val:0,sets:[3,17,22],style:'s'},29:{val:0,sets:[3,18,22],style:'s o'}},
         
        {31:{val:0,sets:[4,10,23],style:'w n'},32:{val:0,sets:[4,11,23],style:'n'},33:{val:0,sets:[4,12,23],style:'n o'},
         34:{val:0,sets:[4,13,24],style:'w n'},35:{val:0,sets:[4,14,24],style:'n'},36:{val:0,sets:[4,15,24],style:'n o'},
         37:{val:0,sets:[4,16,25],style:'w n'},38:{val:0,sets:[4,17,25],style:'n'},39:{val:0,sets:[4,18,25],style:'n o'}},
         
        {41:{val:0,sets:[5,10,23],style:'w'},42:{val:0,sets:[5,11,23],style:''},43:{val:0,sets:[5,12,23],style:'o'},
         44:{val:0,sets:[5,13,24],style:'w'},45:{val:0,sets:[5,14,24],style:''},46:{val:0,sets:[5,15,24],style:'o'},
         47:{val:0,sets:[5,16,25],style:'w'},48:{val:0,sets:[5,17,25],style:''},49:{val:0,sets:[5,18,25],style:'o'}},
         
        {51:{val:0,sets:[6,10,23],style:'w s'},52:{val:0,sets:[6,11,23],style:'s'},53:{val:0,sets:[6,12,23],style:'s o'},
         54:{val:0,sets:[6,13,24],style:'w s'},55:{val:0,sets:[6,14,24],style:'s'},56:{val:0,sets:[6,15,24],style:'s o'},
         57:{val:0,sets:[6,16,25],style:'w s'},58:{val:0,sets:[6,17,25],style:'s'},59:{val:0,sets:[6,18,25],style:'s o'}},
         
        {61:{val:0,sets:[7,10,26],style:'w n'},62:{val:0,sets:[7,11,26],style:'n'},63:{val:0,sets:[7,12,26],style:'n o'},
         64:{val:0,sets:[7,13,27],style:'w n'},65:{val:0,sets:[7,14,27],style:'n'},66:{val:0,sets:[7,15,27],style:'n o'},
         67:{val:0,sets:[7,16,28],style:'w n'},68:{val:0,sets:[7,17,28],style:'n'},69:{val:0,sets:[7,18,28],style:'n o'}},
         
        {71:{val:0,sets:[8,10,26],style:'w'},72:{val:0,sets:[8,11,26],style:''},73:{val:0,sets:[8,12,26],style:'o'},
         74:{val:0,sets:[8,13,27],style:'w'},75:{val:0,sets:[8,14,27],style:''},76:{val:0,sets:[8,15,27],style:'o'},
         77:{val:0,sets:[8,16,28],style:'w'},78:{val:0,sets:[8,17,28],style:''},79:{val:0,sets:[8,18,28],style:'o'}},
         
        {81:{val:0,sets:[9,10,26],style:'w s'},82:{val:0,sets:[9,11,26],style:'s'},83:{val:0,sets:[9,12,26],style:'s o'},
         84:{val:0,sets:[9,13,27],style:'w s'},85:{val:0,sets:[9,14,27],style:'s'},86:{val:0,sets:[9,15,27],style:'s o'},
         87:{val:0,sets:[9,16,28],style:'w s'},88:{val:0,sets:[9,17,28],style:'s'},89:{val:0,sets:[9,18,28],style:'s o'}}         
        ],
        //
        
         //2 set 9x9 without borders
        [{1:{val:0,sets:[1,10,20]},2:{val:0,sets:[1,11,20]},3:{val:0,sets:[1,12,20]},
          4:{val:0,sets:[1,13,21]},5:{val:0,sets:[1,14,21]},6:{val:0,sets:[1,15,21]},
          7:{val:0,sets:[1,16,22]},8:{val:0,sets:[1,17,22]},9:{val:0,sets:[1,18,22]}},
         
        {11:{val:0,sets:[2,10,20]},12:{val:0,sets:[2,11,20]},13:{val:0,sets:[2,12,20]},
         14:{val:0,sets:[2,13,21]},15:{val:0,sets:[2,14,21]},16:{val:0,sets:[2,15,21]},
         17:{val:0,sets:[2,16,22]},18:{val:0,sets:[2,17,22]},19:{val:0,sets:[2,18,22]}},
         
        {21:{val:0,sets:[3,10,20]},22:{val:0,sets:[3,11,20]},23:{val:0,sets:[3,12,20]},
         24:{val:0,sets:[3,13,21]},25:{val:0,sets:[3,14,21]},26:{val:0,sets:[3,15,21]},
         27:{val:0,sets:[3,16,22]},28:{val:0,sets:[3,17,22]},29:{val:0,sets:[3,18,22]}},
         
        {31:{val:0,sets:[4,10,23]},32:{val:0,sets:[4,11,23]},33:{val:0,sets:[4,12,23]},
         34:{val:0,sets:[4,13,24]},35:{val:0,sets:[4,14,24]},36:{val:0,sets:[4,15,24]},
         37:{val:0,sets:[4,16,25]},38:{val:0,sets:[4,17,25]},39:{val:0,sets:[4,18,25]}},
         
        {41:{val:0,sets:[5,10,23]},42:{val:0,sets:[5,11,23]},43:{val:0,sets:[5,12,23]},
         44:{val:0,sets:[5,13,24]},45:{val:0,sets:[5,14,24]},46:{val:0,sets:[5,15,24]},
         47:{val:0,sets:[5,16,25]},48:{val:0,sets:[5,17,25]},49:{val:0,sets:[5,18,25]}},
         
        {51:{val:0,sets:[6,10,23]},52:{val:0,sets:[6,11,23]},53:{val:0,sets:[6,12,23]},
         54:{val:0,sets:[6,13,24]},55:{val:0,sets:[6,14,24]},56:{val:0,sets:[6,15,24]},
         57:{val:0,sets:[6,16,25]},58:{val:0,sets:[6,17,25]},59:{val:0,sets:[6,18,25]}},
         
        {61:{val:0,sets:[7,10,26]},62:{val:0,sets:[7,11,26]},63:{val:0,sets:[7,12,26]},
         64:{val:0,sets:[7,13,27]},65:{val:0,sets:[7,14,27]},66:{val:0,sets:[7,15,27]},
         67:{val:0,sets:[7,16,28]},68:{val:0,sets:[7,17,28]},69:{val:0,sets:[7,18,28]}},
         
        {71:{val:0,sets:[8,10,26]},72:{val:0,sets:[8,11,26]},73:{val:0,sets:[8,12,26]},
         74:{val:0,sets:[8,13,27]},75:{val:0,sets:[8,14,27]},76:{val:0,sets:[8,15,27]},
         77:{val:0,sets:[8,16,28]},78:{val:0,sets:[8,17,28]},79:{val:0,sets:[8,18,28]}},
         
        {81:{val:0,sets:[9,10,26]},82:{val:0,sets:[9,11,26]},83:{val:0,sets:[9,12,26]},
         84:{val:0,sets:[9,13,27]},85:{val:0,sets:[9,14,27]},86:{val:0,sets:[9,15,27]},
         87:{val:0,sets:[9,16,28]},88:{val:0,sets:[9,17,28]},89:{val:0,sets:[9,18,28]}}         
        ],
        //
        
        //3 3x3 with spaces
        [
        {1:{val:1,sets:[1]},2:{val:-1,sets:[]},3:{val:0,sets:[1]},4:{val:-1,sets:[]},5:{val:0,sets:[1]}},
        {6:{val:-1,sets:[]},7:{val:-1,sets:[]},8:{val:-1,sets:[]},9:{val:-1,sets:[]},10:{val:-1,sets:[]}},
        {11:{val:0,sets:[1]},12:{val:-1,sets:[]},13:{val:2,sets:[1]},14:{val:-1,sets:[]},15:{val:0,sets:[1]}},
        {16:{val:-1,sets:[]},17:{val:-1,sets:[]},18:{val:-1,sets:[]},19:{val:-1,sets:[]},20:{val:-1,sets:[]}},
        {21:{val:0,sets:[1]},22:{val:-1,sets:[]},23:{val:0,sets:[1]},24:{val:-1,sets:[]},25:{val:3,sets:[1]}},
        {26:{val:-1,sets:[]},27:{val:-1,sets:[]},28:{val:-1,sets:[]},29:{val:-1,sets:[]},30:{val:-1,sets:[]}}
        ]
        //
    ];    
    var defaultSet = 1;
    
    /**
     * Sudoku engine starter
     */
    var Sudoku = function Sudoku(fieldSet) {                
      return new Sudoku.init(fieldSet);
    };    
    Sudoku.prototype = {
      /**
       * @var [{1:fld,..},..]
       */
      fieldSet: [],           
      /**
       * builds the gaming field
       */
      buildGameField: function buildGameField() {
          var self = this;          
          var data = self.fieldSet;           
          var table = $("<table/>").addClass('gameField');          
          $.each(data, function(rowIndex, r) {                              
             var row = $("<tr/>");
             $.each(r, function(colIndex, c) { 
                 var el = $("<div/>");                                
                 if(c.val === 0) { // just empty feld
                    var possibleValues = self.getPossibleValuesForCell(colIndex);
                    var input = $("<input/>").attr('type', 'number')
                                          .attr('placeholder',possibleValues)                                              
                                        .addClass('form-control sudokucell')
                                          .attr('rel', colIndex)
                    ;
                    input.change(function() {self.cellValueChanged(this);});
                    el.attr('id','cell_'+colIndex);                     
                    el.append(input);                                                              
                 } else if(c.val > 0 && c.val < 10) { //pre defined values
                     var input = $("<input/>").attr('type', 'number')
                                            .val(c.val)
                                            .addClass('form-control sudokucell')
                                            .attr('readonly', true);  
                     input.change(function() {self.cellValueChanged(this);});
                     el.attr('id','cell_'+colIndex);                     
                     el.append(input);
                 } else { //print empty element
                     var div = $("<div/>").height('10px').width('10px');
                     el.attr('id','cell_'+colIndex);
                     el.append(div);
                 }
                 var td = $("<td/>").html(el);
                 if('style' in c) {
                    td.addClass(c.style);                     
                 }
                 row.append(td);
              });
              table.append(row);
          });
          
          $('#gameField').append(table);
          return this;
      },
      getPossibleValuesForCell: function getPossibleValuesForCell(id) {
          var self = this;
          var possibleValues = [1,2,3,4,5,6,7,8,9];          
          //get cell data
          var dataPlace = self.findCellDataById(id);
          if(dataPlace) {
              //get Cell values of the same CellSets and remove them from the "possibleValues"
              var CellSets = self.fieldSet[dataPlace.row][dataPlace.col].sets;
              for(var i=0; i < CellSets.length; i++) {
                  var CellSet = CellSets[i];
                  var data = self.fieldSet;              
                  $.each(data, function(rowIndex, r) {
                     $.each(r, function(colIndex, c) {
                         if(c.sets.indexOf(CellSet) > -1) {
                             var index = possibleValues.indexOf(Number(c.val));                         
                             if(index > -1) {                                               
                               possibleValues.splice(index, 1);
                             }
                         }                     
                     });
                  });                             
              }                            
          }
          
          return possibleValues;
      },
      cellValueChanged: function cellValueChanged(el) {
          var self = this;
          //remove errors if any
          $(el).parent().removeClass('has-error');          
          //update cell value          
          var dataPlace = self.findCellDataById($(el).attr('rel'));       
          if(dataPlace) {
              self.fieldSet[dataPlace.row][dataPlace.col].val = $(el).val();                 
              //update "possibleValues" of the same CellSets
              var CellSets = self.fieldSet[dataPlace.row][dataPlace.col].sets;
              for(var i=0; i < CellSets.length; i++) {
                  var CellSet = CellSets[i];                             
                  var data = self.fieldSet;              
                  $.each(data, function(rowIndex, r) {
                     $.each(r, function(colIndex, c) {
                         if(c.sets.indexOf(CellSet) > -1) {                         
                           var possibleValues = self.getPossibleValuesForCell(colIndex);                         
                           var inputs = $('div#cell_'+colIndex+' input');     
                            $.each(inputs, function(index, input) {                            
                                $(input).attr('placeholder',possibleValues);
                                //@todo think about error removal
                                if(0 < Number($(el).val()) &&
                                   el !== input &&
                                   (Number($(input).val()) === Number($(el).val()))) {
                                    $(el).parent().addClass('has-error');
                                    $(input).parent().addClass('has-error');
                                }
                            });                                               
                         }                   
                     });
                  });                             
              }                            
          }                               
      },
    /**       
     * @param {Number} id
     * @return {row:Y, col:X}
     */
    findCellDataById: function findCellDataById(id) {
      var self = this;          
      var data = self.fieldSet;
      var found;
      $.each(data, function(rowIndex, r) {
         $.each(r, function(colIndex, c) {
             if(colIndex == id) {                   
                found = {
                    row: Number(rowIndex), 
                    col: Number(colIndex)
                };                  
             }
         });
      }); 
        return found;
    },
    /**       
     * @param {Number} setid
     * @return [{row:Y, col:X},..]
     */
    findCellDataBySetId: function findCellDataBySetId(setid) {
      var self = this;          
      var data = self.fieldSet;
      var found;
      $.each(data, function(rowIndex, r) {
         $.each(r, function(colIndex, c) {             
             if(c.sets.indexOf(setid) > -1) {                 
                 if(found === undefined) {
                    found = [];
                 }                 
                 found.push({
                    row: Number(rowIndex), 
                    col: Number(colIndex),
                    set: setid
                 });
             }
         });
      }); 
      return found;
    },        
    bindValues: function bindValues() {
        var self = this;
        var cells = $('input.sudokucell');
        cells.each(function() {
            var dataPlace = self.findCellDataById($(this).attr('rel'));            
            if(dataPlace) {    
                self.fieldSet[dataPlace.row][dataPlace.col].val = $(this).val();            
                if(Number($(this).val()) > 0 && Number($(this).val()) < 10) {
                    $(this).attr('readonly', true);
                } else {
                    $(this).attr('readonly', false);
                }            
            }
          }
        );
    },
    solve: function solve() {
        var self = this;
        self.solveSingles();
        //@todo add more logic here
        self.solveHiddenSingles();
        //self.solveUniquePairInBlock();
    },
    /**
     * finds and sets "single" values
     */
    solveSingles: function solveSingles() {
        var self = this;
        var somethingSet = true;
        while (somethingSet) {
            somethingSet = false;
            var cells = $('input.sudokucell');
            cells.each(function findAndSetSingles() {
                if(Number($(this).val()) == 0 && $(this).attr('placeholder').length == 1) {                    
                    $(this).val($(this).attr('placeholder'));
                    self.cellValueChanged(this);
                    somethingSet = true;
                }             
                var dataPlace = self.findCellDataById($(this).attr('rel'));
                if(dataPlace) {
                    self.fieldSet[dataPlace.row][dataPlace.col].val = $(this).val();
                }                
              }
            );
        }        
    },
    /**
     * find placeholders that have multiple values but one value is unique for this placehohder
     * this is our value
     */
    solveHiddenSingles: function solveHiddenSingles() {
        var self = this;
        var somethingSet = true;
        while (somethingSet) {
            somethingSet = false;
            var cells = $('input.sudokucell'); //all cells to check
            cells.each(function findAndSetHiddenSingles() {
                var curField = this;
                //if cell is not set and has more than one possible value, check it
                if(Number($(curField).val()) == 0 && $(curField).attr('placeholder').length > 1) {
                    var placeholders = $(curField).attr('placeholder');
                    var dataPlace = self.findCellDataById($(curField).attr('rel'));
                    var data;
                    if(dataPlace) { //find data
                        data = self.fieldSet[dataPlace.row][dataPlace.col];
                    }
                    if(data) {
                        //loop through each set, to find the unique values
                        $.each(data.sets, function(setIndex, setId) {
                            var possibilities = JSON.parse('['+placeholders+']');
                            var setData = self.findCellDataBySetId(setId); //data of the cell in the same set
                            $.each(setData, function(i, cellData) {
                                //skip if possibilities is already empty
                                if(possibilities.length < 1) {
                                  return;
                                }
                                //skip self 
                                if(cellData.col == dataPlace.col){
                                    return;
                                }
                                var inputs  = $('div#cell_'+cellData.col+' input');
                                var input = inputs[0];
                                    //skip filled cells
                                    if($(input).val() > 0 && $(input).val() < 10) {
                                        return;
                                    }
                                    var possibleValues = JSON.parse('['+$(input).attr('placeholder')+']');
                                    possibilities = possibilities.filter( function( el ) {
                                        return possibleValues.indexOf( el ) < 0;
                                    });
                            });
                            //we checked this set. If only one possible value left, use it.
                            if(possibilities.length == 1) {
                                $(curField).val(possibilities[0]);
                                self.cellValueChanged(curField);
                                somethingSet = true;                                                
                                if(dataPlace) {
                                    self.fieldSet[dataPlace.row][dataPlace.col].val = $(curField).val();
                                }
                            }
//self.log('x4',possibilities,$(curField).val(),$(curField).attr('placeholder'));                            
//throw 'stop';                            
                        });
                    }
                }
              }
            );
        }                
        
    },
    /**
     * if two placeholders dave the same pair of values, we can remove this values from the other placeholders in this block
     */
    solveUniquePairInBlock: function solveUniquePairInBlock() {        
    },        
    resetField: function resetField() {
        var self = this;
        var cells = $('input.sudokucell');
        cells.each(function() { 
            $(this).parent().removeClass('has-error');
            if(Number($(this).val()) > 0 && $(this).attr('readonly') == undefined) {
                $(this).val('');                
            }                                 
            self.cellValueChanged(this);
          }
        );
    },        
    /**
     * wrapper for console.log()
     * @returns {this} for methed chaining
     */
    log: function log() {
        if(global.console) {
             global.console.log(arguments);
        }
        return this;
      }        
    };
    
    /**
     * @var fSet FieldSet [[{val,sets},..],..]
     */
    Sudoku.init = function init(fSet) {        
        var self = this;           
        self.fieldSet = fSet || fieldSets[defaultSet];       
    };
    
    Sudoku.init.prototype = Sudoku.prototype;    
    
  global.Sudoku = global.$udoku = Sudoku;
})(window, jQuery);