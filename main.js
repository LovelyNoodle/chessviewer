const { Chess } = require("chess.js");

module.exports = (pgn) => {
    const chess=new Chess(); //here we will load our pgn
    const loaded = chess.load_pgn(pgn);
    const history= chess.history();
    while (chess.undo()) {
        chess.undo()
      }
      return history.map((move) => {
        const details ={};
        chess.move(move);
        details.move = move;
        details.fen = chess.fen();
        comment = chess.get_comment();
        if (comment) {
          details.comment = comment;
        }
        return details;
      });
 }

