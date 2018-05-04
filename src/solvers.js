/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n,) {

  var solution = undefined;
  var board = new Board({n: n});
  
  var recursion = function(currentBoard, rowIndex) {
    console.log(currentBoard.rows());
    if (n === rowIndex) {
      if(!currentBoard.hasAnyRooksConflicts()) {
        solution = currentBoard;
      }
      return;
    }

    for( var colIndex = 0; colIndex < n; colIndex++ ) {
      currentBoard.togglePiece( rowIndex, colIndex );
      if( currentBoard.hasAnyRooksConflicts() ) {
        currentBoard.togglePiece( rowIndex, colIndex );
      } else {
        recursion( currentBoard, rowIndex+1 );
      }
    }
  }  
  recursion(board, 0);

  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  // var solution = 0;
  // var board = new Board({n: n});
  
  // var recursion = function(currentBoard, rowIndex) {
  //   if (n === rowIndex) {
  //     if(!currentBoard.hasAnyRooksConflicts()) {
  //       solution++;
  //     }
  //     return;
  //   }

  //   for( var colIndex = 0; colIndex < n; colIndex++ ) {
  //     currentBoard.togglePiece( rowIndex, colIndex );
  //     if( currentBoard.hasAnyRooksConflicts() ) {
  //       currentBoard.togglePiece( rowIndex, colIndex );
  //     } else {
  //       recursion( currentBoard, rowIndex+1 );
  //     }
  //   }
  // }  
  // for (var i = 0; i < n length; i++)
  // recursion(board, i);

  // //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return solution;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // var solution = new Board({n: n}); //fixme
  // create new Board

  
  // for (var i = 0; i < n; i++) {
  //   for (var j = 0; j < n; j++) {
  //     solution.togglePiece(i, j);
  //     if (solution.hasAnyQueensConflicts()) {
  //       solution.togglePiece(i, j);
  //     }
  //   }
  // }

  //console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  //console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
