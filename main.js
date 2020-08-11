const { Chess } = require("chess.js");
function Shapes(value , move)
{
  const Dictionary =
  {
    Y: "yellow",
    G: "green",
    R: "red",
  };
  if(value.indexOf("%") === -1){
      return [] ;
    }
  const moves = value.split('%csl').pop().split('%cal').pop().split(']').shift().trim().split(',');
  return moves.map((item) =>
  {
    return {
      brush: Dictionary[item.substring(0,1)],
      orig: item.substring(1,3),
      dest: item.substring(3,5),
    }
  });
}
module.exports = (pgn) => {
    const chess=new Chess(); //here we will load our pgn
    const loaded = chess.load_pgn(pgn);
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
        details.shapes=Shapes(comment, move);
        return details;
      });
      game.unshift(initial);
      return game;
 }
