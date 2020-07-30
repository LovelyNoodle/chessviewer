const { Chess } = require("chess.js");

// FIXME: export a function that takes "pgn" as its only argument and returns the fens

// TODO: const, not let
let fens = [];

const chess=new Chess(); //here we will load our pgn
const loaded = chess.load_pgn('1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 {giuoco piano} *');

// TODO: const, not let
let GameLength = chess.history();

// TODO: no console.log when pushing to github, it is for debugging only
console.log(loaded); // succesfully load the pgn , must return true
console.log(chess.history()); //see the moves in array format

while (chess.undo()) {
    chess.undo()
  }

  for (let i=0 ; i<GameLength.length;i++)
  {
      chess.move(GameLength[i]);

      // TODO: first create an object, then push it to the array
      // FIXME: when no comment is available, the "comment" key should be missing from the result
      fens.push({move: i+"."+ GameLength[i].toString(), fen:chess.fen().toString(),comment:chess.get_comment()|| 'NaN'})
  }

// TODO: same as above
console.log(fens);