const { Chess } = require('chess.js');
const BuildMoveInfo = require('./functions/BuildMoveInfo');
module.exports = (pgn) => {
  const chess = new Chess(); //here we will load our pgn
  const loaded = chess.load_pgn(pgn);
  if (!loaded) {
    return [];
  }
  const history = chess.history();
  while (chess.undo()) {
    chess.undo();
  }
  const initial = BuildMoveInfo(chess);
  const game = history.map((move) => {
    chess.move(move);
    return BuildMoveInfo(chess, move);
  });

  game.unshift(initial);
  return game;
};
