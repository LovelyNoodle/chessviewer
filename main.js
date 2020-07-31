const { Chess } = require("chess.js");

module.exports = (pgn) => {
    const fens = [];

    const chess=new Chess(); //here we will load our pgn
    const loaded = chess.load_pgn(pgn);
    
    const GameLength = chess.history();

    while (chess.undo()) {
        chess.undo()
      }
    
      for (let i=0 ; i<GameLength.length;i++)
      {
          const details ={};
          chess.move(GameLength[i]);
          details.move =GameLength[i].toString();
          details.fen = chess.fen().toString();
          comment = chess.get_comment();
          if (comment) {
            details.comment = comment;
          }
          fens.push(details);
        }
        console.log(fens);
     return fens;
 }

