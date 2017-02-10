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

    // /**
    //  * field types
    //  * val: -1 - no field, 0 - empty field, 1-9 - value
    //  * sets: CellSets this cell is assigned to
    //  * {val:0,sets:[1],style:['n']}
    //  */
    // var fld = {
    //     empty: {val:0,sets:[1],style:'n o s w'}
    // };
    var defaultSet = 0;

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
       * Array of prepared possible sets.
       *
       * @var [[{1:fld,..},..]]
       */
      fieldSets: [[]],
      /**
       *
       */
      bruteForceLoops: 0,
      /**
       * @var {Object}   {cellId:[val1,val2,..]}
       */
      bruteForceValuesChecked: {},
      bruteForceLog: [],
      /**
       * builds the gaming field
       */
      buildGameField: function buildGameField() {
          var self = this;
          $('#gameField').html('');
          var data = self.fieldSet;
          var table = $("<table/>").addClass('gameField');
          $.each(data, function(rowIndex, r) {
             var row = $("<tr/>");
             $.each(r, function(colIndex, c) {
                 var el = $("<div/>");
                 if(Number(c.val) == 0) { // just empty feld
                    var possibleValues = self.getPossibleValuesForCell(colIndex);
                    var input = $("<input/>")
                        .attr('type', 'number')
                        .attr('placeholder',possibleValues)
                        .addClass('form-control sudokucell')
                        .attr('rel', colIndex)
                    ;
                    for(var i in c.sets) {
                        el.addClass('set_'+c.sets[i]);
                    }
                    input.change(function() {self.cellValueChanged(this);});
                    el.attr('id','cell_'+colIndex);
                    el.append(input);
                 } else if(Number(c.val) > 0 && Number(c.val) < 10) { //pre defined values
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
          self.fixPossibleValues();
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
      /**
       *
       */
      fixPossibleValues: function fixPossibleValues() {
        var self = this;
        var valuesFixed = 0;
        //if two placeholders have the same pair of values, we can remove this values from the other placeholders in this block
        var pairs = {}; //{setId:{cellId:placeHolder,..},..}
        var cells = $('input.sudokucell');
        cells.each(function() {
            var cell = this;
            if(Number($(cell).val()) == 0 && $(cell).attr('placeholder').length == 3) {
                var dataPlace = self.findCellDataById($(cell).attr('rel'));
                if(dataPlace) {
                    var cellSets = self.fieldSet[dataPlace.row][dataPlace.col].sets;
                    for(var i=0; i < cellSets.length; i++) {
                        var cellSet = cellSets[i];
                        if(pairs[cellSet] == undefined) {
                            pairs[cellSet] = [];
                        }
                        pairs[cellSet][$(cell).attr('rel')] = $(cell).attr('placeholder');
                    }
                }

            }
        });

        //found some fields with two placeholders. Do the y have the pairs?
        for(var set in pairs) {
            //cellIds = Object.keys(pairs[set]);
            if(pairs[set].length > 1) {
                for(var cellId in pairs[set]) {
                    //test if we have two equal pairs
                    if(pairs[set].lastIndexOf(pairs[set][cellId]) > cellId) {
                        var cellsToFix = $('.set_'+set+' input.sudokucell');
                        cellsToFix.each(function() {
                            var cellToFix = this;
                            if($(cellToFix).attr('rel') in pairs[set]) {
                                return;
                            }
                            //geit ids, we have to remove from the placeholders
                            var placeholders = JSON.parse('['+$(cellToFix).attr('placeholder')+']');
                            var toRemove     = JSON.parse('['+pairs[set][cellId]+']');
                            placeholders = placeholders.filter( function( el ) {
                                return toRemove.indexOf( el ) < 0;
                            });
                            $(cellToFix).attr('placeholder',placeholders);
                            valuesFixed++;
                        });
                    }
                }
            }
        }
        return valuesFixed;
      },
      cellValueChanged: function cellValueChanged(el) {
          var self = this;
          var ok = true;
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
                         if(~c.sets.indexOf(CellSet)) { //  != -1
                           var possibleValues = self.getPossibleValuesForCell(colIndex);
                           var input = $('div#cell_'+colIndex+' input')[0];
                                $(input).attr('placeholder',possibleValues);
                                /**
                                 * @todo think about error removal
                                 */
                                if(0 < Number($(el).val()) &&
                                   el !== input &&
                                   (Number($(input).val()) === Number($(el).val()))) {
                                    $(el).parent().addClass('has-error');
                                    $(input).parent().addClass('has-error');
                                    ok = false;
                                }
                         }
                     });
                  });
              }
          }
          self.fixPossibleValues();
          return ok;
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
    /**
     * returns game field statisic
     *
     * @return {Object}  {free:{Number},set:{Number},bind:{Number}}
     */
    getFieldStatus: function getFieldStatus() {
        var self = this;
        var result = {free:0,set:0,bind:0,err:0};
        var cells = $('input.sudokucell');
        cells.each(function() {
            if(Number($(this).val()) > 0 && Number($(this).val()) < 10) {
                if($(this).attr('readonly')) {
                    result.bind++;
                } else {
                    result.set++;
                }
            } else if (Number($(this).val()) == 0) {
                if($(this).attr('placeholder').length > 0) {
                    result.free++;
                } else {
                    result.err++;
                }
            }
          }
        );
        return result;
    },
    /**
     * save game field
     */
    saveGame: function saveGame() {
      var self = this;
      var backUp = {};
      //backUp.gameField = $('#gameField').clone(true, true);
      backUp.fieldSet  = (JSON.parse(JSON.stringify(self.fieldSet)));
      //self.backUp.push(backUp);
      return backUp;
    },
    /**
     * restore game field
     */
    restoreGame: function restoreGame(backUp) {
        var self = this;
        //$('#gameField').html(backUp.gameField);
        self.fieldSet = (JSON.parse(JSON.stringify(backUp.fieldSet)));
        $('#gameField').html('');
        self.buildGameField();
    },
    solve: function solve(useBruteForce) {
      var self = this;
      var fieldStatus = self.getFieldStatus();
      var keepSolving = true;
      while (keepSolving) {

        self.solveSingles();
        if(fieldStatus.free > 0 && fieldStatus.free > self.getFieldStatus().free) {
            fieldStatus = self.getFieldStatus();
            continue;
        }

        self.solveHiddenSingles();
        if(fieldStatus.free > 0 && fieldStatus.free > self.getFieldStatus().free) {
            fieldStatus = self.getFieldStatus();
            continue;
        }
        //@todo add more logic here before we use brute force

        //and kind of brute force
        if(useBruteForce && fieldStatus.free > 0) {
          self.bruteForceLoops = 0;
          self.solveBruteForce();
          self.solve();
          alert('Done with brute force... '+self.bruteForceLoops+' loops.');
        }
        keepSolving = false;
      }
      return true;
    },
    solveBruteForce: function solveBruteForce (savedGame) {
      var self = this;
      var fieldStatus = self.getFieldStatus();
    //   if(false && fieldStatus.bind+fieldStatus.set < 17) {
      if(fieldStatus.free > 75 && !confirm('There are '+Number(fieldStatus.free)+' free fields to brute force. Are you sure?')) {
        //   alert('Set at least 17 cells before use brute force!');
          throw 'stop';
      }
      savedGame  =  savedGame || self.saveGame();
      //self.restoreGame(savedGame);
      var cells = $('input.sudokucell');
      $(cells).each(function () {
        if(Number($(this).val()) == 0 && $(this).attr('placeholder').length > 0) {
          var cell = this;
          self.bruteForceLoops++;
          //no more brute force!
          if(self.bruteForceLoops > 500) {
              throw 'To much brute force!';
          }
          self.log('brute force cell ['+$(cell).attr('rel')+'] #'+self.bruteForceLoops);
          var possibilities = JSON.parse('['+$(this).attr('placeholder')+']');
          for(var i = 0 ; i < possibilities.length ; i++) {
            var cellSave = self.saveGame();
            //self.restoreGame(cellSave);
//self.log('Seting '+$(cell).val()+' into '+$(cell).attr('rel'),possibilities,i);
            //set value
            if(self.setValue(cell, possibilities[i])) {
              //solve 1 + 2
              //self.solveSingles();
              //self.solveHiddenSingles();
              //self.solve();
            }
            if(self.getFieldStatus().err) {
              //self.resetField();  //maybe keep this?
              self.setValue(cell, '');
              continue;
            }
//alert(possibilities[i]+':'+$(cell).attr('rel')+'['+$(this).attr('placeholder')+'] free'+self.getFieldStatus().free);
            //if ok - save data and call recursion
            if(!self.solveBruteForce()) {
              //self.restoreGame(cellSave);
              //self.resetField();
              self.setValue(cell, '');
              continue;
            } else if (self.getFieldStatus().free < 1) { //Solution found?
                  return false;
            } else { //if not ok, reset value
              //we had error with this placeholder - use another
              //self.restoreGame(cellSave);
              //self.resetField();
              self.setValue(cell, '');
            }
          }
          //if value was ok keep in and return false
          if($(cell).val()) {
            //return false;
          } else {
// self.log('None of the values were good. Go back to previous cell.['+$(cell).attr('rel')+']');
            //self.restoreGame(savedGame);
            return false;
          }
          //if value is empty - keep going
        }
      });
      if (self.getFieldStatus().free < 1 && self.getFieldStatus().err < 1) {
          return true;
      }
    },
    /**
     *
     */
    setValue: function setValue(cell, value) {
      var self = this;
      $(cell).val(value);
      var dataPlace = self.findCellDataById($(cell).attr('rel'));
      if(dataPlace) {
        self.fieldSet[dataPlace.row][dataPlace.col].val = value;
        return (self.cellValueChanged(cell) && self.getFieldStatus().err < 1);
      }
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
     * find placeholders that have multiple values but one value is unique for this placeholder
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
                        });
                    }
                }
              }
            );
        }
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
     * @returns {this} for method chaining
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
        self.fieldSet = fSet || self.fieldSets[defaultSet];
    };

    Sudoku.init.prototype = Sudoku.prototype;

  global.Sudoku = global.$udoku = Sudoku;
})(window, jQuery);