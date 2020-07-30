const chessviewer = require('./main');
const expect = require('chai').expect;

describe.only('basic example', function () {
  // Arrange
  const pgn = '1. e4';

  // Act
  const moments = chessviewer(pgn);

  // Assert
  expect(moments.length).to.equal(1);
  expect(moments[0].move).to.equal('e4');
  expect(moments[0].fen).to.equal('rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1');
});

describe('invalid PGN', function () {
  // what happens when an invalid PGN is passed
});

describe('with comments', function () {
  // test only basic functionality + comments
});

describe('with special symbols, also called NAGs', function () {
  // test only basic functionality + NAGs
});

describe('with shapes', function () {
  // test only basic functionality + shapes
});

describe('with variations', function () {
  // test only basic functionality + variations
});

describe('everything put together', function () {
  // test everything
});
