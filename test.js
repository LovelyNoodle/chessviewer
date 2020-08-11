const chessviewer = require('./main');
const expect = require('chai').expect;

describe('basic examples', () => {
  it('basic PGN with one move', () => {
    // Arrange
    const pgn = '1. e4';

    // Act
    const moments = chessviewer(pgn);

    // Assert
    expect(moments.length).to.equal(1);
    expect(moments[0].move).to.equal('e4');
    expect(moments[0].fen).to.equal(
      'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1'
    );
  });

  it('basic PGN with two moves', () => {
    // Arrange
    const pgn = '1. e4 e5';

    // Act
    const moments = chessviewer(pgn);

    // Assert
    expect(moments.length).to.equal(2);
    expect(moments[1].move).to.equal('e5');
    expect(moments[1].fen).to.equal(
      'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2'
    );
  });
});

describe('invalid PGN', () => {
  it('first move is invalid in the PGN', () => {
    // Arrange
    const pgn = '1. e5';

    // Act
    const moments = chessviewer(pgn);

    // Assert
    expect(moments.length).to.equal(0);
  });
});

describe('with comments', () => {
  it('comment after the first move', () => {
    // Arrange
    const pgn = '1. e4 {one of the most popular openings for white}';

    // Act
    const moments = chessviewer(pgn);
    console.log(moments);
    // Assert
    expect(moments[1].move).to.equal('e4');
    expect(moments[1].comment).to.equal(
      'one of the most popular openings for white'
    );
  });

  it('comment before the first move', () => {
    // Arrange
    const pgn ='{Test} 1.e4';

    //Act
    const moments = chessviewer(pgn);

    //Assert
    expect(moments[0].comment).to.equal('Test');
    expect(moments[1].move).to.equal('e4');
  });
});

describe.only('with shapes', () => {
  it('returns empty when no shapes are present in a comment', () => {
    // Arrange
    const pgn = '1. e4 {no comments here} *';

    // Act
    const moments = chessviewer(pgn);

    // Assert
    expect(moments[1].shapes.length).to.equal(0);
  })
  it('e4 field with green highlight', () => {
    // Arrange
    const pgn = '1. e4 {[%csl Ge4]}';

    // Act
    const moments = chessviewer(pgn);

    // Assert
    expect(moments[1].shapes[0].brush).to.equal('green');
    expect(moments[1].shapes[0].orig).to.equal('e4');
  });

  it('d5 & f5 fields with yellow highlight', () => {
    // Arrange
    const pgn = '1. e4 {[%csl Yd5,Yf5]}';

    // Act
    const moments = chessviewer(pgn);

    // Assert
    expect(moments[1].shapes[0].brush).to.equal('yellow');
    expect(moments[1].shapes[1].brush).to.equal('yellow');
    expect(moments[1].shapes[0].orig).to.equal('d5');
    expect(moments[1].shapes[1].orig).to.equal('f5');
  });

  it('d1-h5 diagonal with red highlight', () => {
    // Arrange
    const pgn = '1. e4 {[%cal Rd1h5]}';

    // Act
    const moments = chessviewer(pgn);

    // Assert
    expect(moments[1].shapes[0].brush).to.equal("red");
    expect(moments[1].shapes[0].orig).to.equal('d1');
    expect(moments[1].shapes[0].dest).to.equal('h5');
  });
});

describe('with variations', () => {
  // test only basic functionality + variations
});

describe('everything put together', () => {
  // test everything
});
