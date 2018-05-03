// This file is a Backbone Model (don't worry about what that means)
// It's part of the Board Visualizer
// The only portions you need to work on are the helper functions (below)

(function() {

  window.Board = Backbone.Model.extend({

    initialize: function (params) {
      if (_.isUndefined(params) || _.isNull(params)) {
        console.log('Good guess! But to use the Board() constructor, you must pass it an argument in one of the following formats:');
        console.log('\t1. An object. To create an empty board of size n:\n\t\t{n: %c<num>%c} - Where %c<num> %cis the dimension of the (empty) board you wish to instantiate\n\t\t%cEXAMPLE: var board = new Board({n:5})', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: grey;');
        console.log('\t2. An array of arrays (a matrix). To create a populated board of size n:\n\t\t[ [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...] ] - Where each %c<val>%c is whatever value you want at that location on the board\n\t\t%cEXAMPLE: var board = new Board([[1,0,0],[0,1,0],[0,0,1]])', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: grey;');
      } else if (params.hasOwnProperty('n')) {
        this.set(makeEmptyMatrix(this.get('n')));
      } else {
        this.set('n', params.length);
      }
    },

    rows: function() {
      return _(_.range(this.get('n'))).map(function(rowIndex) {
        return this.get(rowIndex);
      }, this);
    },

    togglePiece: function(rowIndex, colIndex) {
      this.get(rowIndex)[colIndex] = + !this.get(rowIndex)[colIndex];
      this.trigger('change');
    },

    _getFirstRowColumnIndexForMajorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex - rowIndex;
    },

    _getFirstRowColumnIndexForMinorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex + rowIndex;
    },

    hasAnyRooksConflicts: function() {
      return this.hasAnyRowConflicts() || this.hasAnyColConflicts();
    },

    hasAnyQueenConflictsOn: function(rowIndex, colIndex) {
      return (
        this.hasRowConflictAt(rowIndex) ||
        this.hasColConflictAt(colIndex) ||
        this.hasMajorDiagonalConflictAt(this._getFirstRowColumnIndexForMajorDiagonalOn(rowIndex, colIndex)) ||
        this.hasMinorDiagonalConflictAt(this._getFirstRowColumnIndexForMinorDiagonalOn(rowIndex, colIndex))
      );
    },

    hasAnyQueensConflicts: function() {
      return this.hasAnyRooksConflicts() || this.hasAnyMajorDiagonalConflicts() || this.hasAnyMinorDiagonalConflicts();
    },

    _isInBounds: function(rowIndex, colIndex) {
      return (
        0 <= rowIndex && rowIndex < this.get('n') &&
        0 <= colIndex && colIndex < this.get('n')
      );
    },


    /*
         _             _     _
     ___| |_ __ _ _ __| |_  | |__   ___ _ __ ___ _
    / __| __/ _` | '__| __| | '_ \ / _ \ '__/ _ (_)
    \__ \ || (_| | |  | |_  | | | |  __/ | |  __/_
    |___/\__\__,_|_|   \__| |_| |_|\___|_|  \___(_)

 */
    /*=========================================================================
    =                 TODO: fill in these Helper Functions                    =
    =========================================================================*/

    // ROWS - run from left to right
    // --------------------------------------------------------------
    //
    // test if a specific row on this board contains a conflict
    hasRowConflictAt: function(rowIndex) {
      
      var row = this.get(rowIndex);
        
      // for (var pos of row) { 
      //   pos++;
      // }
      
      var res = row.reduce(function(acc, el) {
        return acc + el;
      });
      return res > 1; // fixme
    },

    // test if any rows on this board contain conflicts
    hasAnyRowConflicts: function() {
      
      // for(let i = 0; i < this.rows(); i++) {
      //     if (arr.hasRowConflictAt(i)) {
      //     return true;
      //       if (arr.reduce(function(acc, el) {return acc + el}) > 1) {
      //   return true;
      // }     
      //   }

      for (let arr of this.rows()) {
        if (arr.reduce(function(acc, el) { return acc + el; }) > 1) {
          return true;
        }
      }
    
      
      return false; // fixme
    },



    // COLUMNS - run from top to bottom
    // --------------------------------------------------------------
    //
    // test if a specific column on this board contains a conflict
    hasColConflictAt: function(colIndex) {
      return false; // fixme
    },

    // test if any columns on this board contain conflicts
    hasAnyColConflicts: function() {
      
      // var objForCol = {};
      
      // this.rows().forEach(function(row,index) {

      //   objForCol[index] = 0;
      //   row.forEach(function(el, ind) {
      //     objForCol[ind] = objForCol[ind] + el;
      //   });
      // });

      var attrN = this.attributes['n'];
      for (var i = 0; i < attrN; i++) {
        var count = 0;
        for (var j = 0; j < attrN; j++) {
          this.get(j)[i];
          count = count + this.get(j)[i];
        }
        if (count > 1) {
          return true;
        }
      }
      return false; // fixme
    },



    // Major Diagonals - go from top-left to bottom-right
    // --------------------------------------------------------------
    //
    // test if a specific major diagonal on this board contains a conflict
    hasMajorDiagonalConflictAt: function(majorDiagonalColumnIndexAtFirstRow) {
      return false; // fixme
    },

    // test if any major diagonals on this board contain conflicts
    hasAnyMajorDiagonalConflicts: function() {
    
    // var rec = function (rowStart, colStart) {
      
    //   // var steps = 
    //   var cycles;
    //   rowStart = rowStart || 2; // ++
    //   colStart = colStart || 0; // ++
    //   if (Math.abs(rowStart - colStart) === 2) {
    //     cycles = 2;
    //   } else if (Math.abs(rowStart - colStart) === 1)
    //     cycles = 3;
    //   } else {
    //     cycles = 4;
    //   }
          
    //   return false; // fixme
    //   }

      // create storage obj



      var majorDiagonal = {};
      // loop through rows array
      var num = this.rows().length;
      for (var i = 0; i < num; i++) {
        for (var j = 0; j < num; j++) {
          var k = i - j;
          if (majorDiagonal[k]) {
            majorDiagonal[k].push(this.rows()[i][j]);
          } else {
            majorDiagonal[k] = [];
            majorDiagonal[k].push(this.rows()[i][j]);
          }
        }
      }
      for (var key in majorDiagonal) {
        if (majorDiagonal[key].reduce(function(acc, el) { return acc + el; }) > 1) {
          return true;
        }
      }
      return false;
    },
    // loop through each row
    // if _getFirstRowMajor of current el is -(n - 2)
    // if storage obj at key -(n - 2) is undefined
    // create empty array at key and push el to key
    // else add to storage obj at key -(n - 2)
      

      
      
    



    // Minor Diagonals - go from top-right to bottom-left
    // --------------------------------------------------------------
    //
    // test if a specific minor diagonal on this board contains a conflict
    hasMinorDiagonalConflictAt: function(minorDiagonalColumnIndexAtFirstRow) {
      return false; // fixme
    },

    // test if any minor diagonals on this board contain conflicts
    hasAnyMinorDiagonalConflicts: function() {
      var minorDiagonal = {};
      // loop through rows array
      var num = this.rows().length;
      for (var i = 0; i < num; i++) {
        for (var j = 0; j < num; j++) {
          var k = i + j;
          if (minorDiagonal[k]) {
            minorDiagonal[k].push(this.rows()[i][j]);
          } else {
            minorDiagonal[k] = [];
            minorDiagonal[k].push(this.rows()[i][j]);
          }
        }
      }
      for (var key in minorDiagonal) {
        if (minorDiagonal[key].reduce(function(acc, el) { return acc + el; }) > 1) {
          return true;
        }
      }
      return false; // fixme
    }

    /*--------------------  End of Helper Functions  ---------------------*/


  });

  var makeEmptyMatrix = function(n) {
    return _(_.range(n)).map(function() {
      return _(_.range(n)).map(function() {
        return 0;
      });
    });
  };

}());
