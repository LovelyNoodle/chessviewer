
  const Shapes = require('./shapes');
  const BuildMoveInfo= (chess,move) => {
    const details ={};
        details.move = move;
        details.fen = chess.fen();
        const comment = chess.get_comment();
        const shapes = Shapes(comment);
        if(comment)
        {
        details.comment = comment;
        }
        if(shapes.length>0)
        {
        details.shapes= shapes;
        }
        return details;
  }

    module.exports = BuildMoveInfo;
