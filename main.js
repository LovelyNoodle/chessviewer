const { Chess } = require("chess.js");
const Shapes = require('./functions/shapes');
module.exports = (pgn) => {
    const chess=new Chess(); //here we will load our pgn
    const loaded = chess.load_pgn(pgn);
    if(!loaded)
    {
      return [];
    }
    const history= chess.history();
    while (chess.undo()) {
        chess.undo()
      }
    const initial = {fen:chess.fen(),comment:chess.get_comment()}
        const game = history.map((move) => {
        const details ={};
        chess.move(move);
        details.move = move;
        details.fen = chess.fen();
        const comment = chess.get_comment();
        details.comment = comment;
        details.shapes= Shapes(comment);
        return details;
      });
      game.unshift(initial);
      return game;
 }
