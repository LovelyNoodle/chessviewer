const chessviewer = require('./main');
const expect = require('chai').expect;

it('works with the simplest pgn ever', function() {
  // Arrange
  const pgn = '1. e4 e5';

  // Act
  const result = chessviewer(pgn);
  const first = result[0];

  // Assert
  expect(result.length).to.equal(2);
  expect(first.move).to.equal('e4');
  expect(first.fen).to.equal('rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1');
});