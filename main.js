const { Chess } = require("chess.js");
let fens = [];

const chess=new Chess(); //here we will load our pgn
const loaded = chess.load_pgn('1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 {giuoco piano} *');

let GameLength = chess.history();

console.log(loaded); // succesfully load the pgn , must return true
console.log(chess.history()); //see the moves in array format

while (chess.undo()) {
    chess.undo()
  }

  for (let i=0 ; i<GameLength.length;i++)
  {
      chess.move(GameLength[i]);
      fens.push({move: i+"."+ GameLength[i].toString(), fen:chess.fen().toString(),comment:chess.get_comment()|| 'NaN'})
  }

console.log(fens);